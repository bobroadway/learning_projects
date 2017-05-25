/*
    This is the JavaScript code for 
    "Lab 4: Your First For Loop" 
    File: /unit4/labs/lab04firstForLoop.html
*/
function lab04firstForLoop() {

    // Declare Constants
    var NUMBER_TIMES_TO_LOOP = 5;
    
    // Declare Variables
    var userEnteredString;
    var loopCounter;
    
    // Prompt and Print, 5 times
    for(loopCounter = 0; loopCounter < NUMBER_TIMES_TO_LOOP; loopCounter++) {
        userEnteredString = prompt("Enter a string:\n\t(" + (loopCounter + 1) + " of 5)");
        document.write("You entered: " + userEnteredString + "\n");
    }
    
}