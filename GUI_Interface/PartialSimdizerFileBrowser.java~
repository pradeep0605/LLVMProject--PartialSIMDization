import java.io.*;
import java.lang.*;
import java.util.*;
import javax.swing.*;
import javax.swing.event.*;
import javax.swing.tree.*;
import java.awt.*;
import java.awt.image.*;
import java.awt.event.*;
import javax.imageio.*;
import org.fife.ui.rtextarea.*;
import org.fife.ui.rsyntaxtextarea.*;


public class PartialSimdizerFileBrowser extends JDialog
{
	DefaultMutableTreeNode root;
	JTree SourceTree;
	JFrame parent;
	JPanel DefaultPanel=new JPanel(new GridLayout(1,1));
	JSplitPane SplitPanel;
	JScrollPane FileBrowserPane;
	JPanel BottomControlPane=new JPanel();
	
	String FilePath=null;
	JButton Ok=new JButton("     Ok     "), Cancel=new JButton("   Cancel   ");
	public PartialSimdizerFileBrowser(JFrame f,DefaultMutableTreeNode root){
		super(f,"Select a file",true);
		this.root=root;
		parent=f;
		run();
	 	/*Thread t=new Thread(this);
	 	t.start();*/
	}
	
	void setFilePath(String s){
		FilePath=s;
	}
	
	public void run(){
		try{
			SourceTree=new JTree(root);
			setDefaultCloseOperation(JFrame.DISPOSE_ON_CLOSE);
			setSize(new Dimension(700,400));
			getContentPane().add(DefaultPanel);
			setResizable(false);
			setLocationRelativeTo(null);
			 			
			FileBrowserPane=new JScrollPane(SourceTree);
			FileBrowserPane.setLayout(new ScrollPaneLayout());
			//FileBrowserPane.setBackground(Color.black);
			
			BottomControlPane.setLayout(new FlowLayout(FlowLayout.RIGHT));
			//BottomControlPane.setBackground(Color.green);
			BottomControlPane.add(Ok); BottomControlPane.add(Cancel);
			
			SplitPanel=new JSplitPane(JSplitPane.VERTICAL_SPLIT,FileBrowserPane,BottomControlPane);
			SplitPanel.setDividerSize(0);
			SplitPanel.setResizeWeight(1);
			DefaultPanel.add(SplitPanel);
			
			Ok.addActionListener(new ActionListener(){
				public void actionPerformed(ActionEvent ae){
					setVisible(false);
					dispose();
				}
			});
			Cancel.addActionListener(new ActionListener(){
				public void actionPerformed(ActionEvent ae){
					setVisible(false);
					dispose();
				}
			});
			SourceTree.addTreeSelectionListener(new TreeSelectionListener()
			{
				String FileName=new String();
				public void valueChanged(TreeSelectionEvent event)
				{
					try{
						String CompPath=FileHandler.readFromFile("CompilerPath").trim();
						String FilePath= event.getNewLeadSelectionPath().toString().trim();
						FilePath=FilePath.replace("[",""); FilePath=FilePath.replaceAll("]","");
						FilePath=FilePath.replaceAll(", ","/");
					
						 	 File f=new File(CompPath+FilePath);
						 	 if( f.isFile())
						 	 {	
						 	 	FileName=f.toString();
						 	 	setFilePath(FileName);
						 	 }
						 	 else	
						 	 	setFilePath("");
					}catch(Exception e){System.out.println("Error in Tree selection event :" + e);}
				}
			});
		}catch(Exception e){System.out.println("Error in Dialogbox : "+  e);} 
	}
	
	public void showDialog(){
		setVisible(true);
	}
	public String getSelectedFileName(){
		return FilePath;
	}
}

