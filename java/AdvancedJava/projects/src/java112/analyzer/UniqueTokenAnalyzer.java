package java112.analyzer;

import java.io.*;
import java.util.*;

/** Class to read tokens in a file and produce a list of each unique token in a new file
 *  @author Bo Broadway
 */
public class UniqueTokenAnalyzer implements Analyzer {
        
    // instance variables
    private TreeSet<String> uniqueTokensList;
    private Properties properties;
    
    /** Constructor method with no parameters for UniqueTokenAnalyzer
     */
    public UniqueTokenAnalyzer() {
        // create an instance of a TreeSet and assigns it to the uniqueTokensList variable
        uniqueTokensList = new TreeSet<>();
    }

    /** Alternative constructor method
     *  @param properties - the properties of the program
     */
    public UniqueTokenAnalyzer(Properties properties) {
        this();
        this.properties = properties;
    }
    
    /** Method to retrieve the private TreeSet 'uniqueTokensList'
     *  @return 'uniqueTokensList' TreeSet
     */
    public Set<String> getUniqueTokensList() {
        return uniqueTokensList;
    }
    
    /** Method add tokens to a TreeSet list for sorting by unique only
     *  @param token - receives a token from the process calling the method
     */    
    public void processToken(String token) {
        uniqueTokensList.add(token);
    }
    
    /** Method to create a file containing a list of all unique tokens in a file
     *  @param inputFilePath - the name of the input file being analyzed
     */    
    public void writeOutputFile(String inputFilePath) {

        String outputFilePath = properties.getProperty("output.dir")
            + properties.getProperty("output.file.unique");
        
        try (PrintWriter out = new PrintWriter(new BufferedWriter(new FileWriter(outputFilePath)))) {
            
            for (String element : getUniqueTokensList()) {
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
