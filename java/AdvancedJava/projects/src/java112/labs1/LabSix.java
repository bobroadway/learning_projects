package java112.labs1;
import java.io.*;

/** A class to exercise reading a file and related exception handling
 *  @author Bo Broadway
 */

public class LabSix {

/** main method for starting the program
 *  @param args the command line arguments
 **/

    public static void main(String[] args) {
        LabSix labSix = new LabSix();
        if (args.length == 2) {
            labSix.run(args[0], args[1]);
        } else {
            System.out.println("Please enter two arguments on the command line, an input file name and an output file name");
        } 
    }

    public void run(String inputFile, String outputFile) {  
        
        try (BufferedReader in = new BufferedReader(new FileReader(inputFile))) {

            try (PrintWriter out = new PrintWriter(new BufferedWriter(new FileWriter(outputFile)))) {
            
                while (in.ready()) {
                    out.println(in.readLine());
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
