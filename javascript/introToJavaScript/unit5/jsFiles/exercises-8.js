/*
    Name: Bo Broadway
    Section: Tu/Th 12:30-2:20
    Email: bbroadway@madisoncollege.edu
*/

/*
Modules:
exercise8Part1()

The Program Planning Lists

    The List of Input Variables:
        searchField

    The List of Output Variables:
        foundOutput
        notFoundOutput

    The Process Checklist:
        Declare Globals
        Declare Variables and assign
        Loop through the array until the "value" is "Found"
        Assign to proper array depending on if found or not
        Build foundArray List Output
        Build notFoundArray List Output
        Set Outputs
        Display the outputString
        Clear the value and set focus to allow continuous searches
        Do not refresh the page
        
The Program Test Plan

    TEST CASE 1:

        INPUT VALUES: JavaScript

        EXPECTED RESULT: 
        Added to the "Found" list
    
    TEST CASE 2:

        INPUT VALUES: by

        EXPECTED RESULT: 
        Added to the "Found" list

    TEST CASE 3:

        INPUT VALUES: Java

        EXPECTED RESULT: 
        Added to the "Not Found" list
        
        (worth mentioning the lists continue to grow as you continue searching
*/

/*
    This is the JavaScript code for 
    "Lab Exercise 11, Part 1
    File: /unit5/labs/exercises-8.html
*/

// Declare Globals
var foundArray = [];
var notFoundArray = [];

function exercise8Part1() {
    // Declare Variables and assign
    var output = document.getElementById('outputPart1');
    var searchData = ["JavaScript", "was", "developed", "by", "Brendan", "Eich", "at", "Netscape", "as",
        "the", "in-page", "scripting", "language", "for", "Navigator", "2", "It", "is", "a",
        "remarkably", "expressive", "dynamic", "programming", "language", "Because",
        "of", "its", "linkage", "to", "web", "browsers", "it", "instantly", "became",
        "massively", "popular", "It", "never", "got", "a", "trial", "period", "in", "which",
        "it", "could", "be", "corrected", "and", "polished", "based", "on", "actual", "use",
        "The", "language", "is", "powerful", "and", "flawed"];
    var searchForm = document.getElementById('searchForm');
    var searchField = searchForm.searchField;
    var valueFound = false;
    var foundOutput;
    var foundList = "";
    var notFoundOutput;
    var notFoundList = "";
    
    // Loop through the array until the "value" is "Found".
    for (var index = 0; index < searchData.length; index++) {
        if (searchField.value === searchData[index]) {
            valueFound = true;
        }
    }
    
    // Assign to proper array depending on if found or not
    if (valueFound) {
        foundArray.push(searchField.value);
    } else {
        notFoundArray.push(searchField.value);
    }

    // Build foundArray List Output
    for (var foundIndex = 0; foundIndex < foundArray.length; foundIndex++) {
        foundList += "<li>" + foundArray[foundIndex] + "</li>";
    }
    
    // Build notFoundArray List Output
    for (var notFoundIndex = 0; notFoundIndex < notFoundArray.length; notFoundIndex++) {
        notFoundList += "<li>" + notFoundArray[notFoundIndex] + "</li>";
    }
    
    // Set Outputs
    foundOutput = "<h4>Found Words</h4><ol>"
        + foundList + "</ol>";
    notFoundOutput = "<h4>Not Found Words</h4><ol>"
        + notFoundList + "</ol>";
    
    // Display the outputString
    output.innerHTML = foundOutput + "<br />" + notFoundOutput;
    
    // Clear the value and set focus to allow continuous searches
    searchForm.searchField.value = "";
    searchForm.searchField.focus();
                           
    // Do not refresh the page
    return false;
}


/*
Modules:
    compareTwoValues(firstValue, secondValue)
    exercise11Part2()

The Program Planning Lists

    The List of Input Variables:
        firstArray
        secondArray

    The List of Output Variables:
        outputString

    The Process Checklist:
        Declare global variables
        Declare variables and initialize where applicable
        Loop through the first array and each step...
        ...Loop through the second array entirely comparing each value to the current
        Add any comparison values that return true to the "matchesArray"
        Loop through the matches array to build the formatted output of the array
        Output the list of matches

The Program Test Plan

    TEST CASE 1:

        INPUT VALUES: (The two copied arrays, not gonna copy them here because...
        well... you know)

        EXPECTED RESULT: 
        Numbers in both: 416, 892, 241, 241, 75, 196, 241, 241, 341, 731, 927, 
    
    TEST CASE 2:

        INPUT VALUES: [1, 2, 3, 4] and [2, 4, 6, 8] 

        EXPECTED RESULT: 
        Numbers in both: 2, 4, 

*/

/*
    This is the JavaScript code for 
    "Lab Exercise 11, Part 2
    File: /unit5/labs/exercises-8.html
*/
// Declare Global Variables
var firstArray = [170, 997, 678, 416, 260, 7, 658, 239, 63, 802,
    419, 442, 879, 154, 281, 759, 439, 855, 338, 944,
    656, 635, 846, 818, 985, 625, 615, 179, 892, 241,
    8, 75, 196, 52, 318, 132, 466, 824, 923, 225, 22,
    213, 469, 674, 354, 577, 223, 69, 423, 64, 241,
    766, 948, 343, 369, 60, 762, 322, 148, 401, 19,
    266, 993, 313, 139, 740, 388, 341, 802, 224, 270,
    261, 114, 508, 840, 731, 336, 160, 718, 195, 201,
    927, 501, 60, 494, 692, 127, 512, 705, 840, 588,
    408, 703, 98, 823, 44, 346, 288, 482, 101];
var secondArray = [509, 357, 679, 451, 372, 245, 747, 813, 75, 746,
    341, 752, 796, 485, 390, 237, 995, 951, 685, 356,
    891, 483, 906, 896, 196, 358, 27, 394, 104, 560,
    987, 173, 779, 750, 752, 715, 895, 955, 241, 267,
    504, 748, 241, 832, 105, 825, 590, 890, 232, 918,
    677, 814, 383, 368, 907, 264, 779, 821, 378, 208,
    566, 120, 416, 782, 207, 274, 530, 547, 927, 161,
    214, 252, 35, 356, 164, 731, 173, 804, 173, 741,
    942, 892, 680, 926, 850, 399, 403, 789, 178, 699,
    566, 841, 136, 749, 546, 746, 237, 661, 182, 350];

// This function compares two values and returns true if the comparison succeeds
function compareTwoValues(firstValue, secondValue) {
    if (firstValue === secondValue) {
        return true;
    }
    return false; 
}

// Main line function    
function exercise11Part2() {
    // PART 2: YOUR CODE STARTS AFTER THIS LINE
    // Declare variables and initialize where applicable
    var output = document.getElementById('outputPart2');
    var matchesArray = [];
    var outputString = "Numbers in both: ";

    // Loop through the first array and each step....
    for (var firstIndex = 0; firstIndex < firstArray.length; firstIndex++) {
        // ...Loop through the second array entirely comparing each value to the current
        for (var secondIndex = 0; secondIndex < secondArray.length; secondIndex++) {
            // Add any comparison values that return true to the "matchesArray"
            if (compareTwoValues(firstArray[firstIndex], secondArray[secondIndex])) {
                matchesArray.push(secondArray[secondIndex]);
            }
        }
    }
    
    // Loop through the matches array to build the formatted output of the array
    for (var matchesIndex = 0; matchesIndex < matchesArray.length; matchesIndex++) {
        outputString += matchesArray[matchesIndex] + ", ";
    }
    
    // Output the list of matches
    output.innerHTML = outputString; 
}
