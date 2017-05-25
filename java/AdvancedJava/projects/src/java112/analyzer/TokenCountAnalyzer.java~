package java112.analyzer;

import java.io.*;
import java.util.*;

/** Class to read tokens in a file and produce a list of each unique token
 *  along with the count of it's appearance
 *  @author Bo Broadway
 */
public class TokenCountAnalyzer implements Analyzer {
        
    // instance variables
    private Properties properties;
    private Map<String, Integer> tokenCounts;

    /** No argument constructor
     */
    public TokenCountAnalyzer() {
        tokenCounts = new TreeMap<String, Integer>();
    }

    /** Constructor method
     *  @param properties - the properties of the program
     */
    public TokenCountAnalyzer(Properties properties) {
        this();
        this.properties = properties;
    }
    
    /** Method to retrieve the private Map 'tokenCounts'
     *  @return 'tokenCounts' Map
     */
    public Map getTokenCounts() {
        return tokenCounts;
    }
    
    /** Method add tokens to a map or update the count to already existing tokens
     *  @param token - receives a token from the process calling the method
     */    
    public void processToken(String token) {
        if (tokenCounts.containsKey(token)) {
            tokenCounts.put(token, tokenCounts.get(token) + 1);
        } else {
            tokenCounts.put(token, 1);
        }
    }
    
    /** Method to create a file containing a list of all unique tokens in a file
     *  along with their counts
     *  @param inputFilePath - the name of the input file being analyzed
     */    
    public void writeOutputFile(String inputFilePath) {

        String outputFilePath = properties.getProperty("output.dir")
            + properties.getProperty("output.file.token.count");
        
        try (PrintWriter out = new PrintWriter(new BufferedWriter(new FileWriter(outputFilePath)))) {
            
            for (Map.Entry<String, Integer> entry : tokenCounts.entrySet()) {
                String key = entry.getKey();
                Integer value = entry.getValue();
                out.println(key + "\t" + value);
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
