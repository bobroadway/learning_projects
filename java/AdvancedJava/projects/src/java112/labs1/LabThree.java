package java112.labs1;

public class LabThree {

    public static void main(String[] args) {
        LabThree labThree = new LabThree();
        if (args.length == 1) {
            labThree.run(args[0]);
        } else {
            System.out.println("Please enter one argument on the command line");
        }    
    }

    public void run(String input) {
        System.out.println("input: " + input);
    }

}
