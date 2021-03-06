package java112.analyzer;

import java.io.*;
import java.util.*;

/** Class to read tokens in a file and determine where keywords are in the input file
 *  @author Bo Broadway
 */
public class KeywordAnalyzer implements Analyzer {
        
    // instance variables
    private Map<String, List<Integer>> keywordMap;
    private Properties properties;
    private int tokenOccurence;
    
    /** Getter method for the keywordMap Map
     *  @return - the map of 'keywordMap'
     */  
    public Map<String, List<Integer>> getKeywordMap() {
        return keywordMap;
    }
    
    /** No argument constructor
     */
    public KeywordAnalyzer() {
        keywordMap = new TreeMap<>();
    }

    /** Constructor method for KeywordAnalyzer
     *  @param properties - the properties of the program
     */
    public KeywordAnalyzer(Properties properties) {
        this();
        this.properties = properties;

        // load keyword file
        loadKeywords(properties);
    }

    /** Method used for reading 'myKeywords.txt', with exception handling
     *  @param fileName - the name of the file being processed
     */
    public void loadKeywords(Properties properties) {

        String inputFilePath = properties.getProperty("file.path.keywords");
        
        try (BufferedReader in = new BufferedReader(new FileReader(inputFilePath))) {
            // loop through the lines of the input file
            while (in.ready()) {
                keywordMap.put(in.readLine(), new ArrayList<Integer>());
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
    
    /** Populates a map where key = keyword and value = list of all number locations 
     *  of that keyword
     *  @param token - receives a token from the process calling the method
     */    
    public void processToken(String token) {
        
        tokenOccurence++;
        for (Map.Entry<String, List<Integer>> entry : keywordMap.entrySet()) {
            String key = entry.getKey();
            List valueList = entry.getValue();
            if (token.equals(key)) {
                valueList.add(tokenOccurence);        
            }  
        }
        
    }
    
    /** Method to create a file displaying the tokenSizes map and also a histogram view
     *  @param inputFilePath - the name of the input file being analyzed
     */    
    public void writeOutputFile(String inputFilePath) {

        String outputFilePath = properties.getProperty("output.dir")
            + properties.getProperty("output.file.keyword");
        
        try (PrintWriter out = new PrintWriter(new BufferedWriter(new FileWriter(outputFilePath)))) {
            
            for (Map.Entry<String, List<Integer>> entry : keywordMap.entrySet()) {
                String key = entry.getKey();
                List<Integer> valueList = entry.getValue();
                
                out.println(key + " =");
                out.write("[");
                int i = 1;
                for (Integer element : valueList) {
                    if (i == valueList.size()) {
                        out.write(element);
                    } else if (i % 10 != 0) {
                        out.write(element + ", ");
                    } else {
                        out.write(element + ",\n");
                    }
                    i++;
                }
                out.write("]\n\n");
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
