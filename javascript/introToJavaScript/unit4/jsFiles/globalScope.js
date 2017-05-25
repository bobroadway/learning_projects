/*
    This is the file /unit5/jsFiles/globalScope.js
*/

/*
    Variables declared outside of any functions
    have global scope. They can be accessed and 
    changed by any function in this entire file.
    
    Here are some variable declarations
*/
var firstName;
var lastName;

/*
    This function will also set the same variables
*/
function addBarneyElement() {
    // This function will also get the <ul> tag
    // from the document.
    var list;
    
    list = document.getElementById('demoList');
    
    // Set the global variables
    firstName = "Barney";
    lastName = "Rubble";
    
    // Output the name to the page by
    // adding a list element to the <ul> tag
    list.innerHTML += "<li>" + firstName + " " + lastName + "</li>";
    
}

/*
    This first function in the call order
    will set the values of the two global 
    variables and display their contents.
    
    (We are also writing the information to
    the page differently. We'll be discussing
    this soon.)
*/
function addFredElement() {
    // Variables declared in here have "local scope"
    // That's the next demo
    
    // Get the list on the page
    var list;
    
    list = document.getElementById('demoList');
    
    // Set the global variables
    firstName = "Fred";
    lastName = "Flintstone";
    
    // Output the name to the page by
    // adding a list element to the <ul> tag
    list.innerHTML = "<li>" + firstName + " " + lastName + "</li>";
    
    // Now call another function
    addBarneyElement();
    
    // Now add another item to the list to see 
    // that firstName and lastName now hold.
    list.innerHTML += "<li>" + firstName + " " + lastName + "</li>";
    
    
}
