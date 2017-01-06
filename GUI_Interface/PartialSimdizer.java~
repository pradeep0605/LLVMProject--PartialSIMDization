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

class FileHandler{
	public static String readFromFile(String path)	{
		String FileContents=new String();
		try{
				FileInputStream fins=new FileInputStream(path);
				byte [] arr=new byte[fins.available()];
				fins.read(arr);
				FileContents=new String(arr);
				fins.close();
		}catch(Exception e){}		
			return FileContents;
	}
	public static void writeToFile(String FileName, String Contents){
	   try{	
			FileOutputStream fout=new FileOutputStream(FileName);
			fout.write(Contents.getBytes());
			fout.close();		
		  }catch(Exception e){}
	}
}

//This class is for handling the look and feel of the UI
//This gives to feels
class UILookAndFeel{
    public static JTabbedPane Tabs;
    public static String CurrentFeel;
	static void setCrossPlatformLookAndFeel(Component f){
	    try{
			UIManager.setLookAndFeel(UIManager.getCrossPlatformLookAndFeelClassName());
			UILookAndFeel.CurrentFeel=UIManager.getCrossPlatformLookAndFeelClassName();
			SwingUtilities.updateComponentTreeUI(f);
		   }catch(Exception e){}
	}
	
	static void setSystemLookAndFeel(Component f){ 
		try{
			UIManager.setLookAndFeel(UIManager.getSystemLookAndFeelClassName());	
			UILookAndFeel.CurrentFeel=UIManager.getSystemLookAndFeelClassName();
			
			SwingUtilities.updateComponentTreeUI(f);
		   }catch(Exception e){}
	}
	static void refreshToCurrentLookAndFeel(Component f){
		try{
			UIManager.setLookAndFeel(UILookAndFeel.CurrentFeel);	
			SwingUtilities.updateComponentTreeUI(f);
		   }catch(Exception e){}
	}
}

class PartialSimdizerSplashGUI{

	JFrame MainFrame=new JFrame();
	JPanel MainPanel=new JPanel();
	JPanel top;
	JPanel bottom=new JPanel();
	JLabel FileBeingProcessed=new JLabel("File",SwingConstants.LEFT);
	JProgressBar ProgressBar;
	public DefaultMutableTreeNode root=new DefaultMutableTreeNode("llvm");
	int width=700, height=500;
	Map <String, DefaultMutableTreeNode> NameNodeMap=new HashMap<String,DefaultMutableTreeNode>();
	PartialSimdizerSplashGUI()	{
		try	{
			
			UILookAndFeel.setSystemLookAndFeel(MainFrame);			
			
			MainFrame.setUndecorated(true); 
			MainFrame.setSize(width,height); 
			
			MainFrame.setContentPane(MainPanel);
			top=new JPanel(){
				BufferedImage myImage = ImageIO.read(new File("project.png"));
				Image scaledimg=myImage.getScaledInstance(width,height-50,Image.SCALE_SMOOTH);
				@Override 
				public void paint(Graphics g){
				   g.drawImage(scaledimg,0,0,this);}	
			};
			
			top.setPreferredSize(new Dimension(width,height-50));
			top.setBackground(Color.black);
			bottom.setPreferredSize(new Dimension(width,50));
			bottom.setBackground(Color.black);
			bottom.setLayout(new BorderLayout());
			
			MainPanel.setLayout(new BorderLayout());
			
			FileInputStream fins=new FileInputStream("cscope.files");
			byte arr[]=new byte[fins.available()];
			fins.read(arr);
			String FileContents=new String(arr);
	        	String []files=FileContents.split("\n");
			ProgressBar=new JProgressBar(0,files.length-1);
			ProgressBar.setValue(0);
			                                                     
			ProgressBar.setPreferredSize(new Dimension(width,30));
			ProgressBar.setStringPainted(true);
			ProgressBar.setForeground(Color.black);
			//ProgressBar.setBackground(Color.black);
			
			bottom.add(FileBeingProcessed,BorderLayout.NORTH);
			bottom.add(ProgressBar,BorderLayout.SOUTH);

			MainPanel.add(top,BorderLayout.NORTH);
			MainPanel.add(bottom,BorderLayout.SOUTH);
			
			MainFrame.setLocationRelativeTo(null);
			MainFrame.setVisible(true);
			
			for(int i=0;i<files.length;i++){
				 FileBeingProcessed.setText("Creating Source DB: " + files[i]);
				 String []nodes=files[i].split("/");
				 
				 for(int j=0;j<nodes.length;j++){
				 	  if(!NameNodeMap.containsKey(nodes[j])){
						if(j==0){
							DefaultMutableTreeNode temp=new DefaultMutableTreeNode(nodes[j]);
							NameNodeMap.put(nodes[j], temp);
							root.add(temp);
						}
						else{	
							DefaultMutableTreeNode temp=new DefaultMutableTreeNode(nodes[j]);
							NameNodeMap.put(nodes[j], temp);
							NameNodeMap.get( nodes[j-1] ).add(temp);
						}
					 }
				 }
				 //Thread.currentThread().sleep(1);
				 ProgressBar.setValue(i);
			}
		    FileBeingProcessed.setText("Source Tree created Successfully !");
		    Thread.currentThread().sleep(1000);
		    MainFrame.setVisible(false);
		    System.out.println("Splash Done.......!!");
		}catch(Exception e){ FileBeingProcessed.setText("Error: " + e.toString()); }
	}
};

class PartialSimdizerGUI{
	DefaultMutableTreeNode Root;
	GraphicsEnvironment env = GraphicsEnvironment.getLocalGraphicsEnvironment();
	GraphicsDevice device = env.getDefaultScreenDevice();
	JFrame MainFrame=new JFrame("Partial Simdizer");
	JPanel MainPanel=new JPanel();
	JPanel ControlPanel=new JPanel();
	JPanel ControlPanelControls=new JPanel();
	JPanel EditorPanel=new JPanel();
	JTree SourceTree;
	JMenuBar MenuBar=new JMenuBar();
	JMenu File=new JMenu("File   "), Edit=new JMenu("Edit   "),Compile=new JMenu("Compile   "),Run=new JMenu("Run   ");
	JMenu View=new JMenu("View   "); JMenuItem FullScreen=new JMenuItem("     Full screen          ",KeyEvent.VK_F);
	JMenu Documents=new JMenu("Documents   ");
	JMenu Preferences=new JMenu("     Preferences          ");
	JMenu UIFeel=new JMenu("     UIFeel          ");
	JMenu Clang=new JMenu("     Clang (LLVM 3.1 Compiler)          ");
		
	JMenuItem ClangCompiler=new JMenuItem("     Compile Program in Clang      ",KeyEvent.VK_C);		
	JMenuItem []TabShortCuts=new JMenuItem[11];
	JMenuItem JavaLookAndFeel=new JMenuItem("     Java Look and feel          ",KeyEvent.VK_J);
	JMenuItem SystemLookAndFeel=new JMenuItem("     System Look and feel          ",KeyEvent.VK_S);
	JMenuItem ApplicationColorSelectorMenu=new JMenuItem("     Application Color Selector          ",KeyEvent.VK_A);
	JMenuItem EditorColorSelector=new JMenuItem("     Editor Color Selector          ",KeyEvent.VK_E);
	JMenuItem Exit=new JMenuItem("     Exit          ",KeyEvent.VK_X), NewDocument=new JMenuItem("     New          ",KeyEvent.VK_N);
	JMenuItem SaveMenuItem=new JMenuItem("     Save          ",KeyEvent.VK_S);
	JMenuItem OpenFileMenuItem=new JMenuItem("     Open          ",KeyEvent.VK_O);
	JMenuItem CloseCurrentTab=new JMenuItem("     Close Active Tab          ",KeyEvent.VK_C);
	JMenuItem OpenTerminal=new JMenuItem("     Open Terminal for current file          ",KeyEvent.VK_T);
	Dimension ScreenSize;
	JButton New=new JButton("New"), Save=new JButton("Save"), Open=new JButton("Open"), OpenFromSourceTree=new JButton("Open From Source Tree");
	int ControlPanelHeight=35;
	JTabbedPane Tabs = new JTabbedPane();
	JColorChooser ColorSelector=new JColorChooser();
	JFileChooser FC=new JFileChooser("/home/");
	Map <String,PartialSimdizerTab> FileNameAndTabMap=new HashMap<String,PartialSimdizerTab>();
	
	PartialSimdizerGUI(DefaultMutableTreeNode root)	{
		try{
			this.Root=root;
			UILookAndFeel.Tabs=Tabs;
			MainFrame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
			ScreenSize=Toolkit.getDefaultToolkit().getScreenSize();
			MainFrame.setSize(500,500);
			//MainFrame.setUndecorated(true);
			MainFrame.setExtendedState(MainFrame.MAXIMIZED_BOTH);
			MainFrame.setContentPane(MainPanel);

			SourceTree=new JTree(root);
			File.setMnemonic(KeyEvent.VK_F); Edit.setMnemonic(KeyEvent.VK_E);Compile.setMnemonic(KeyEvent.VK_C); Run.setMnemonic(KeyEvent.VK_R);
			Clang.setMnemonic(KeyEvent.VK_C);
			Documents.setMnemonic(KeyEvent.VK_D);
			addKeyboardShortCutsToTabs();
			
			Save.setEnabled(false);
			Preferences.setMnemonic(KeyEvent.VK_E);View.setMnemonic(KeyEvent.VK_V);
			File.add(NewDocument);  File.add(OpenFileMenuItem); File.add(SaveMenuItem); File.addSeparator();File.add(CloseCurrentTab);
			File.add(OpenTerminal); File.addSeparator(); File.add(Exit);
			OpenTerminal.setToolTipText("Opens terminal with working directory set to\n currently open file's parent directory"); 
			Edit.addSeparator();
			Edit.add(Preferences);
			View.add(UIFeel);
			View.add(FullScreen);
			Compile.add(Clang);
			Clang.add(ClangCompiler);
			UIFeel.setMnemonic(KeyEvent.VK_U);
			UIFeel.add(JavaLookAndFeel);
			UIFeel.add(SystemLookAndFeel);
			
			FullScreen.setAccelerator(KeyStroke.getKeyStroke("F11"));
			NewDocument.setAccelerator(KeyStroke.getKeyStroke( KeyEvent.VK_N, ActionEvent.CTRL_MASK));
			SaveMenuItem.setAccelerator(KeyStroke.getKeyStroke( KeyEvent.VK_S, ActionEvent.CTRL_MASK));
			OpenFileMenuItem.setAccelerator(KeyStroke.getKeyStroke( KeyEvent.VK_O, ActionEvent.CTRL_MASK));
			CloseCurrentTab.setAccelerator(KeyStroke.getKeyStroke( KeyEvent.VK_W, ActionEvent.CTRL_MASK));			
			OpenTerminal.setAccelerator(KeyStroke.getKeyStroke(KeyEvent.VK_T,ActionEvent.CTRL_MASK));
			
			Preferences.add(ApplicationColorSelectorMenu);
			Preferences.add(EditorColorSelector);
			MenuBar.add(File); MenuBar.add(Edit);MenuBar.add(View);MenuBar.add(Compile);MenuBar.add(Run);MenuBar.add(Documents);
		
			ControlPanel.setLayout(new FlowLayout(FlowLayout.LEADING));
			ControlPanel.setPreferredSize(new Dimension((int)(ScreenSize.width), ControlPanelHeight) );			
			ControlPanel.add(New);ControlPanel.add(Save);ControlPanel.add(Open);ControlPanel.add(OpenFromSourceTree);
						
			
			EditorPanel.setLayout(new GridLayout(1,1));
			EditorPanel.add(Tabs);
			addNewTab("/home/kashyap/test.c");
			
			MainPanel.setLayout(new BorderLayout());	
			MainPanel.add(ControlPanel,BorderLayout.NORTH);
			MainPanel.add(EditorPanel,BorderLayout.CENTER);
					
			MainFrame.setJMenuBar(MenuBar);
			setApplicationColor(Color.white);	
			MainFrame.setVisible(true);
			//Event handler to open color picker for the editor
			EditorColorSelector.addActionListener(new ActionListener(){
				Color PreviouslySelectedColor=new Color(0,20,38);
				public void actionPerformed(ActionEvent ae){
					try{
							Color c=ColorSelector.showDialog(MainFrame,"Select a color",PreviouslySelectedColor);
							if(c!=null){
								setEditorColor(c);
								PreviouslySelectedColor=c;
							}
						}catch(Exception e){System.out.println("Error in selecting color: "+e);}
				}
			});
			//Action Event to open color picker
			ApplicationColorSelectorMenu.addActionListener(new ActionListener(){
					Color PreviouslySelectedColor=Color.black;
				public void actionPerformed(ActionEvent ae){
					try{
							Color c=ColorSelector.showDialog(MainFrame,"Select a color", PreviouslySelectedColor);
							if(c!=null){
								setApplicationColor(c);
								PreviouslySelectedColor=c;
							}
					   }catch(Exception e){System.out.println("Error in selecting color: "+e);}
			    }
			});
			
			// Compile the currently active program in Clang Compiler
			ClangCompiler.addActionListener(new ActionListener(){
				public void actionPerformed(ActionEvent ae){	
					new PartialSimdizerClangCompiler(MainFrame,Tabs);
					//UILookAndFeel.refreshToCurrentLookAndFeel(MainFrame);
				}
			});
			//To toggle from fullscreen to normal and viceversa
			FullScreen.addActionListener(new ActionListener(){
				boolean fullscreen=false;
				public void actionPerformed(ActionEvent ae)				{
					GraphicsEnvironment env = GraphicsEnvironment.getLocalGraphicsEnvironment();
					GraphicsDevice device = env.getDefaultScreenDevice();
				    try{
						if(!fullscreen)
							fullscreen=true;
						else
							fullscreen=false;
						setToFullScreen(fullscreen);
				      }catch(Exception e){}
				}
			});
			JavaLookAndFeel.addActionListener(new ActionListener(){
				public void actionPerformed(ActionEvent ae){
					UILookAndFeel.setCrossPlatformLookAndFeel(MainFrame);
				}
			});
			SystemLookAndFeel.addActionListener(new ActionListener(){
				public void actionPerformed(ActionEvent ae){
					UILookAndFeel.setSystemLookAndFeel(MainFrame);
				}
			});
			//closes the currently active tab
			CloseCurrentTab.addActionListener(new ActionListener(){
				public void actionPerformed(ActionEvent ae){
					try{
						 if(Tabs.getTabCount()!=0){
							Tabs.remove(Tabs.getSelectedIndex());
							updateTabShortCuts();
							Thread.currentThread().sleep(100);
							if(Tabs.getTabCount()==0){
								setComponentsEnabled(false);
							}
						 }
					   }catch(Exception e){System.out.println("Error in Closing tab: " + e);}
				}
			});
			// Imlementation of exit MenuItem action (to quit application)
			Exit.addActionListener(new ActionListener(){
				public void actionPerformed(ActionEvent ae){
					System.exit(0);
				}	
			});
		
			NewDocument.addActionListener(new ActionListener(){
					public void actionPerformed(ActionEvent ae){
						addNewTab();
					}
			});
			// When Clicked on new Button a new Tab should be added.
			New.addActionListener(new ActionListener(){
				public void actionPerformed(ActionEvent ae){
					addNewTab();
				}
			});
	
			OpenFileMenuItem.addActionListener(new ActionListener(){
				public void actionPerformed(ActionEvent ae){	
					if( FC.showOpenDialog(MainFrame)==JFileChooser.APPROVE_OPTION){
						String filename=FC.getSelectedFile().toString() ;
						addNewTab(filename); 
					}
				}
			});
			//To open a new file		
			Open.addActionListener(new ActionListener(){
				public void actionPerformed(ActionEvent ae){
					if( FC.showOpenDialog(MainFrame)==JFileChooser.APPROVE_OPTION){
						String filename=FC.getSelectedFile().toString() ;
						addNewTab(filename); 
					}
				}
			});	
			
			//To open a file from the source tree built
			OpenFromSourceTree.addActionListener(new ActionListener(){
				public void actionPerformed(ActionEvent ae){
					String filename=new String();
					PartialSimdizerFileBrowser fb=new PartialSimdizerFileBrowser(MainFrame, Root);
					fb.showDialog();
					filename=fb.getSelectedFileName();
					if(filename!=null )
					{
						if(!filename.equals(""))
							addNewTab(filename);
					}
				}
			});
			// Save the contents of the current active texteditor's text to file when this menu clicked.
			SaveMenuItem.addActionListener(new ActionListener(){
				public void actionPerformed(ActionEvent ae){
					saveToFile();
				}
			});
			// Save the contents of the current active texteditor's text to the file when this ('save') button clicked.
			Save.addActionListener(new ActionListener(){
				public void actionPerformed(ActionEvent ae){
					saveToFile();
				}
			});
			// This menu item opens terminal 
			OpenTerminal.addActionListener(new ActionListener(){
					public void actionPerformed(ActionEvent ae){
					(new Thread(){
						public void run(){
							try{
								String directory=((PartialSimdizerTab)Tabs.getSelectedComponent()).getFileName();
								directory=directory.substring(0,directory.lastIndexOf("/"));
								ProcessBuilder pb=new ProcessBuilder("gnome-terminal", "--working-directory=" + directory,"--full-screen");
								pb.start();
							}catch(Exception e){System.out.println("Error in openning termial : " + e);}
						}
					}).start();
				}
			});
		}catch(Exception e){JOptionPane.showMessageDialog(null,"Error:"+e.toString(),"Error!",1); }
	}
	
	void setApplicationColor(Color c){
		ControlPanel.setBackground(c); 
		EditorPanel.setBackground(c);		
		for(int i=0;i<Tabs.getTabCount();i++) 
			((PartialSimdizerTab)Tabs.getComponentAt(i)).setStatusPanelColor(c);			
		
	}
	void setEditorColor(Color c){
		for(int i=0;i<Tabs.getTabCount();i++) 
			((PartialSimdizerTab)Tabs.getComponentAt(i)).setEditorBackgroundColor(c);			
	}	
	
	void setToFullScreen(boolean b)
	{
		MainFrame.setVisible(false);
		MainFrame.dispose();
		MainFrame.setUndecorated(b); 
		MainFrame.setExtendedState(MainFrame.MAXIMIZED_BOTH);
		if(b)
			device.setFullScreenWindow(MainFrame); 
		MainFrame.setVisible(true);
	}
	
	void addNewTab(){
		try{
			Thread t=(new Thread(){
				public void run(){
					PartialSimdizerTab NewTab=new PartialSimdizerTab("Untitled!");
					Tabs.add("Untitled!", NewTab);
					Tabs.setTabComponentAt(Tabs.indexOfComponent(NewTab),new ButtonTabComponent(Tabs));
					Tabs.setSelectedComponent(NewTab);
					Tabs.setToolTipTextAt(Tabs.getSelectedIndex(), "Untitled!");		
					((PartialSimdizerTab)Tabs.getSelectedComponent()).requestFocusToEditor();
					setComponentsEnabled(true);
				}
			});
			t.start();
			t.join();
			updateTabShortCuts();
		}catch(Exception e){System.out.println("Error in adding new Tab: " + e);}
	}
	
	void addNewTab(final String filename){
		try{
		 	Thread t=(new Thread(){
		 		public void run(){
		 		    if(FileNameAndTabMap.containsKey(filename)){
		 		    	FileNameAndTabMap.get(filename).requestFocusToEditor();
		 		    	return;
		 		    }
					PartialSimdizerTab NewTab=new PartialSimdizerTab(filename);
					Tabs.addTab(filename.substring(filename.lastIndexOf("/")+1),	NewTab);
					Tabs.setTabComponentAt(Tabs.indexOfComponent(NewTab),new ButtonTabComponent(Tabs));
					Tabs.setSelectedComponent(NewTab);		
					Tabs.setToolTipTextAt(Tabs.getSelectedIndex(), filename);		
					((PartialSimdizerTab)Tabs.getSelectedComponent()).requestFocusToEditor();
					setComponentsEnabled(true);
					FileNameAndTabMap.put(filename,NewTab);
				}
			});
			t.start();
			t.join();
			updateTabShortCuts();
		}catch(Exception e){System.out.println("Error in adding new Tab: " + e);}
	}

	void saveToFile(){
		try{
			  (new Thread(){
			     	public void run(){
					 	try
					 	{
							Save.setEnabled(false);
							SaveMenuItem.setEnabled(false);
							PartialSimdizerTab temp= (PartialSimdizerTab)Tabs.getSelectedComponent();
							if( ((PartialSimdizerTab)Tabs.getSelectedComponent()).getFileName().equals("Untitled!")){
								if (FC.showSaveDialog(MainFrame) == JFileChooser.APPROVE_OPTION){
									String FileName=FC.getSelectedFile().toString();
									Tabs.setTitleAt(Tabs.getSelectedIndex(), FileName.substring(FileName.lastIndexOf("/")+1));
				
									Tabs.setToolTipTextAt(Tabs.getSelectedIndex(), FileName);
									PartialSimdizerTab tp=(PartialSimdizerTab)Tabs.getSelectedComponent();
									tp.setLanguageHighlights(FileName);
									FileNameAndTabMap.put(FileName,temp);
									tp.setFileName(FileName);
									tp.requestFocusToEditor();
								}
								else{
								    Save.setEnabled(true);
								    SaveMenuItem.setEnabled(true);
								    return;
								}
							}	
							Thread.currentThread().sleep(500);
							FileHandler.writeToFile(((PartialSimdizerTab)Tabs.getSelectedComponent()).getFileName() , temp.getText());
							((PartialSimdizerTab)Tabs.getSelectedComponent()).requestFocusToEditor();
							
							Save.setEnabled(true);
							SaveMenuItem.setEnabled(true);
						}catch(Exception e){}
					}
			  }).start();
		   }catch(Exception e){}
	}	

	void updateTabShortCuts(){
		int i;
		for(i=1;i<=Tabs.getTabCount();i++){
			TabShortCuts[i].setText(Tabs.getTitleAt(i-1));
			TabShortCuts[i].setVisible(true);
		}
		for(;i<=10;i++)
			TabShortCuts[i].setVisible(false);
	}					
	
	void addKeyboardShortCutsToTabs(){
		Documents.addSeparator();
		TabShortCuts[0]=new JMenuItem("");
		for(int i=1;i<=10;i++)	{
			final int I=i;
			TabShortCuts[i]=new JMenuItem("Tab "+i);
			TabShortCuts[i].setAccelerator(KeyStroke.getKeyStroke((int)(""+(i%10)).charAt(0) , ActionEvent.ALT_MASK));
			TabShortCuts[i].addActionListener(new ActionListener(){
				public void actionPerformed(ActionEvent ae){
					String k=new String(""+I);
					if(Integer.parseInt(k)<=Tabs.getTabCount())
						Tabs.setSelectedComponent(((PartialSimdizerTab)Tabs.getComponentAt(Integer.parseInt(k)-1)));
				}
			});
			Documents.add(TabShortCuts[i]);
			TabShortCuts[i].setVisible(false);
		}
	}
	
	void setComponentsEnabled(boolean n){
		Save.setEnabled(n);
		SaveMenuItem.setEnabled(n);
		Compile.setEnabled(n);
	}
	
}
	
public class PartialSimdizer{ 
	public static void main(String args[])	{	
		new PartialSimdizerGUI(new PartialSimdizerSplashGUI().root);
	}
}





