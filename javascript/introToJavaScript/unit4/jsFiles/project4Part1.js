/*
    This is the JavaScript code for 
    "A fine little part" File: /unit4/project/project4Part1.html
*/

// Declare Global Variables
var numberOne;
var numberTwo;

// The purpose of this function is to
// Prompt for Two Numbers, using global variables numberOne and numberTwo
function promptForTwoNumbers() {
    numberOne = Number(prompt("Enter a number"));
    numberTwo = Number(prompt("Enter another number"));   
}

// Mainline Function
function project4Part1() { 
    
    // Declare Constant
    var POSITIVE_NUMBER_BOUNDARY = 0;
    
    // Declare Variables
    var enteredNumbersProduct;

    // Prompt for two numbers, using the function
    promptForTwoNumbers();
    
    // Check the numbers are positive
    if (numberOne < POSITIVE_NUMBER_BOUNDARY || numberTwo < POSITIVE_NUMBER_BOUNDARY) {
        alert("One of the numbers was less than zero, please try again.");
    
    // Check the second number is not less than or equal to the first
    } else if (numberTwo <= numberOne) {
        alert("The second number has to be bigger than the first, please try again.");
        
    // When the numbers have passed the first tests, do the calculations and display loop
    // continuing each time until the first number is equal to the second number
    } else {
        while (numberOne < numberTwo) {
            enteredNumberProduct = numberOne * numberTwo;
            document.write(numberOne + " times " + numberTwo + " is " 
                + enteredNumberProduct + "\n");
            numberOne++;
        }
    }
}
