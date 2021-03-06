package java112.labs1;
import java.util.*;
import java.io.*;

/** A class to excersize java collections in the context of file i/o
 *  @author Bo Broadway
 */

public class LabSeven {

/** main method for starting the program
 *  @param args the command line arguments
 */

    public static void main(String[] args) {
   
        if (args.length == 1) {
            LabSeven lab = new LabSeven();
            lab.run(args[0]);
        } else {
            System.out.println("Please enter one argument on the command line");
        }
        
    }
    
    // instantiate an ArrayList
    ArrayList<String> list;
    

    
    public void run(String fileName) {
        
        list = new ArrayList<>();
        
        // add elements to the list
        list.add("one");
        list.add("two");
        list.add("three");
        list.add("four");
        list.add("five");
        list.add("six");
        list.add("seven");
        list.add("eight");
        list.add("nine");
        list.add("ten");
        
        // call write method
        writeListToOutputFile(fileName);
          
    }
    
    public void writeListToOutputFile(String fileName) {
        
        try (PrintWriter out = new PrintWriter(new BufferedWriter(new FileWriter(fileName)))) {
            
            for (String element : list) {
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
