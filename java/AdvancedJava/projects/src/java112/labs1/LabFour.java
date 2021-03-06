package java112.labs1;
import java.io.*;

/** A class to exercise reading a file and related exception handling
 *  @author Bo Broadway
 */

public class LabFour {

/** main method for starting the program
 *  @param args the command line arguments
 **/

    public static void main(String[] args) {
        LabFour labFour = new LabFour();
        if (args.length == 1) {
            labFour.run(args[0]);
        } else {
            System.out.println("Please enter one argument on the command line");
        } 
    }

    public void run(String input) {
    
        try (BufferedReader in = new BufferedReader(new FileReader(input))) {

            while (in.ready()) {
                System.out.println(in.readLine());
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
