/*
    This is the JavaScript code for 
    "Lab Exercise 3, Part 1
    File: /unit4/labs/exercises-7.html
*/
function exercise7Part1() {
    // PART 1: YOUR CODE STARTS AFTER THIS LINE
    
    // Declare Constants
    var MAX_LOOP_COUNT = 30;
    
    // Declare Variables
    var loopCount;
    var loopCountSquare;
    var loopCountCube;
    
    // Assignments
    var loopCount = 1;
    
    // Run the loop, display the current loop count, its square, and its cube
    while (loopCount <= MAX_LOOP_COUNT) {
        loopCountSquare = Math.pow(loopCount, 2);
        loopCountCube = Math.pow(loopCount, 3);
        document.write(loopCount + ", " + loopCountSquare + ", " + loopCountCube
            + "\n");
        loopCount++;
    }
}


/*
    This is the JavaScript code for 
    "Lab Exercise 3, Part 2
    File: /unit4/labs/exercises-7.html
*/
function exercise7Part2() {
    // PART 2: YOUR CODE STARTS AFTER THIS LINE
    
    // Declare Variables
    var userFirstNumber;
    var userSecondNumber;
    var loopCount;
    var loopTotal;
    
    // Prompt for two numbers, validate
    userFirstNumber = Number(prompt("Enter a number: "));
    userSecondNumber = Number(prompt("Now enter a BIGGER number: "));
    if (userSecondNumber <= userFirstNumber) {
        alert("Error: Second number was not bigger than the first number");
    }
    
    // Initialze Loop
    loopCount = userFirstNumber;
    loopTotal = userFirstNumber;
    
    // Run the loop, adding each number together as it goes, and building the output
    document.write(userFirstNumber);
    
    while (loopCount < userSecondNumber) {
        loopCount++;
        loopTotal += loopCount;
        document.write(" + " + loopCount);
    }
    
    document.write(" = " + loopTotal);    
}