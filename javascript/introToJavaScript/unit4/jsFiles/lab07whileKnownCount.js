/*
    This is the JavaScript code for 
    the function lab07whileKnownCountPart1() 
    in "Lab 7: While Loop with Known Count" 
    File: /unit4/labs/lab07whileKnownCount.html
*/
function lab07whileKnownCountPart1() {
    // PART 1: YOUR CODE STARTS AFTER THIS LINE
    
    // Declare Variables
    var loopCounter;
    var maximumLoop;
    var loopSumTotal;
    
    // Assignments Section
    loopCounter = 1;
    loopSumTotal = 0;
    
    // Prompt for loop maximum
    maximumLoop = Number(prompt("How many times would you like to loop?"));
    
    // Process request, dispay results
    while (loopCounter <= maximumLoop) {
        loopSumTotal += loopCounter;
        document.write("In loop " + loopCounter + " the total is " + loopSumTotal + ".\n");
        loopCounter++;
    }
    document.write("\nThe final total is " + loopSumTotal + ".");
}

/*
    This is the JavaScript code for 
    the function lab07whileKnownCountPart2() 
    in "Lab 7: While Loop with Known Count" 
    File: /unit4/labs/lab07whileKnownCount.html
*/
function lab07whileKnownCountPart2() {
    // PART 2: YOUR CODE STARTS AFTER THIS LINE
    
    // Declare Constants
    var SEVEN = 7;
    
    // Declare Variables
    var loopCounter;
    var loopMaximum;
    var product;
    
    // Assignments Sectioni
    loopCounter = 1;
    loopMaximum = 20;
    
    // Loop Section
    while (loopCounter <= loopMaximum) {
        product = loopCounter * SEVEN;
        document.write(SEVEN + " x " + loopCounter + " = " + product + "\n");
        loopCounter++;
    }
}