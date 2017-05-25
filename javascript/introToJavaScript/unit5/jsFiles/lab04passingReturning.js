/*
Modules:


The Program Planning Lists

    The List of Input Variables:

    The List of Output Variables:

    The Process Checklist:


The Program Test Plan

    TEST CASE 1:

        INPUT VALUES:

        EXPECTED RESULT:
    
    TEST CASE 2:

        INPUT VALUES:

        EXPECTED RESULT:

*/

/*
    This is the JavaScript code for 
    "Lab 4: Passing Parameters And Returning Data" 
    File: /unit5/labs/lab04passingReturning.html
*/

// Function to format a full name
function formatFullName(firstName, middleInitial, lastName) {
    return firstName + " " + middleInitial + ". " + lastName;
}

function lab04passingReturning() {
    // Your code goes in here.
    // Declare variables, initialize if applicable
    var output = document.getElementById('outputDiv');
    var firstName;
    var middleInitial;
    var lastName;
    
    // Prompt the user for name components
    firstName = prompt("What is your first name?");
    middleInitial = prompt("What is your middle initial?");
    lastName = prompt("What is your last name?");

    // Display the output, using the function as the formatted full name
    // Should I have placed it in a variable first? Meh...
    output.innerHTML = "Hello, " 
        + formatFullName(firstName, middleInitial, lastName)
        + ". How are you?";
}