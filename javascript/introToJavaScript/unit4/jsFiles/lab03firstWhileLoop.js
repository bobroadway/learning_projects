/*
    This is the JavaScript code for 
    "Lab 3: Your First While Loop" 
    File: /unit4/labs/lab03firstWhileLoop.html
*/
function lab03firstWhileLoop() {
    
    // Declare Constants
    var NUMBER_TIMES_TO_LOOP = 5;
    
    // Declare Variables
    var userEnteredString;
    var loopCounter;

    // Assignments Section
    var loopCounter = 0;
    
    // Begin looping
    while (loopCounter < NUMBER_TIMES_TO_LOOP) {
        userEnteredString = prompt("Enter a string:\n\t(" + (loopCounter + 1) + " of 5)");
        document.write("You entered: " + userEnteredString + "\n");
        loopCounter++;
    } 
    
}