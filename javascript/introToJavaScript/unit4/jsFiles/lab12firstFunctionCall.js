/*
    This is the JavaScript code for Part 1 of
    "Lab 1: Calling Functions in JavaScript" 
    File: /unit5/labs/lab01firstFunctionCall.html
*/

/*
    The purpose of this function is to display a message
*/
function displayMessage() {
    document.write("Hi, from a function.\n");
}

function lab12firstFunctionCallPart1() {
    // PART 1: YOUR CODE STARTS AFTER THIS LINE:
    
    // Declare constant, the number of times I want this to print
    var TIMES_TO_LOOP = 4;
    
    // Declare Counter Variable
    var counter;
    
    // Loop for the displayMessage() function
    for (counter = 0; counter < TIMES_TO_LOOP; counter++) {
        displayMessage()
    }
}


/*
    This is the JavaScript code for Part 2 of
    "Lab 1: Calling Functions in JavaScript" 
    File: /unit5/labs/lab01firstFunctionCall.html
*/

/*
    The purpose of this function is to output a full name
*/
function outputFullName() {
    // Declare Variables
    var firstName;
    var middleInitial;
    var lastName;
    
    // Prompt user for first name, middle initial, and last name
    firstName = prompt("What is your first name?");
    middleInitial = prompt("What is your middle initial?");
    lastName = prompt("What is your last name?");
    
    // Output full name
    document.write(firstName + " " + middleInitial + ". " + lastName);
}

function lab12firstFunctionCallPart2() {
    // PART 2: YOUR CODE STARTS AFTER THIS LINE:
    
    // Output first line greeting
    document.write("Hello, ");
    outputFullName();
    document.write(". How are you?\n");
    
    // Output second line statement
    outputFullName();
    document.write(" has left the building.");
}