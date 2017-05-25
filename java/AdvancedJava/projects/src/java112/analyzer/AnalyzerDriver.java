package java112.analyzer;

import java.io.*;
import java.util.*;

/** A class to call the main processing class for CaptainCruncher (FileAnalyzer)
 *  This program takes a command line argument of a file name, the file to be read
 *  and produces two output files: <br />
 *  unique_tokens.txt - lists one unique token per line <br />
 *  summary_report.txt - a short report of the file that was analyzed
 *  @author Bo Broadway
 */
public class AnalyzerDriver {
/** Main method for starting the program
 *  @param args - the command line arguments
 */
    public static void main(String[] args) {
        // instantiate an instance of the project’s main processing class
        AnalyzeFile analyzeFile = new AnalyzeFile();
        
        // call the main processing method of the main class 
        // passing the command line arguments array to the method
        analyzeFile.runAnalysis(args);
        
    }
    
}
