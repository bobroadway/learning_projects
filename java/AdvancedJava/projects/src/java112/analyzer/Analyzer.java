package java112.analyzer;

import java.io.*;
import java.util.*;

/** Interface to handle tokens in a file, and write output pertaining to those tokens
 *  @author Bo Broadway
 */
public interface Analyzer {

    /** Method to handle individual tokens from an input file source
     *  @param token - a single token
     */
    void processToken(String token);

    /** Method to create an output file
     *  @param inputFilePath - source file used for input
     *  @param outputFilePath - output file, full relative path
     */
    void writeOutputFile(String inputFilePath);
}
