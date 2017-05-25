/*
    This is the JavaScript code for 
    "Lab Exercise 8, Part 1
    File: /unit4/labs/exercise-8.html
*/
function exercise8Part1() {
    // PART 1: YOUR CODE STARTS AFTER THIS LINE

    // Declare Constants
    var MAX_LOOP_COUNT = 50;
    
    // Declare Variables
    var loopCount;
    var loopCountHalf;
    var loopCountQuarter;
    
    // Run the loop, display the current loop count, its half, and its quarter
    for (loopCount = 1; loopCount <= MAX_LOOP_COUNT; loopCount++) {
        loopCountHalf = loopCount / 2;
        loopCountQuarter = loopCount / 4;
        document.write(loopCount + ", " + loopCountHalf + ", " + loopCountQuarter
            + "\n");
    }
}


/*
    This is the JavaScript code for 
    "Lab Exercise 8, Part 2
    File: /unit4/labs/exercise-8.html
*/
function exercise8Part2() {
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
    
    // Assignments
    loopTotal = 1;
    
    // Run the loop, multiplying each number together as it goes, and building the output   
    for (loopCount = userFirstNumber; loopCount < userSecondNumber; loopCount++) {
        loopTotal *= loopCount;
        document.write(loopCount + " * ");
    }
    loopTotal *= userSecondNumber;
    document.write(userSecondNumber + " = " + loopTotal);  
}