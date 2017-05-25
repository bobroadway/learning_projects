/*
    This is the JavaScript code for 
    "Lab Exercise 11, Part 1
    File: /unit4/labs/exercise-11.html
*/
function exercise11Part1() {
    // PART 1: YOUR CODE STARTS AFTER THIS LINE
      
    // Declare Constants
    var GRADE_A = "A";
    var GRADE_B = "B";
    var GRADE_C = "C";
    var GRADE_D = "D";
    var GRADE_F = "F";
    var GRADE_A_MINIMUM = 90;
    var GRADE_B_MINIMUM = 80;
    var GRADE_C_MINIMUM = 70;
    var GRADE_D_MINIMUM = 60;
    
    // Declare Variables and Initialize
    var records = openStudentExamRecords();
    var studentCount = 0;
    var scoreTotal = 0;
    var scoreAverage;
    var aCount = 0;
    var bCount = 0;
    var cCount = 0;
    var dCount = 0;
    var fCount = 0;
    
    // Loop, checking each record, calculating letter grade and counting each grade
    while (records.readNextRecord()) {
        studentCount++;
        scoreTotal += records.getStudentScore();
        if (records.getStudentScore() >= GRADE_A_MINIMUM) {
            aCount++;
        } else if (records.getStudentScore() >= GRADE_B_MINIMUM) {
            bCount++;
        } else if (records.getStudentScore() >= GRADE_C_MINIMUM) {
            cCount++;
        } else if (records.getStudentScore() >= GRADE_D_MINIMUM) {
            dCount++;
        } else {
            fCount++;
        }
    }
    
    // Calculate Average
    scoreAverage = scoreTotal / studentCount;
    
    // Display Results
    document.write("Grade\t\tCount\n" + GRADE_A + "\t\t" + aCount
        + "\n" + GRADE_B + "\t\t" + bCount
        + "\n" + GRADE_C + "\t\t" + cCount
        + "\n" + GRADE_D + "\t\t" + dCount
        + "\n" + GRADE_F + "\t\t" + fCount
        + "\n\n" + "Average Score:\t" + scoreAverage.toFixed(2));        
}


/*
    This is the JavaScript code for 
    "Lab Exercise 11, Part 2
    File: /unit4/labs/exercise-11.html
*/
function exercise11Part2() {
    // PART 2: YOUR CODE STARTS AFTER THIS LINE
    
    // Declare Variables and initialize
    var userGuess;
    var newGuessMessage = "Guess a number between 1 and 100!";
    var guessType;
                     // random number between 1 and 100
    var correctAnswer = Math.floor((Math.random() * 100) + 1);
    
    // Loop: prompt for guess, check the guess, output appropriate message until correct
    while (userGuess !== correctAnswer) {
        userGuess = prompt(newGuessMessage);
        if (isNaN(userGuess)) {
            newGuessMessage = "That's not a number silly goose!"
            guessType = "stupid guess: ";
        } else { // did it this way so i could output the NaN guess correctly
            userGuess = Number(userGuess);
            if (userGuess > correctAnswer) {
                newGuessMessage = "Too Big! Try again! (That's what she said)"
                guessType = "large guess: ";
            } else if (userGuess < correctAnswer) {
                newGuessMessage = "Too Small! Try Again!"
                guessType = "small guess: ";
            } else {
                guessType = "\nCorrect Guess: ";
            }
        }
        document.write(guessType + userGuess + "\n");
    }
}