package java112.labs1;
import java.io.*;

/** A class to exercise reading a file and related exception handling
 *  @author Bo Broadway
 */

public class LabFive {

/** main method for starting the program
 *  @param args the command line arguments
 **/

    public static void main(String[] args) {
        LabFive labFive = new LabFive();
        if (args.length == 2) {
            labFive.run(args[0], args[1]);
        } else {
            System.out.println("Please enter two arguments on the command line, a file name and a message");
        } 
    }

    public void run(String fileName, String message) {

        // FileWriter(String file, boolean append) --add true as second param to append to file
        try (PrintWriter out = new PrintWriter(new BufferedWriter(new FileWriter(fileName)))) {

            out.println(message);

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
