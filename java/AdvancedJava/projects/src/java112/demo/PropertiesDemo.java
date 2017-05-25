package java112.demo;

import java.util.*;
import java.io.*;

public class PropertiesDemo {

    public static void main(String[] args) {
    
        PropertiesDemo demo = new PropertiesDemo();
        demo.run();

    }
    
    public void run() {
        
        // instantiate properties
        Properties properties = new Properties();
        
        // read in the properties file
        try {
            properties.load(this.getClass().getResourceAsStream("/demo.properties"));
        } catch (IOException ioe) {
            ioe.printStackTrace();
        }
        
        // find the key/property called "author" and write out the value for that key
        System.out.println(properties.getProperty("author"));
        
        // get a list of the keys, aka, property names
        Set<String> propertyNames = properties.stringPropertyNames();
        
        // write out all the property names/keys
        System.out.println("The set of property names" + propertyNames);
        
        // iterate 
        for (String key: propertyNames) {
            String value = properties.getProperty(key);
            System.out.println(key + ": " + value);  
        }
        
    }

}
