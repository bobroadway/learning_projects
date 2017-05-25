/*
    This is the JavaScript code for 
    "Lab 2: Local and Global Variables" 
    File: /unit5/labs/lab02localGlobal.html
*/

// Declare Global Variables
var fullName;

// The purpose of this function is to print the full name.
function printFullName() {
    
    // Declare Variables
    var output;
    var fullName;
    
    // Assign
    output = document.getElementById('outputList');
    fullName = "Bill Smith";

    // Display output via innerHTML using the fullName local variable
    output.innerHTML += "<li>" + fullName + "</li>";
}

// Main line function
function lab02localGlobal() {
    // Your code goes in here.
    
    // Declare Variables
    var output;
    
    // Assign
    output = document.getElementById('outputList');
    fullName = "Judy Green";
    
    // Display output via innerHTML usinig the fullName global variable
    output.innerHTML += "<li>" + fullName + "</li>";
    
    // Display output via a call to function which uses that function's local variable
    printFullName(); 
}