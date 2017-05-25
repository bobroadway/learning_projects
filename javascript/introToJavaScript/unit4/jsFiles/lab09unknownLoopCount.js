/*
    This is the JavaScript code for 
    the function lab09unknownLoopCount() 
    in "Lab 9: Unknown Loop Count" 
    File: /unit4/labs/lab09unknownLoopCount.html
*/
function lab09unknownLoopCount() {
    // Your code goes in here.
    
    // Declare Variables
    var currentNumber;
    var enteredNumber;
       
    // Assignmensts / Initialization
    currentNumber = 0;
    
    // Prompt for a number
    enteredNumber = Number(prompt("Enter a number (Greater than 0):"));
    
    // Run the prompt loop, ending the loop when the user enters a smaller number
    // than the previously entered number
    while (enteredNumber > currentNumber) {
        document.write(enteredNumber + " is bigger than " + currentNumber + "\n");
        currentNumber = enteredNumber;
        enteredNumber = Number(prompt("Now enter a bigger number:"));
    }
    
    // Check if it's the same or less than to determin what text to output
    if (enteredNumber < currentNumber) {
        document.write(enteredNumber + " is smaller than " + currentNumber + "\n");
    } else {
        document.write(enteredNumber + " is the same as " + currentNumber + "\n");
    }
    document.write("Good bye!");
}
