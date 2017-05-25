/*
    This is the JavaScript code for 
    "Lab 2: Global Scope" 
    File: /unit5/labs/lab13globalScope.html
*/

// Global Variables
var fullName;

// The purpose of thie function is to display the name on the web page
function displayNameOnWebPage() {
    document.write(fullName + "\n");
}

// Main Line Function
function lab13globalScope() {
    // Your code goes in here.
    
    // Assign value of the global variable
    fullName = "Bo Broadway";
    
    // Call the display name function
    displayNameOnWebPage();
    displayNameOnWebPage();
    displayNameOnWebPage();
}