package java112.labs1;
import java.util.*;
import java.io.*;

/** A class to excersize java collections in the context of file i/o
 *  @author Bo Broadway
 */

public class LabEight {

/** main method for starting the program
 *  @param args the command line arguments
 */

    public static void main(String[] args) {
   
        if (args.length == 1) {
            LabEight lab = new LabEight();
            lab.run(args[0]);
        } else {
            System.out.println("Please enter one argument on the command line, an output file name");
        }
        
    }
    
    // instantiate TreeSet
    TreeSet<String> set;

    public void run(String fileName) {
        
        set = new TreeSet<>();
        
        // populate set
        set.add("one");
        set.add("one");
        set.add("five");
        set.add("two");
        set.add("four");
        set.add("two");
        set.add("three");
        set.add("three");
        set.add("four");
        set.add("three");
        
        // call write method
        writeSetToOutputFile(fileName);

    }
    
    public void writeSetToOutputFile(String fileName) {
        
        // tested the append by including 'true' as a second argument in FileWriter
        try (PrintWriter out = new PrintWriter(new BufferedWriter(new FileWriter(fileName, true)))) {
            
            for (String element : set) {
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
