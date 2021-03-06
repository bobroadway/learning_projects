/*
    Name: Bo Broadway
    Section: Tu/Th 12:30-2:20
    Email: bbroadway@madisoncollege.edu
*/

/*
    This is the JavaScript code for 
    "Lab Exercise 6, Part 1
    File: /unit5/labs/exercises-3.html
*/

// Decalare Global Variables
var stringList = "<ul>";

// This function creates a list element.
function createListElement(userString) {
    stringList += "<li>" + userString + "</li>";
}

// This function is the prompt loop, with each prompt that doesn't return
// as "quit" an unordered list is appended
function promptLoop() {
    // Declare quit code constant
    var QUIT_CODE = "quit";
    
    // Declare prompt variable
    var enteredString;
    
    // Prompt loop, continues until they say "quit"
    while (enteredString !== QUIT_CODE) {
        enteredString = prompt("Enter a word. Or \"quit\" to quit.");
        if (enteredString !== QUIT_CODE) {
            createListElement(enteredString);
        } else {
            stringList += "</ul>";
        }
    }      
}

// Main line function
function exercise3Part1() {
    // PART 1: YOUR CODE STARTS AFTER THIS LINE
    // Declare output variable, and assign it
    var output = document.getElementById('outputPart1');
    
    // Call the prompt loop function
    promptLoop();

    // Display Output
    output.innerHTML = stringList;
}


/*
Modules:
    openTable(tableToOpen)
    calculateSum(numberOne, numberTwo)
    buildRow(numberOne, numberTwo, numberThree)
    fillInTable(tableToFill)
    closeTable(tableToClose)
    exercise3Part2()

The Program Planning Lists

    The List of Input Variables:
    enteredNumber (x3)

    The List of Output Variables:
    firstNumber
    secondNumber
    thirdNumber
    firstSum
    secondSum
    thirdSum

    The Process Checklist:
    declare Global Variable to hold the table
    declare variables
    open the table
    prompt for numbers
    calculate sums
    build table row by row with numbers and sums
    close the table
    display the table

The Program Test Plan

    TEST CASE 1:

        INPUT VALUES: 1, 2, 3

        EXPECTED RESULT: 
        1 2 3
        1 3 4
        2 3 5
    
    TEST CASE 2:

        INPUT VALUES: 2, 3, 4

        EXPECTED RESULT: 
        2 3 5
        2 4 6
        3 4 7

    TEST CASE 3:

        INPUT VALUES: 1, 1, 3

        EXPECTED RESULT: 
        1 1 2
        1 3 4
        1 3 4
*/


/*
    This is the JavaScript code for 
    "Lab Exercise 6, Part 2
    File: /unit5/labs/exercises-3.html
*/

// Declare Global Variable to hold the table
var numberTable = ""; 

// Function to open the table
function openTable(tableToOpen) {
    // Table opening
    tableToOpen += "<table><tr><td colspan=2>Entry Pair</td><td>Sum</td></tr>";
    // Pass along the table contents
    return tableToOpen; // This pattern will continue, i did it this way to abstract the processes
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

// Function to fill in the table, using prompted numbers and their various sums
function fillInTable(tableToFill) {
    // Declare Variables
    var enteredNumber;
    var firstNumber;
    var secondNumber;
    var thirdNumber;
    var firstSum;
    var secondSum;
    var thirdSum;
    var loopCount;
    
    // Prompt loop
    for (loopCount = 0; loopCount < 3; loopCount++) {
        enteredNumber = Number(prompt("Enter a number: "));
        // Make sure it is a number, if so, continue
        if (isNaN(enteredNumber)) {
            alert("That's not a number!");
            break;
        }
        // Assign entered number to proper holding variable depending on loop level
        if (loopCount === 0) {
            firstNumber = enteredNumber;
        } else if (loopCount === 1) {
            secondNumber = enteredNumber;
        } else if (loopCount === 2) {
            thirdNumber = enteredNumber;
        }
    }
        
    // Calculate sums 
    firstSum = calculateSum(firstNumber, secondNumber);
    secondSum = calculateSum(firstNumber, thirdNumber);
    thirdSum = calculateSum(secondNumber, thirdNumber); 
    
    // Build the table using the buildRow function
    tableToFill += buildRow(firstNumber, secondNumber, firstSum);
    tableToFill += buildRow(firstNumber, thirdNumber, secondSum);
    tableToFill += buildRow(secondNumber, thirdNumber, thirdSum);
    
    // Pass along the table contents
    return tableToFill;
}

// Function to close the table
function closeTable(tableToClose) {
    // Add closing table tag to html string
    tableToClose += "</table>";
    // Pass along contents of the table
    return tableToClose;
}                                                            

function exercise3Part2() {
    // PART 2: YOUR CODE STARTS AFTER THIS LINE
    var output = document.getElementById('outputPart2');
    
    // Begin the opening of the HTML table
    numberTable = openTable(numberTable);
    // Build the table using the function that prompts numbers and calculates sums
    numberTable = fillInTable(numberTable);
    // Close the table tag
    numberTable = closeTable(numberTable);

    // Display the full number table on the HTML page
    output.innerHTML = numberTable;
}

