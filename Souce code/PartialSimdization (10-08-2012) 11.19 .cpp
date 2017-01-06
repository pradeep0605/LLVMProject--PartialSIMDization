#define BBV_NAME "bb-vectorize"
#define DEBUG_TYPE BBV_NAME
#include "llvm/Constants.h"
#include "llvm/DerivedTypes.h"
#include "llvm/Function.h"
#include "llvm/Instructions.h"
#include "llvm/IntrinsicInst.h"
#include "llvm/Intrinsics.h"
#include "llvm/LLVMContext.h"
#include "llvm/Pass.h"
#include "llvm/Type.h"
#include "llvm/ADT/DenseMap.h"
#include "llvm/ADT/DenseSet.h"
#include "llvm/ADT/SmallVector.h"
#include "llvm/ADT/Statistic.h"
#include "llvm/ADT/STLExtras.h"
#include "llvm/ADT/StringExtras.h"
#include "llvm/Analysis/AliasAnalysis.h"
#include "llvm/Analysis/AliasSetTracker.h"
#include "llvm/Analysis/ScalarEvolution.h"
#include "llvm/Analysis/ScalarEvolutionExpressions.h"
#include "llvm/Analysis/ValueTracking.h"
#include "llvm/Support/CommandLine.h"
#include "llvm/Support/Debug.h"
#include "llvm/Support/raw_ostream.h"
#include "llvm/Support/ValueHandle.h"
#include "llvm/Target/TargetData.h"
#include "llvm/Transforms/Vectorize.h"
#include "llvm/Transforms/Utils/Cloning.h"
#include <stdlib.h>
#include <fstream>
#include <algorithm>
#include <map>


using namespace llvm;


static cl::opt<bool>
DebugAPV("bb-vectorize-apv",
  cl::init(false), cl::Hidden,
  cl::desc("When debugging is enabled, output the DEBUG in this file"));

static cl::opt<bool>
DebugDAG("bb-vectorize-DAG",
  cl::init(false), cl::Hidden,
  cl::desc("When debugging is enabled, output the dotty specification of DAG"));


namespace {

class PartialSimdizer;

    //FIXME : Standardize this function
    //constants are used in this function.
    //  8-16  :  arithmetic operations (Binary ops)
    //  23-28 :  logical operations    (Binary ops)
    // This function whether an instruction is vectorizable by checking its opcode.   
    static  bool isInstructionVectorizable(Instruction *I)
    {
  	 if ( ( (((I->getOpcode())< 17) && ((I->getOpcode())> 7)) ||
                 (((I->getOpcode()) > 22) && ((I->getOpcode()) < 28))))
                          return true;
	 
	 return false;	   
    }

class Node;
class NodeInfo
{
	Node *Pred1;// incoming edges
	Node *Pred2;//
	unsigned int Opcost, Scost, Vcost, Level, NodeNum;
	bool IsVectorizable,IsLeaf;
	public:
	
	std::vector<Node *> OutgoingEdges; // links to parents
	NodeInfo()
	{
		Pred1=Pred2=NULL;
		Opcost=Scost=Vcost=Level=NodeNum=IsVectorizable=IsLeaf=0;
	}
	
	NodeInfo(Instruction *I)
	{	
		Pred1=Pred2=NULL;
		Opcost=Scost=Vcost=Level=NodeNum=IsVectorizable=IsLeaf=0;
		IsVectorizable =isInstructionVectorizable(I);
		//get the opcost according to the instruciton and assign it to scost.
	}
	
	void addOutgoingEdge(Node *I)
	{		OutgoingEdges.push_back(I);	}	
	
       // SET operations
	void setOpcost(unsigned int Opcost)
	{  	this->Opcost=Opcost;   }

	void setScost(unsigned int Scost)
	{  	this->Scost=Scost;   }

	void setVcost(unsigned int Vcost)
	{  	this->Vcost=Vcost;   }

	void setLevel(unsigned int Level)
	{  	this->Level=Level;   }

	void setNodeNum(unsigned int NodeNum)
	{  	this->NodeNum=NodeNum;   }

	void setIsLeaf(bool IsLeaf)
	{       this->IsLeaf=IsLeaf;     }

	void addPredecessor( Node *I)
	{
		if(Pred1==NULL) // add first predecessor to Pred1 only
		     Pred1=I;
		else if(Pred2==NULL) // if perd1 is not null then pred2 should be assigned with second predecessor
		     Pred2=I;
	}


	//Check operations
	bool isVectorizable()
	{		return IsVectorizable;	}

	bool isLeaf()
	{		return IsLeaf;		}

	//GET operations
	unsigned int getOpcost()
	{ 		return Opcost; 	}
	
	unsigned int getScost()
	{		return Scost;	}
	
	unsigned int getVcost()
	{		return Vcost;	}
	
	unsigned int getLevel()
	{		return Level;	}

	unsigned int getNodeNum()
	{		return NodeNum;	}


	Node * getPredecessor(unsigned int index)
	{	if(index==1)
		    return Pred1;
		else if(index==2)
		    return Pred2;
	
		return NULL;
	}
	
};


class Node
{
	
	public:
	Instruction *I;
	NodeInfo info;	
	
	Node(Instruction *I)
	{
		this->I = I;
		info = NodeInfo(I);
	}
};

typedef std::vector<Node *> Nodes;


class PartialSimdizer
{
    // This function checks whether a given basic block is within a loop or not..
    // This is done because any branching statements may divide the basic block within
    // the loop of the body. Even those divided basic block may have vectorization oppurtunities

   bool isBodyOfLoop(BasicBlock &BB)
    {
          static unsigned InLoop=0;

          if(BB.getName().startswith("for.body") || BB.getName().startswith("while.body") ||  BB.getName().startswith("do.body"))
          {
                InLoop++;
                DEBUG( if(DebugAPV) dbgs()<<"\n Encountered loop begin: "<<BB.getName()<<"\n");
		return true;
          }
          if( BB.getName().startswith("for.end")|| BB.getName().startswith("while.end")|| BB.getName().startswith("do.end"))
          {
                InLoop--;
                DEBUG( if(DebugAPV) dbgs()<<"\n Encountered loop end: "<<BB.getName()<<"\n");
		return true;
          }
         if(InLoop)
	 	return true;
	 else
	 	return false;
    }
    
    // FIXME: Here we check if the number of vectorizable operations of same type >=2 (MinTileSize = 2)
    // This function returns true if vectorization is possible to the basic block, otherwise returns false 
    bool isLargeEnough(BasicBlock &BB)
    {
           unsigned int  MapArray[22]={0}, LowerBound=8;
           BasicBlock::iterator I=BB.begin(), end=BB.end();

           for(;I!=end; ++I)
                  if ( isInstructionVectorizable(I) && ((++MapArray[(I->getOpcode())-LowerBound]) >=2))
                  {
                        //DEBUG (if(DebugAPV) dbgs()<<"Opcode:" << I->getOpcode() << "\n" << "Count is : " << MapArray[(I->getOpcode())-LowerBound]<<"\n");
                        return true;
                  }
           return false;
    }


    bool isEligible(BasicBlock &BB)
    {
        // check for all the conditions..       
        if( isBodyOfLoop(BB))
        {
                //check for all other conditions.
            if(isLargeEnough(BB))
            {
                 DEBUG( if(DebugAPV) dbgs()<<"Basic Block is Large enough to be vectorized ");
		 return true;
            }
        }
	return false;
    }


// STUB :REPLACE:  replace the function of the body with the opcost of the instruction
   unsigned int getOpcost(Instruction *I)
   {
   	// create table or uses swith to return values 
   	return 4;
   }



 // This function creates DAGNodes, assigns node numbers, 
 // creates mapping from node number to node and also mapping from
 // instruction to node. Order of function is O(n)
 // where 'n' is the number of nodes in the basic block
    void createDAGNodes(BasicBlock &BB, Nodes &DAGNodes, Nodes &NodeNumMap,std::map<Instruction *,Node *> &InstNodeMap)
    {
 	        unsigned int j=1;
    	        BasicBlock::iterator I=BB.begin(), E=BB.end();
		//std::ofstream out("/home/kashyap/dump.txt");
		for(;I!=E;++I, ++j)
		{
		            Node *N = new Node(I); // also check if instruction is vectorizable
			    N->info.setNodeNum(j); // assigns node number
			    N->info.setOpcost(getOpcost(I));
			    DAGNodes.push_back(N);
			    NodeNumMap.push_back(N); // creates map between nodenumber and Node so as to provide O(1) mapping.
			    InstNodeMap[I]=N;       // creates mapping between the Instruction * to Node *.. O(1) mapping.
 		            DEBUG(if(DebugAPV) dbgs()<<"Node Number:"<<j<<"\t Orignial"<<*(N->I)<<" Pushed Back:"<<*((InstNodeMap[I])->I)<<"\n");

			   //DEBUG(if(DebugAPV) dbgs()<<"Node Number:"<<j<<"\t Orignial"<<*(N->I)<<" Pushed Back:"<<*(NodeMap[j]->I)<<"\n");
		}
    }

    //This function checks whether an Instruction is present in Basic block or not
     bool isInstPresentInBasicBlock(Instruction *I, std::map<Instruction *, Node *> &InstNodeMap)
    {
    		// The instruction to node map (InstNodeMap) created earlier is used to check 
		// whether an instruction is present in the basic block or not.
		// If present it return the pointer value, else return NULL.
	   	  if(InstNodeMap[I]!=NULL) // if not NULL inst is present in the basic block
		  	return true;
	  
	   	return false;// instruction is not present in the basic block
    }

   // This function creates DAG from DAGNodes, by creating edges (pointers) between
   // parent and children and wise versa
   void createDAG(BasicBlock &BB, Nodes &DAGNodes, std::map<Instruction *,Node *> &InstNodeMap)
   {
		for(Nodes::iterator i=DAGNodes.begin(), e= DAGNodes.end(); i!=e;++i)// for Every DAG NODE
		{
			DEBUG(if(DebugAPV) dbgs()<<*((*i)->I) <<"\t\t"<<( ((*i)->info.isVectorizable())?"VECTORIABLE":"AAAGALLA")<<"\n");	
		      for(Value::use_iterator j=(*i)->I->use_begin(), end=(*i)->I->use_end(); j!=end;++j) // to iterate all the users of this node (I)
		      										         
		      {
		      	    // The below condition is checked as def-use chain may contain uses 
			    // in other blocks.. Hence we should link to only those instructions
			    // which are in the same intereseted basic block

			    if(isInstPresentInBasicBlock ( cast<Instruction>(*j), InstNodeMap )) // to check whehther J is present in this basic block or not 
			    {
				      (*i)->info.addOutgoingEdge(InstNodeMap[cast<Instruction>(*j)]);// add 'j' as one of the parent of 'i'
			  	       InstNodeMap[cast<Instruction>(*j)]->info.addPredecessor(*i);//add 'i' as one of the children of 'j'
			    }
		      }
		}
   }


    // This function simply display every instruction and 
    // instructions which are parent and children.
    void displayDump(Nodes &DAGNodes)
    {	
		for(Nodes::iterator I=DAGNodes.begin(), E=DAGNodes.end(); I!=E;++I)
		{
		 	DEBUG(if(DebugAPV)dbgs()<<"\n\n"<< *((*I)->I)<<"\n");	
		 	DEBUG(if(DebugAPV)dbgs()<<"\tParents of the NOde are:\n");	
			for( Nodes::iterator j= (*I)->info.OutgoingEdges.begin(), je = (*I)->info.OutgoingEdges.end(); j!=je;++j)
			{
			    DEBUG(if(DebugAPV)dbgs()<<"\t\t"<<*((*j)->I)<<"\n" );// prints all the parent nodes if I	
			}
		 	DEBUG(if(DebugAPV)dbgs()<<"\tChildren of the NOde are:\n");	
			if( ((*I)->info.getPredecessor(1)) !=NULL)
			{
			    DEBUG(if(DebugAPV)dbgs()<<"\t\t"<<*((*I)->info.getPredecessor(1)->I) <<"\n" );// Prints the children if I
			    if( (*I)->info.getPredecessor(2) !=NULL)
			       DEBUG(if(DebugAPV)dbgs()<<"\t\t"<< *((*I)->info.getPredecessor(2)->I) <<"\n" );	
			}
		}
    }

    // creates a list of leaf nodes which will be helpful while assigning 
    // level numbers to each nodes in the DAG.
    void createLeafList(Nodes &DAGNodes, Nodes &LeafList)
    {
    	for(Nodes::iterator I=DAGNodes.begin(), E=DAGNodes.end(); I!=E;++I)
		    if( ((*I)->info.getPredecessor(1)) ==NULL )// if pred1 itself is NULL then it is sure that pred2 would also be NULL
		    {	 LeafList.push_back( (*I) ); (*I)->info.setIsLeaf(true); continue;}
		    else
		    {
			if(isa<PHINode>(*(*I)->info.getPredecessor(1)->I)) // if first predecessor is a phi node then.
			{						// if first predecessor iteself is not phi then its not a leaf node

			    if( (*I)->info.getPredecessor(2)== NULL) // second predecessor should be a null
			    {	 LeafList.push_back( (*I) ); (*I)->info.setIsLeaf(true);continue; } 
			    else if (isa<PHINode>(*(*I)->info.getPredecessor(2)->I) )// or it should be a phi
			    {	LeafList.push_back( (*I) ); (*I)->info.setIsLeaf(true);continue ;}
			}
		    }
    }


    // This function will assign level number to each of the nodes..
    // This function also creates the NOP node which is not created during
    // the DAG creation.
    unsigned int assignLevelsForNodes(Nodes DAGNodes)
    {	
    		
		return 0;//return the max depth (level) of the DAG
    }

    // This function creates list of nodes for every levels.
    void createLevels(Nodes DAGNodes, Nodes *Levels, unsigned int MaxLevel)
    {
	 	
    }

   
    // This function would dump the dotty specification for the DAG 
    // created. The DAGNodes received by this func does not contain NOP node..
  
    void displayDAG(Nodes &DAGNodes)
    {	
    	  unsigned short GraphNo=0;
	  DEBUG(dbgs()<<"\n\n digraph G"<<++GraphNo<<"{\n");
	  for(Nodes::iterator I=DAGNodes.begin(), E= DAGNodes.end();I!=E; ++I) // iterate through all the nodes in the DAG.
	  {
		DEBUG( dbgs()<< (*I)->info.getNodeNum()<< "[label=\""<<*((*I)->I)<<"\\n Level="<<(*I)->info.getLevel()
		<<(((*I)->info.isLeaf())?"\\nLEAF":"")<<"\" shape=\"rectangle\" ]\n");
		// now for every parent of node I, show a link between I and its Parents
		for(Nodes::iterator j=(*I)->info.OutgoingEdges.begin(), e=(*I)->info.OutgoingEdges.end(); j!=e; ++j)
                        
			DEBUG(dbgs()<< (*I)->info.getNodeNum()<<"->"<<(*j)->info.getNodeNum()<<"\n");		

	  }
	  DEBUG(dbgs()<<"}");
    }
       
    // This function tries to simdize the basic block and returns true if vectorized and false otherwise.
    // This function create DAGNodes, some mappings, and level creation.
    bool partiallySimdize(BasicBlock &BB)
    {
    		Nodes DAGNodes; // All the nodes in DAG	
		Nodes NodeNumMap;  // For mapping node number to node
		Nodes LeafList; // level 0 nodes
		std::map<Instruction *, Node *> InstNodeMap; // Instruction to Node map
		Nodes *Levels; // list of nodes at each level is stored here.
		
		unsigned int MaxLevel=0;
		NodeNumMap.push_back(NULL); // To make vector index start from 1, inserting NULL to index 0

		createDAGNodes(BB,DAGNodes,NodeNumMap,InstNodeMap); //creates DAG nodes as well as creates mappings..
		
		createDAG(BB,DAGNodes,InstNodeMap); // creates link between parents and childern.
		
		 
		DEBUG(if(DebugAPV) dbgs()<<"\n\n\n");
		displayDump(DAGNodes);
                createLeafList(DAGNodes, LeafList);
		DEBUG(if(DebugAPV) dbgs()<<"\n\nThe list of leaf nodes are :\n");
		for(Nodes::iterator i=LeafList.begin(), e=LeafList.end(); i!=e; ++i)
		         	DEBUG(if(DebugAPV) dbgs()<< (*(*i)->I)<<"\n");

		if(DebugDAG)
			displayDAG(DAGNodes); //Dump the DAG dotty specification.

		MaxLevel=assignLevelsForNodes(DAGNodes); // ANU'S TASK :p :D 
							 // (assigns level numbers to all the nodes recursively and return the max depth of DAG).
							 // This function should also create the NOP node (coz its not created in createDAG function).
														
		Levels= new Nodes[MaxLevel]; // dynamically deciding the number of levels in the DAG and creating those many levels.
		createLevels(DAGNodes,Levels, MaxLevel);//ANU's TASK :D

	return true;
    }

    
    public:    

    bool simdize(BasicBlock &BB)
    {
       //DEBUG(if(DebugAPV)dbgs()<<"BASIC BLOCK:##### "<<BB<<"\n");
       //DEBUG(dbgs().flush());
       if(isEligible(BB)){
                return partiallySimdize(BB);
		
	}
       return false;
    }
};


}






