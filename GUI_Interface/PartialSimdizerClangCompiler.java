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

/*
	This program is just to compile a program which is currently active in the editor
	this shows the current program, its .bc (llvm intermediate file and the compilation result!
*/
public class PartialSimdizerClangCompiler{
	JDialog MainDialog;
	JPanel MainPanel=new JPanel(new GridLayout(1,1));//GridLayout(1,1) creates a grid which covers the entire panel (Docking component completely)
	JSplitPane HorizontalSplit,VerticalSplit,TopHorizontalSplit;
	
	PartialSimdizerTab TextEditor;
	RSyntaxTextArea EmitResult=new RSyntaxTextArea(); // which gives the 3-address code/assembly code of the program
	RSyntaxTextArea CompileResult=new RSyntaxTextArea();// Compilation result (the things which are dumped on the screen by the compiler)
	JTabbedPane Tabs; //Tabs in the original Editor (aids in getting the current active tab and for other things)
	JPanel ControlsPanel=new JPanel(new FlowLayout(FlowLayout.LEADING));
	JCheckBox Optimize=new JCheckBox(" Optimize ");
	JCheckBox EmitCheckBox=new JCheckBox(" Emit ");
	JRadioButton LLVMemit=new JRadioButton("LLVM 3 address code");
	JRadioButton AssemblyCode=new JRadioButton("Assembly Code");
	ButtonGroup EmitGroup=new ButtonGroup();
	JButton Compile=new JButton("   Compile   ");
	JButton Close=new JButton("   Close   ");
	public PartialSimdizerClangCompiler(final JFrame f,JTabbedPane tabs){
	this.Tabs=tabs;
	//opening of dialog as a thread (so that GUI of text editor does not hang)
	(new Thread(){
		public void run(){
			try{
				final PartialSimdizerTab CurrentTab=(PartialSimdizerTab)Tabs.getSelectedComponent();//get the current component
				FileHandler.writeToFile("input."+CurrentTab.getFileExtension(), CurrentTab.getText());
				TextEditor=new PartialSimdizerTab("input."+CurrentTab.getFileExtension());
				MainDialog=new JDialog(f,"Clang Compiler",true);
				MainDialog.setSize(1000,700);
				MainDialog.setDefaultCloseOperation(JDialog.HIDE_ON_CLOSE);
				MainDialog.setLocationRelativeTo(null);//locates the dialog in the center of the screen
				MainDialog.setContentPane(MainPanel);
				MainDialog.setBounds(GraphicsEnvironment.getLocalGraphicsEnvironment().getMaximumWindowBounds());
				ProcessBuilder pb=new ProcessBuilder("clang","-S","-emit-llvm",CurrentTab.getFileName(),"-o","program.bc");
			
				//Though VerticalSplit object is being divied in HORIZONTAL split, somehow(i don't know why) HORIZONTAL_SPLIT performs the 
				//VERTICAL_SPLIT and vice versa
				VerticalSplit=new JSplitPane(JSplitPane.HORIZONTAL_SPLIT,TextEditor.getEditorWithoutStatusPanel(),new JScrollPane(EmitResult));
				VerticalSplit.setDividerSize(10);
				VerticalSplit.setResizeWeight(.4);
				
				TopHorizontalSplit=new JSplitPane(JSplitPane.VERTICAL_SPLIT,ControlsPanel,VerticalSplit);
				TopHorizontalSplit.setDividerSize(5);
				TopHorizontalSplit.setResizeWeight(0.0);
				
				HorizontalSplit=new JSplitPane(JSplitPane.VERTICAL_SPLIT,TopHorizontalSplit,new JScrollPane(CompileResult));
				HorizontalSplit.setDividerSize(10);
				HorizontalSplit.setResizeWeight(.75);
			
				ControlsPanel.add(Optimize);
				ControlsPanel.add(EmitCheckBox);
				EmitGroup.add(LLVMemit);
				EmitGroup.add(AssemblyCode);
				LLVMemit.setEnabled(false);
				AssemblyCode.setEnabled(false);
				ControlsPanel.add(LLVMemit);
				ControlsPanel.add(AssemblyCode);
				ControlsPanel.add(Compile);
				ControlsPanel.add(Close);
				
				
				MainPanel.add(HorizontalSplit);
				/*UIManager.setLookAndFeel(UIManager.getSystemLookAndFeelClassName());
				SwingUtilities.updateComponentTreeUI(HorizontalSplit); */
				
				//TextEditor.getTextArea().setEditable(false);
				EmitResult.setEditable(false);
				CompileResult.setEditable(false);
				
				EmitCheckBox.addItemListener(new ItemListener(){
					public void itemStateChanged(ItemEvent e){
						if(EmitCheckBox.isSelected()){
							LLVMemit.setEnabled(true);
							AssemblyCode.setEnabled(true);
						}
						else{
							LLVMemit.setEnabled(false);
							AssemblyCode.setEnabled(false);
						}
					}
				});
				
				
				Compile.setMnemonic(KeyEvent.VK_C);
				Compile.addActionListener(new ActionListener(){
					public void actionPerformed(ActionEvent ae){
						(new Thread(){
							public void run(){
								try{
									java.util.List Commands=new ArrayList();
									Commands.add("clang");
									if(Optimize.isSelected())
										Commands.add("-O");
									if(EmitCheckBox.isSelected()){								
										Commands.add("-S");
										if(LLVMemit.isSelected())
											Commands.add("-emit-llvm");
									}
									FileHandler.writeToFile("input."+CurrentTab.getFileExtension(), TextEditor.getText());
									
									Commands.add("input."+CurrentTab.getFileExtension()	);
									if(EmitCheckBox.isSelected()){
										Commands.add("-o");
										Commands.add("output.bc");
									}
									ProcessBuilder pb=new ProcessBuilder(Commands);
									Process p=pb.start();
									p.waitFor();
									if(EmitCheckBox.isSelected())
										EmitResult.setText(FileHandler.readFromFile("output.bc"));
									InputStream ins=p.getInputStream();
									InputStream err=p.getErrorStream();
									
									byte arr[]=new byte[ins.available()], arr2[]=new byte[err.available()];
									ins.read(arr); err.read(arr2);
									
									CompileResult.setText(new String(arr));
									CompileResult.setText(CompileResult.getText() + "\nERRORS:\n" + new String(arr2));
								}catch(Exception e){System.out.println("Error while compiling in clang : " + e );}
							}
						}).start();
					}
				});
				
				Close.setMnemonic(KeyEvent.VK_S);
				Close.addActionListener(new ActionListener(){
					public void actionPerformed(ActionEvent ae){
						MainDialog.dispose();
					}
				});
				MainDialog.setVisible(true);
			}catch(Exception e){}
		}
	}).start();
	}
}

/*

*/
