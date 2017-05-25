/*
    This is file /unit4/whileUnknownCount.js 
    It contains the JavaScript code for
    
    "A while loop with unknown loop count" 
    File: /unit4/whileUnknownCount.html
*/
function whileUnknownCount() {
    // Your code goes in here.
    
    document.write("The JavaScript file for this page is: "
            + "\"/unit4/jsFiles/whileUnknownCount.js\"");
}

/*
    This function is in file /unit4/whileUnknowCount.js
    It loops until the user enters "quit"
*/
function askForNumbers() {
    
    // Declare Constants
    var ZERO = 0;
    var QUIT_CODE = "quit";
    
    // Declare Variables
    var number;
    var total;
    
    // Assign initial values for variables
    total = ZERO;
    
    while (number !== QUIT_CODE) {
        number = prompt("Enter a number or \"quit\"");
        if (number !== QUIT_CODE) {           
            number = Number(number);
            total += number;
            document.write("You entered: " + number + "<br />");
        }
    }
    document.write("Your total is: " + total + "<br />Goodbye!");
}

/*
    This function is in file /unit4/whileUnknowCount.js
    It loops until the user enters 5
*/
function lookForFive() {
    
    // Declare Constants
    var ONE = 1;
    var QUIT_CODE = "5";
    
    // Declare Variables
    var number;
    var counter;
    
    // Assign initial values for variables
    counter = ONE;

    while (number !== QUIT_CODE) {
        number = prompt("Enter the number " + counter);
        document.write("You entered " + number + "<br />");
        counter++;
    }
    document.write("Bye, bye!");
}

function quickExamScoresExample() {
    var results;
    
    results = openStudentExamRecords();
    
    while (results.readNextRecord()) {
        document.write(results.getStudentName() + ", " 
                + results.getStudentScore() + "<br />");
    }
}


/*
    Stopping a loop with a comparison
*/
function comparison() {
    
    // Declare Constants
    var ZERO = 0;
    var ONE_HUNDRED = 100;
    
    // Declare Variables
    var firstNumber;
    var enteredNumber;
    
    // Assign initial values for variables
    firstNumber = ONE_HUNDRED;
    enteredNumber = ZERO;
    
    while (firstNumber > enteredNumber) {
        enteredNumber = prompt("Enter a Number Less than 100");
        enteredNumber = Number(enteredNumber);
        document.write("Entered Number: " + enteredNumber + "<br />");
    }
}


/*
    Stopping a loop by comparing characters
*/
function comparisonCharacters() {
    
    // Declare Constants
    var QUIT_CODE = "Z";
    
    // Declare Variables
    var enteredCharactered;
    
    enteredCharactered = prompt("Enter a letter that is less than 'Z'");
    
    while (enteredCharactered < QUIT_CODE) {
        document.write(enteredCharactered + " is less than " + QUIT_CODE 
                + "<br />");
        enteredCharactered = prompt("Enter a letter that is less than 'Z'");
    }
    
    document.write(enteredCharactered + " is bigger than " + QUIT_CODE);    
}





