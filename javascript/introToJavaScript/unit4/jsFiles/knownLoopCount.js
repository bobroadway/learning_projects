/*
    This is file /unit4/knownLoopCount.js 
    It contains the JavaScript code for
    
    "Looping with a known loop count" 
    File: /unit4/knownLoopCount.html
*/
function knownLoopCount() {
    // Your code goes in here.
    
    document.write("The JavaScript file for this page is: "
            + "\"/unit4/jsFiles/knownLoopCount.js\"");
}

/*
    This function is in file /unit4/knownLoopCount.js
    It loops five times with a while loop
*/
function whileFiveTimes() {
    
    // Declare Constants
    var ZERO = 0;
    var LOOP_LIMIT = 5;
    
    // Declare Variables
    var counter = ZERO;
    var name;
    
    while (counter < LOOP_LIMIT) {
        document.write("This is loop number: " + counter + "<br />");
        counter++;
    }
}

/*
    This function is in file /unit4/knownLoopCount.js
    It loops five times with a for loop
*/
function forFiveTimes() {
    
    // Declare Constants
    var ZERO = 0;
    var LOOP_LIMIT = 5;
    
    // Declare Variables
    var counter;
    
    for (counter = ZERO; counter < LOOP_LIMIT; counter++) {
        document.write("This is loop number: " + counter + "<br />");
    }
}
