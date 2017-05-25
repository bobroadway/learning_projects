/*
    This is file /unit5/usingForms.js 
    It contains the JavaScript code for
    
    "Beginning to Use Forms with JavaScript" File: /unit5/usingForms.html
*/
function greetUser() {
    // Declare Variables
    var output;
    var form;
    var firstName;
    var lastName;
    var age;
    
    // Get the output and form objects
    output = document.getElementById('greetOutputId');
    form   = document.getElementById('greetingFormId');
    
    // Get the values from the form fields
    firstName = form.firstName.value;
    lastName  = form.lastName.value;
    age       = form.age.value;
    
    // Output the results
    output.innerHTML = "<h4>" + firstName + " " 
            + lastName  + " is " + age + "!</h4>";
    
    form.firstName.focus();
    form.firstName.select();
    return false;
}

function resetGreetingForm() {
    var output;
    var form;
    
    // Get the output and form objects
    output = document.getElementById('greetOutputId');
    form   = document.getElementById('greetingFormId');
    
    // Clear out the output
    output.innerHTML = "";
    
    // Clear out the fields
    form.firstName.value = "";
    form.lastName.value = "";
    form.age.value = "";
    
    form.firstName.focus();
    return false;
    
}