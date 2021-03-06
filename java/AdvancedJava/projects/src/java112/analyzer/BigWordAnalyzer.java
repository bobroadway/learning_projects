package java112.analyzer;

import java.io.*;
import java.util.*;

/** Class to read tokens in a file and produce a list of each that meets the 
 *  requirement of a 'big word'
 *  @author Bo Broadway
 */
public class BigWordAnalyzer implements Analyzer {
        
    // instance variables
    private Properties properties;
    private TreeSet<String> bigWords;
    private int minimumWordLength;
    
    /** Getter method for the bigWords set
     *  @return - the set of 'bigWords'
     */  
    public Set<String> getBigWords() {
        return bigWords;
    }
    
    /** No argument constructor
     */
    public BigWordAnalyzer() {
        bigWords = new TreeSet<>();
    }

    /** Constructor method for BigWordAnalyzer
     *  @param properties - the properties of the program
     */
    public BigWordAnalyzer(Properties properties) {
        this();
        this.properties = properties;
        minimumWordLength = Integer.parseInt(properties.getProperty("bigwords.minimum.length"));
        // call no argument constructor
    }
    
    /** Checks if a token meets minimum word length and adds it so the set
     *  @param token - receives a token from the process calling the method
     */    
    public void processToken(String token) {
        if (token.length() >= minimumWordLength) {
            bigWords.add(token);
        }
    }
    
    /** Method to create a file containing a list of all the 'bigWords' in a file
     *  @param inputFilePath - the name of the input file being analyzed
     */    
    public void writeOutputFile(String inputFilePath) {

        String outputFilePath = properties.getProperty("output.dir")
            + properties.getProperty("output.file.bigwords");
        
        try (PrintWriter out = new PrintWriter(new BufferedWriter(new FileWriter(outputFilePath)))) {
            
            for (String element : getBigWords()) {
                out.println(element);
            }
            
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
