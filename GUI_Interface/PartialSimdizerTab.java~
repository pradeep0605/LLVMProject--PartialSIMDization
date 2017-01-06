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


public class PartialSimdizerTab extends JPanel{
	String filename=new String();
	JPanel Editor=new JPanel();
	JPanel StatusBar=new JPanel();
	JSplitPane Divider;
	RSyntaxTextArea TextArea;
	RTextScrollPane SP;
	int StatusBarHeight=20;	
	String []LanguageSet={"None","c","java","c++","latex",};
	JComboBox LanguageOptions=new JComboBox(LanguageSet);
	Dimension ScreenSize=Toolkit.getDefaultToolkit().getScreenSize();
		
		
	void updateDisplay(String feel){
		try{
			/*repaint();
			TextArea.repaint();
			UIManager.setLookAndFeel(feel);*/
		   }catch(Exception e){}
	}
	void setLanguageHighlights(String Language){
		String format=Language.substring(Language.lastIndexOf(".")+1);
		if(format.equals("c") || format.equals("cc")){
			TextArea.setSyntaxEditingStyle(SyntaxConstants.SYNTAX_STYLE_C);
			LanguageOptions.setSelectedItem("c");
		}
		else if(format.equals("cpp") || format.equals("c++")){
			TextArea.setSyntaxEditingStyle(SyntaxConstants.SYNTAX_STYLE_CPLUSPLUS);
			LanguageOptions.setSelectedItem("c++");
		}
		else if(format.equals("java")){
			TextArea.setSyntaxEditingStyle(SyntaxConstants.SYNTAX_STYLE_JAVA);
			LanguageOptions.setSelectedItem("java");
		}
		else if(format.equals("tex")  || format.equals("latex")){
			TextArea.setSyntaxEditingStyle(SyntaxConstants.SYNTAX_STYLE_LATEX);
			LanguageOptions.setSelectedItem("latex");
		}
		else if(format.equals("Untitled!")){
			TextArea.setSyntaxEditingStyle(null);
			LanguageOptions.setSelectedItem("None");
		}
			
	}
	
	void initializeEditor()	{
		//int r=0,g=20,b=38;
		int r=0,g=0,b=0;
		Color c= new Color(r,g,b);
		TextArea.setCodeFoldingEnabled(true);	
	    TextArea.setAntiAliasingEnabled(true);
		TextArea.setBackground(c);
		TextArea.setCurrentLineHighlightColor(new Color(r,g+20,b+30));
		TextArea.setForeground(Color.white);	
		TextArea.setFont(new Font(Font.MONOSPACED,Font.BOLD,15));
		TextArea.setCaretColor(Color.white);
		TextArea.setAntiAliasingEnabled(true);
		/*InputStream in = getClass().getResourceAsStream("PKtheme1.xml");
		try {
			  Theme theme = Theme.load(in);
			  theme.apply(TextArea);
		} catch (IOException ioe) {  ioe.printStackTrace();   }*/

	}
		
	public void setStatusPanelColor(Color c){
		StatusBar.setBackground(c);
	}
	public void setEditorBackgroundColor(Color c){
		TextArea.setBackground(c);
		TextArea.setCurrentLineHighlightColor(new Color(c.getRed(),c.getGreen()+20,c.getBlue()+30));
	}
	public void requestFocusToEditor(){
		TextArea.requestFocus();
	}
	
	public String getText(){
		return TextArea.getText();
	}

	String getFileName(){
		return filename;
	}
	RTextScrollPane getEditorWithoutStatusPanel(){
		return SP;
	}
	void setFileName(String name){
		filename=name;
	}
	String getFileExtension(){
		return filename.substring(filename.lastIndexOf(".")+1);
	}
	
	RSyntaxTextArea getTextArea(){
		return TextArea;
	}
	public PartialSimdizerTab(String fname)	{	
	    super();
	    String FileContents=new String();
	    try{
			filename=fname;
			FileContents=FileHandler.readFromFile(filename);
			TextArea=new RSyntaxTextArea();
			setLanguageHighlights("."+filename);
			TextArea.setText(FileContents);
			initializeEditor();

			
		    
			setLayout(new GridLayout(1,1));
			Editor.setLayout(new GridLayout(1,1));
			SP = new RTextScrollPane(TextArea);
			SP.setFoldIndicatorEnabled(true);
			StatusBar.add(LanguageOptions);
			StatusBar.setLayout(new FlowLayout(FlowLayout.RIGHT));
		
				
			Editor.add(SP);
			Divider=new JSplitPane(JSplitPane.VERTICAL_SPLIT,Editor,StatusBar);
			Divider.setDividerSize(0);
			Divider.setResizeWeight(1);
			add(Divider);

			LanguageOptions.addActionListener(new ActionListener(){
				public void actionPerformed(ActionEvent ae)				{
					String format=(String)LanguageOptions.getSelectedItem();
					setLanguageHighlights("." + format);
				}
			});
	      }catch(Exception e){JOptionPane.showMessageDialog(null,"Error here: 2" +e.toString(),"Error!",1);}
			//JOptionPane.showMessageDialog(null,TextArea.getSyntaxScheme().toCommaSeparatedString(),"df",1);	
	}
}

