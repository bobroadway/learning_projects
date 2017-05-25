/*
    This is the JavaScript code for 
    "Lab Exercise 9, Part 1
    File: /unit4/labs/exercise-9.html
*/
function exercise9Part1() {
    // PART 1: YOUR CODE STARTS AFTER THIS LINE
    
    // Declare Constants
    var TOTAL_BOUNDARY = 1000;
    var ZERO_INITIALIZE = 0;
    
    // Declare Variables
    var enteredNumber;
    var total;
       
    // Assignmensts / Initialization
    total = ZERO_INITIALIZE;    
    
    // Run the prompt loop, ending the loop when the user enters a smaller number
    // than the previously entered number
    while (total <= TOTAL_BOUNDARY) {
        enteredNumber = Number(prompt("Enter a number:"));
        total += enteredNumber;
        document.write("Entered Number: " + enteredNumber + ", Current Total: "
            + total + "\n");
    }
    document.write("\nThe final total is: " + total);
}


/*
    This is the JavaScript code for 
    "Lab Exercise 9, Part 2
    File: /unit4/labs/exercise-9.html
*/
function exercise9Part2() {
    // PART 2: YOUR CODE STARTS AFTER THIS LINE
    
    // Declare Constant
    var QUIT_CODE;
    var ZERO_INITIALIZE;
    
    // Declare Variables
    var enteredNumber;
    var remainderCheck;
    
    // Assign quit code to 1, the result of an odd number's modulo 2
    QUIT_CODE = 1;
    
    // Run the prompt loop, ending the loop when the user enters a smaller number
    // than the previously entered number
    while (remainderCheck !== QUIT_CODE) {
        enteredNumber = Number(prompt("Enter an even number:"));
        remainderCheck = enteredNumber % 2;
        if (remainderCheck !== QUIT_CODE) {
            document.write(enteredNumber + " is an even number\n");
        } else {
            document.write(enteredNumber + " isn't an even number");
        }
    }
}

/*
    This is the JavaScript code for 
    "Lab Exercise 9, Part 3
    File: /unit4/labs/exercise-9.html
*/
function exercise9Part3() {
    // PART 3: YOUR CODE STARTS AFTER THIS LINE
    
    // Delete the following statement when you start your code.
    document.write("This function is named \"exercise9Part3()\" " 
            + "<br />and is in the JavaScript file: " 
            + "\"/unit4/jsFiles/exercise-9.js\"");
}