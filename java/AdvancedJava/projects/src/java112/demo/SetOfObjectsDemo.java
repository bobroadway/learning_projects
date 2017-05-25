package java112.demo;

import java.io.*;
import java.util.*;

public class SetOfObjectsDemo {

    public static void main(String[] args) {
        List<ObjectRunner> objects = new ArrayList<ObjectRunner>();
        objects.add(new ObjectOne());
        objects.add(new ObjectTwo());
        objects.add(new ObjectThree());
        
        for (ObjectRunner o : objects) {
            o.runProcess();
        }
        
    }

}

interface ObjectRunner {
    public void runProcess();
}

class ObjectOne implements ObjectRunner {

    public void runProcess() {
        System.out.println("One!");
    }

}

class ObjectTwo implements ObjectRunner {

    public void runProcess() {
        System.out.println("Two!");
    }

}

class ObjectThree implements ObjectRunner {

    public void runProcess() {
        System.out.println("Three!");
    }

}

