package java112.analyzer;

import java.io.*;
import java.util.*;

/** Class to read tokens in a file and determine the size distribution of the 
 *  tokens in the input file
 *  @author Bo Broadway
 */
public class TokenSizeAnalyzer implements Analyzer {
        
    // instance variables
    private Map<Integer, Integer> tokenSizes;
    private Properties properties;
    private int maximumSize;
    
    /** Getter method for the tokenSizes Map
     *  @return - the map of 'tokenSizes'
     */  
    public Map<Integer, Integer> getTokenSizes() {
        return tokenSizes;
    }
    
    /** Getter method maximumSize
     *  @return - variable 'maximumSize'
     */
    public int getMaximumSize() {
        return maximumSize;
    }
    
    /** No argument constructor
     */
    public TokenSizeAnalyzer() {
        tokenSizes = new HashMap<>();
        maximumSize = 0;
    }

    /** Constructor method for TokenSizeAnalyzer
     *  @param properties - the properties of the program
     */
    public TokenSizeAnalyzer(Properties properties) {
        this();
        this.properties = properties;
    }
    
    /** Populates a map where key = token length and value = quantity of tokens 
     *  with that length
     *  @param token - receives a token from the process calling the method
     */    
    public void processToken(String token) {

        if (tokenSizes.containsKey(token.length())) {
            tokenSizes.put(token.length(), tokenSizes.get(token.length()) + 1);
            if (tokenSizes.get(token.length()) > getMaximumSize()) {
                maximumSize = tokenSizes.get(token.length());
            }
        } else {
            tokenSizes.put(token.length(), 1);
        }
        
    }
    
    /** Method to create a file displaying the tokenSizes map and also a histogram view
     *  @param inputFilePath - the name of the input file being analyzed
     */    
    public void writeOutputFile(String inputFilePath) {

        String outputFilePath = properties.getProperty("output.dir")
            + properties.getProperty("output.file.token.size");
        
        try (PrintWriter out = new PrintWriter(new BufferedWriter(new FileWriter(outputFilePath)))) {
            
            for (Map.Entry<Integer, Integer> entry : tokenSizes.entrySet()) {
                int key = entry.getKey();
                int value = entry.getValue();
                out.println(key + "\t" + value);
            }
            out.println("\n");
            // histogram
            int asteriskValue = (int) maximumSize / 75;
            for (Map.Entry<Integer, Integer> entry : tokenSizes.entrySet()) {
                int key = entry.getKey();
                int value = entry.getValue();
                int histogramValue = (int) value / asteriskValue;
                String histogramValueString = "";
                for (int i = 0; i <= histogramValue; i++) {
                    histogramValueString += "*";
                }
                out.println(key + "\t" + histogramValueString);
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
