/*
    Name: Bo Broadway
    Section: Tu/Th 12:30-2:20
    Email: bbroadway@madisoncollege.edu
*/

/*
    This is the JavaScript code for 
    "Lab Exercise 7, Part 1
    File: /unit5/labs/exercises-4.html
*/

// Declare Global Constants for number validation
var QUIT_CODE = "quit";
var FAIL_CODE = "fail";

// Declare Global Variables for final output
var numberTable = ""; 
var userDerp = false; // This will remain false unless a NaN value is entered

// Function to open the table
function openTable(tableToOpen) {
    // Table opening
    tableToOpen += "<table><tr><td colspan=2>Entries</td><td>Sum</td></tr>";
    // Pass along the table contents
    return tableToOpen;
}

// Function to calculate a sum of two numbers
function calculateSum(numberOne, numberTwo) {
    return numberOne + numberTwo;
}
  
// Function to build a full row of our table
function buildRow(numberOne, numberTwo, numberThree) {
    return "<tr><td>" + numberOne + "</td>"
        + "<td>" + numberTwo + "</td>"
        + "<td>" + numberThree + "</td></tr>";
}

// Function to prompt and return necessary values
function promptForNumber(enteredNumber, identifyingString) {
    enteredNumber = prompt("Enter the "
        + identifyingString);
    // Return "quit" if it is in fact quit
    if (enteredNumber.toLowerCase() === QUIT_CODE) {
        return QUIT_CODE;
        // return "quit";
    }
    
    enteredNumber = Number(enteredNumber);
    // Return "fail" if it is not a number
    if (isNaN(enteredNumber)) {
        return FAIL_CODE;
        // return "fail";
    } else {
        return enteredNumber;
    }
}

// Function to see if the user entered quit or any NaN value
function isNotValid(enteredNumber) {
    // Respond properly to QUIT_CODE
    if (enteredNumber === QUIT_CODE) {
        alert("You got it! Quitting!");
        return true;
    }
    // Respond properly to FAIL_CODE
    if (enteredNumber === FAIL_CODE) {
        alert("That's not a number!");
        // Set userDerp as true to humiliate them later
        userDerp = true;
        return true;
    }
    
    // If all good, then "isNotValid" returns false (meaning it IS a valid number)
    return false;
}

// Function to close the table
function closeTable(tableToClose) {
    // Add closing table tag to html string
    tableToClose += "</table>";
    // Pass along contents of the table
    return tableToClose;
}

function exercise4Part1() {
    // PART 1: YOUR CODE STARTS AFTER THIS LINE
    // Declare Variables
    var enteredNumber;
    var firstNumber;
    var secondNumber;
    var sum;
    // Set output to the output div
    var output = document.getElementById('outputPart1');

    // Begin the opening of the HTML table
    numberTable = openTable(numberTable);
    
    // Prompt loop
    while (firstNumber !== QUIT_CODE && secondNumber !== QUIT_CODE) {
        // Prompt for first number
        firstNumber = promptForNumber(enteredNumber, "first number: (or \"quit\" to quit)");
        // Send to number validation function
        if (isNotValid(firstNumber)) {
            break;
        }
        // Prompt for second number
        secondNumber = promptForNumber(enteredNumber, "second number:");
        // Send to number validation function
        if (isNotValid(secondNumber)) {
            break;
        }

        // Calculate sums 
        sum = calculateSum(firstNumber, secondNumber);
        // Fill in the table row
        numberTable += buildRow(firstNumber, secondNumber, sum);
    }
    
    // Close the table tag
    numberTable = closeTable(numberTable);
    
    // Display appropriate output
    if (userDerp) {
        // Display the failure message
        output.innerHTML = "System Failure. User can not follow instructions. Point and laugh.";
    } else {
        // Display the full number table on the HTML page
        output.innerHTML = numberTable;
    }
}

/*
Modules:
    findLength(string)
    convertToUpper(string)
    convertToLower(string)
    findFirstSpace(string)
    exercise4Part2()

The Program Planning Lists

    The List of Input Variables:
        enteredString

    The List of Output Variables:
        declare variables
        prompt for string
        processes section that includes all the functions
            .length
            toUpperCase()
            toLowerCase()
            indexOf(" ")
        display output

    The Process Checklist:
        enteredString
        stringLength
        upperCaseString
        lowerCaseString
        spaceIndex


The Program Test Plan

    TEST CASE 1:

        INPUT VALUES: Hi, this is my string.

        EXPECTED RESULT: 
        Entered String: "Hi, this is my string."
        
        Length: 22
        Uppercase: "HI, THIS IS MY STRING."
        Lowercase: "hi, this is my string."
        Location of first space: 3
    
    TEST CASE 2:

        INPUT VALUES: Hello Friend

        EXPECTED RESULT: 
        Entered String: "Hello Friend"

        Length: HELLO FRIEND
        Uppercase: HELLO FRIEND
        Lowercase: hello friend
        Location of first space: 5

    TEST CASE 3:

        INPUT VALUES: Bo Broadway

        EXPECTED RESULT: 
        Entered String: "Bo Broadway"
        
        Length: BO BROADWAY
        Uppercase: BO BROADWAY
        Lowercase: bo broadway
        Location of first space: 2
*/

/*
    This is the JavaScript code for 
    "Lab Exercise 7, Part 2
    File: /unit5/labs/exercises-4.html
*/
// Function to find the length of a string
function findLength(string) {
    return string.toUpperCase();
}

// Function to convert a string to all uppercase
function convertToUpper(string) {
    return string.toUpperCase();
}

// Function to convert a string to all lowercase
function convertToLower(string) {
    return string.toLowerCase();
}

// Function to find the first 'space'
function findFirstSpace(string) {
    return string.indexOf(" ");
}

// Main line function
function exercise4Part2() {
    // PART 2: YOUR CODE STARTS AFTER THIS LINE
    // Declare variables
    var output = document.getElementById('outputPart2');
    var enteredString;
    var stringLength;
    var upperCaseString;
    var lowerCaseString;
    var spaceIndex;
    
    // Prompt for the enteredString
    enteredString = prompt("Enter a string! (Please)");
    
    // Run the various processes from the above functions
    stringLength = findLength(enteredString);
    upperCaseString = convertToUpper(enteredString);
    lowerCaseString = convertToLower(enteredString);
    spaceIndex = findFirstSpace(enteredString);
    
    // Output the results
    output.innerHTML = "<strong>Entered String:</strong> \"" + enteredString + "\"<br /><br ?>"
        + "<strong>Length:</strong> " + stringLength + "<br />"
        + "<strong>Uppercase:</strong> " + upperCaseString + "<br />"
        + "<strong>Lowercase:</strong> " + lowerCaseString + "<br />"
        + "<strong>Location of first space:</strong> " + spaceIndex;
}

