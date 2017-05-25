package java112.labs2;

import java.util.*;
import java.io.*;

public class LabThree {

    public static void main(String[] args) {

        LabThree lab = new LabThree();
        lab.run(args[0]);

    }
    
    private Properties properties;
    private String propertiesFilePath;

    public void run(String arg) {
    
        propertiesFilePath = arg;
        loadProperties(propertiesFilePath);
        
        TreeSet<String> propertyNames = new TreeSet<>(properties.stringPropertyNames());
        
        for (String key: propertyNames) {
            String value = properties.getProperty(key);
            System.out.println(key + ": " + value);  
        }
        
    }
    
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

}
