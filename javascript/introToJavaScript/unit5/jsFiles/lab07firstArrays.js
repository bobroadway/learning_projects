/*
    This is the JavaScript code for 
    "Lab 7: First Arrays" 
    File: /unit5/labs/lab07firstArrays.html
*/
var enteredStringArray = [];

function lab07firstArrays() {
    // Your code goes in here.
	
	// Below is the initial program code for this function.
	// It should be placing the literal string on the 3rd
	// statement onto the web page, into the <div> element
	// already present on the web page.
	
	// However, when you test the execution of this program
	// by clicking on the submit button on the form you
	// set up on the web page, something odd happens.
	// This must be fixed before you can accomplish Lab 07.
	
	// Declare variables and assign
    var output = document.getElementById('outputList');
    var enteredString = document.getElementById('enteredString');
    var fullList = "";
    
    // Add element to string array
    enteredStringArray.push(enteredString.value);
    
    // Display current string index
    for (var i = 0; i < enteredStringArray.length; i++) {
        fullList += "<li>" + enteredStringArray[i] + "</li>";
    }
    
    output.innerHTML = fullList;
    
    // Clear the field and reset focus to continue typing
    enteredString.value = "";
    enteredString.focus();
            
    // Don't refresh the page
    return false;

}