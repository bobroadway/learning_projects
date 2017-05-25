package java112.analyzer;

import java.io.*;
import java.util.*;

/** The file processing class for CaptainCruncher (FileAnalyzer)
 *  @author Bo Broadway
 */
public class AnalyzeFile {
    
    // constants
    private int VALID_NUMBER_OF_ARGUMENTS = 2;
    
    // instance variables
    private String inputFilePath;
    private Properties properties;
    private List<Analyzer> analyzers;
    
    /** Constructor method for AnalyzeFile
     */
    public AnalyzeFile() {
    }
    
    /** The main 'run' method for the file processing class
     *  @param arguments - takes argument array from the command line
     */    
    public void runAnalysis(String[] arguments) {
        /* 
        test if the correct number of arguments have been entered by the user 
        when running the application 
        */
        if (validArguments(arguments)) {
            // assign inputFilePath to command line argument 0
            inputFilePath = arguments[0];
            // load properties file using command line argument 1 for the file path
            loadProperties(arguments[1]);
            instantiateAnalyzers();
            /*
            open the input file
            input file will be closed after processing of the input file
            */
            processFile(inputFilePath);
            /*
            call the writeOutputFile method for each Analyzer class in a method 
            named writeAllOutputFiles()
            */
            writeAllOutputFiles();
            
        } else {
        /* 
        If the correct number is not entered then the application must output 
        a message to the command line asking for the right input and then terminate 
        the program 
        */
            printMessage("Please enter one argument on the command line");
        } 

    }

    /** Method used for checking valid number of command line arguments
     *  @param fileName - the name of the file being processed
     */
    public boolean validArguments(String[] arguments) {
        boolean isValid;
        if (arguments.length == VALID_NUMBER_OF_ARGUMENTS) {
            isValid = true;
        } else {
            isValid = false;
        }
        return isValid;
    }

    /** Method used to instantiate the analyzers
     */
    public void instantiateAnalyzers() {
        analyzers = new ArrayList<Analyzer>();
        analyzers.add(new SummaryReport(properties));
        analyzers.add(new UniqueTokenAnalyzer(properties));
        analyzers.add(new BigWordAnalyzer(properties));
        analyzers.add(new TokenCountAnalyzer(properties));
        analyzers.add(new TokenSizeAnalyzer(properties));
        analyzers.add(new KeywordAnalyzer(properties));
    }

    /** Method to load the properties file
     */
    public void loadProperties(String propertiesFilePath)  {
        properties = new Properties();
        try {
            properties.load(this.getClass().getResourceAsStream(propertiesFilePath));
        }
        catch(IOException ioe) {
            System.out.println("Can't load the properties file");
            ioe.printStackTrace();
        }
        catch(Exception e) {
            System.out.println("Problem: " + e);
            e.printStackTrace();
        }
    }
    
    /** Method used for opening/closing a file, exception handling, and reading the file
     *  @param fileName - the name of the file being processed
     */
    public void processFile(String fileName) {

        String outputFilePath = properties.getProperty("output.dir")
            + properties.getProperty("output.file.token.size");
        
        try (BufferedReader in = new BufferedReader(new FileReader(fileName))) {
            // loop through the lines of the input file
            while (in.ready()) {
                processTokens(in.readLine());
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
        
    /** Method to handle individual tokens
     *  @param inputLine - a line of input from the file
     */
    public void processTokens(String inputLine) {
        String[] tokens = inputLine.split("\\W+");
        for (String element : tokens) {
            if (element.length() > 0) {
                passTokenToAnalyzers(element);
            }
        }
    }
    
    /** Method to pass token to each analyzer
     *  @param token - the current token being passed
     */
    public void passTokenToAnalyzers(String token) {
        for (Analyzer analyzer : analyzers) {
            analyzer.processToken(token);
        }
    }
    
    /** Method to call each writOutputFile method for each Analyzer class
     */
    public void writeAllOutputFiles() {
        for (Analyzer analyzer : analyzers) {
            analyzer.writeOutputFile(inputFilePath);
        }
    }
    
    /** Method to print command line message
     *  @param message - message to be printed to the command line
     */
    public void printMessage(String message) {
        System.out.println(message);   
    }

}
