package java112.analyzer;

import java.io.*;
import java.util.*;

/** Class to create a summary report for a file
 *  @author Bo Broadway
 */
public class SummaryReport implements Analyzer {
    
    // instance variables
    private int totalTokensCount = 0;
    private Properties properties;
    
    /** Constructor method with no parameters for SummaryReport
     */
    public SummaryReport() {
    }

    /** Alternative constructor method
     *  @param properties - the properties of the program
     */
    public SummaryReport(Properties properties) {
        this.properties = properties;
    }
    
    /** Method to retrieve the private variable 'totalTokensCount'
    *  @return 'totalTokensCount' variable
    */
    public int getTotalTokensCount() {
        return totalTokensCount;
    }
    
    /** Method to count the number of tokens in a file and store that number in a variable
    *  @param token - receives a token from the process calling the method
    */
    public void processToken(String token) {
        totalTokensCount++;
    }
    
    /** Method to create a file containing summary data for an input file
    *  @param inputFilePath - the name of the input file being analyzed
    */
    public void writeOutputFile(String inputFilePath) {
        
        String outputFilePath = properties.getProperty("output.dir")
            + properties.getProperty("output.file.summary");
        String applicationName = properties.getProperty("application.name");
        String author = properties.getProperty("author");
        String authorEmailAddress = properties.getProperty("author.email.address");
        
        try (PrintWriter out = new PrintWriter(new BufferedWriter(new FileWriter(outputFilePath)))) {
            
            File file = new File(inputFilePath);
            String absoluteFilePath = file.getAbsolutePath();
            String currentDate = new Date().toString();
            out.println("Application: " + applicationName);
            out.println("Author: " + author + ", M/W 2:30-4:20");
            out.println("Email: " + authorEmailAddress);
            out.println("InputFile: " + absoluteFilePath);
            out.println("Analyzed On: " + currentDate);
            out.println("Total Token Count: " + getTotalTokensCount());
            
        } catch (FileNotFoundException fileNotFoundException) {
            System.out.println("There was a problem opening the file");
            fileNotFoundException.printStackTrace();
        } catch (IOException ioException) {
            System.out.println("There was a problem reading the file");
            ioException.printStackTrace();
        } catch (Exception exception) {
            System.out.println("There was a huge problem... HUGE");
            exception.printStackTrace();
        }
        
    }
    
}
