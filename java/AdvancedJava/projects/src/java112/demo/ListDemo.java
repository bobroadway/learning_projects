package java112.demo;

import java.util.*;

/** A class to demonstrate lists, specifically, ArrayList
 *  @author Bo Broadway
 */

public class ListDemo {

 /** Main method to demonstrate use of the List interface/ArrayList class
  *  @param args Parameters that are entered in the command line.
  */

    public static void main(String[] args) {

        // instantiate an ArrayList
        List<String> myList = new ArrayList<>();

        // add elements to the list
        myList.add("one");
        myList.add("one");
        myList.add("and");
        myList.add("two");

        // print the list
        System.out.println(myList);
        
        // determine if an item is in the list
        if (myList.contains("and")) {
            System.out.println("Yep, 'and' is in there!");
        }
        
        // iterate over the list
        for (String element : myList) {
            System.out.println(element);
        }
    
    }

}
