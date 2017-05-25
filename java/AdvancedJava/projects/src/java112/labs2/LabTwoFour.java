package java112.labs2;

import java.util.*;
import java.io.*;

public class LabTwoFour {
    
    public static void main(String[] args) {
        
        LabTwoFour lab = new LabTwoFour();
        lab.run();
        
    }

    private Map<String, Integer> map;
    
    public void run() {
        
        map = new HashMap<>();
        map.put("one", 1);
        map.put("two", 2);
        map.put("three", 3);
        map.put("four", 4);
        map.put("five", 5);
        map.put("six", 6);   
        
        for (Map.Entry<String, Integer> entry : map.entrySet()) {
            String key = entry.getKey();
            int value = entry.getValue();
            System.out.println(key + " --> " + value);
        }
      
    }

}
