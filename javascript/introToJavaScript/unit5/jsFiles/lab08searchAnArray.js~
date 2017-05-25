/*
    This is the JavaScript code for 
    "Lab 8: Searching an Array" 
    File: /unit5/labs/lab08searchAnArray.html
*/
function lab08searchAnArray() {
    // Declare Constants
    var SEARCH_LENGTH = 13;
    
    // Declare Variables and assign initial values
    var outputString
    var output = document.getElementById('outputDiv');
    var valueFound = false;
    var theCopiedArray = ["Believe", "it", "or", "not", "", "the", "very", "first",
        "version", "of", "Javascript", "shipped", "without", "Arrays",
        "Subsequent", "versions", "made", "up", "for", "the",
        "oversight", "and", "modern", "Javascript", "Arrays", "are",
        "powerful", "structures", "indeed", "", "even", "emulating",
        "many", "common", "data", "structures", "such", "as",
        "stacks", "and", "queues", "This", "reference", "will",
        "cover", "the", "core", "functionality", "of", "Arrays",
        "as", "well", "as", "introduce", "a", "few", "useful",
        "extensions"];
   
    // Loop through the array and check the length of each string as compared to
    // the given SEARCH_LENGTH. If they are equal set valueFound to true and break out
    for (var index = 0; index < theCopiedArray.length; index++) {
        if (SEARCH_LENGTH === theCopiedArray[index].length) {
            valueFound = true;
            break;
        }
    }
    
    // If valueFound has been set to true after finding a match above,
    // whichever the case may be: give the proper output statement
    if (valueFound) {
        outputString = "The " + SEARCH_LENGTH + " character word in the array is: \""
        + theCopiedArray[index] + "\"<br />It was found at index: " + index;
    } else { 
        outputString = "There is no word that is " + SEARCH_LENGTH 
        + " characters long.";
    }
   
    // Output the outputString message to the web page.
    output.innerHTML = outputString;
}