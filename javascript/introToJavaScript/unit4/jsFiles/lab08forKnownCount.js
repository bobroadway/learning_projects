/*
    This is the JavaScript code for 
    the function lab08forKnownCountPart1() 
    in "Lab 8: For Loop with Known Count" 
    File: /unit4/labs/lab08forKnownCount.html
*/
function lab08forKnownCountPart1() {
    // Your code goes in here.
    
    // Declare Variables
    var loopCounter;
    var maximumLoop;
    var loopSumTotal;
    
    // Assigments
    loopSumTotal = 0;
    
    // Prompt for loop maximum
    maximumLoop = Number(prompt("How many times would you like to loop?"));
    
    // Process request, dispay results
    for (loopCounter = 1; loopCounter <= maximumLoop; loopCounter++) {
        loopSumTotal += loopCounter;
        document.write("In loop " + loopCounter + " the total is " + loopSumTotal + ".\n");
    }
    document.write("\nThe final total is " + loopSumTotal + ".");
}

/*
    This is the JavaScript code for 
    the function lab08forKnownCountPart2() 
    in "Lab 8: For Loop with Known Count" 
    File: /unit4/labs/lab08forKnownCount.html
*/
function lab08forKnownCountPart2() {
    // Your code goes in here.
    
    // Declare Constants
    var DIVIDEND = 1000;
    
    // Declare Variables
    var loopCounter;
    var loopMaximum;
    var quotient;
    
    // Assignments Sectioni
    loopMaximum = 100;
    
    // Loop Section
    for (loopCounter = 1; loopCounter <= loopMaximum; loopCounter++) {
        quotient = DIVIDEND / loopCounter;
        document.write(DIVIDEND + " / " + loopCounter + " = " + quotient + "\n");
    }
}

