/*
    Name: Bo Broadway
    Section: Tu/Th 12:30-2:20
    Email: bbroadway@madisoncollege.edu
*/

/*
Modules:
    exercise07Part1()

The Program Planning Lists

    The List of Input Variables:
        numbers (i guess? input by me in the source code?)

    The List of Output Variables:
        outputString

    The Process Checklist:
        Declare Variables and Assign
        Loop through the array and sum all lthe elements into the total variable.
        Build output string
        Close the outputString
        Display the outputSTring

The Program Test Plan

    TEST CASE 1:

        INPUT VALUES: [12, 67, 90, 34, 32, 67, 29, 74, 49, 22]

        EXPECTED RESULT: 
        Array: [12, 67, 90, 34, 32, 67, 29, 74, 49, 22]
        Sum: 476
*/

/*
    This is the JavaScript code for 
    "Lab Exercise 10, Part 1
    File: /unit5/labs/exercise-10.html
*/
function exercise07Part1() {
    // Declare Variables and Assign
    var output = document.getElementById('outputPart1');
    var numbers = [12, 67, 90, 34, 32, 67, 29, 74, 49, 22];
    var total = 0;
    var outputString = "Array: [";
    var finalIndex = numbers.length - 1;
    
    // Loop through the array and sum all lthe elements into the total variable.
    for (var index = 0; index < numbers.length; index++) {
        total += numbers[index]; 
    // Build output string
        // If not the final index, add a comma and space
        if (index < finalIndex) {
            outputString += numbers[index] + ", ";
        } else { // If IS the final index, bracket and break
            outputString += numbers[index] + "]<br />";
        }
    }
    
    // Close the outputString
    outputString += "Sum: " + total;
    
    // Display the outputSTring
    output.innerHTML = outputString;
}

/*
Modules:
    exercise07Part2()

The Program Planning Lists

    The List of Input Variables:
        numbers

    The List of Output Variables:
        outputStringLessOrEqual
        outputStringGreater
        
    The Process Checklist:
        Declare Constant
        Declare Variables and Assign
        Loop through the array and sum all lthe elements into the total variable.
        Complete the outputStrings
        Display the outputStrings

The Program Test Plan

    TEST CASE 1:

        INPUT VALUES: 76, 99, 56, 78, 72, 50, 54, 86, 75, 55, 61, 54, 81, 97, 93,
            74, 51, 86, 67, 83, 80, 61, 97, 55, 75, 54, 92, 74, 52, 76,
            73, 82, 73, 74, 88, 64, 66, 56, 95, 97, 68, 85, 79, 92, 67,
            57, 88, 52, 93, 79, 123, 55, 33, 8, 32, 79, 21, 98, 45, 22,
            87, 34, 23, 68, 62, 12, 58, 32, 89, 78

        EXPECTED RESULT: 
            Array <=: 75: [56,72,50,54,75,55,61,54,74,51,67,61,55,75,54,74,52,73,
                73,74,64,66,56,68,67,57,52,55,33,8,32,21,45,22,34,23,68,62,12,58,32]
            Array > 75: [76,99,78,86,81,97,93,86,83,80,97,92,76,82,88,95,97,85,79,
                92,88,93,79,123,79,98,87,89,78]
*/

/*
    This is the JavaScript code for 
    "Lab Exercise 10, Part 2
    File: /unit5/labs/exercise-10.html
*/
function exercise07Part2() {
    // Declare Constant
    MIDPOINT_BOUNDARY = 75;
    
    // Declare Variables and Assign
    var output = document.getElementById('outputPart2');
    var numbers = [76, 99, 56, 78, 72, 50, 54, 86, 75, 55, 61, 54, 81, 97, 93,
        74, 51, 86, 67, 83, 80, 61, 97, 55, 75, 54, 92, 74, 52, 76,
        73, 82, 73, 74, 88, 64, 66, 56, 95, 97, 68, 85, 79, 92, 67,
        57, 88, 52, 93, 79, 123, 55, 33, 8, 32, 79, 21, 98, 45, 22,
        87, 34, 23, 68, 62, 12, 58, 32, 89, 78];
    var lessThanEqualToBoundary = [];
    var greaterThanBoundary = [];
    var outputStringLessOrEqual = "Array <=: " + MIDPOINT_BOUNDARY + ": [";
    var outputStringGreater = "Array  > " + MIDPOINT_BOUNDARY + ": [";
    
    // Loop through the array and sum all lthe elements into the total variable.
    for (var index = 0; index < numbers.length; index++) {
        if (numbers[index] <= MIDPOINT_BOUNDARY) {
            lessThanEqualToBoundary.push(numbers[index]);
        } else { 
            greaterThanBoundary.push(numbers[index]);
        }
    }

    // Complete the outputStrings
    outputStringLessOrEqual += lessThanEqualToBoundary + "]";
    outputStringGreater += greaterThanBoundary + "]";
    
    // Display the outputString(s)
    output.innerHTML = outputStringLessOrEqual + "<br />"
        + outputStringGreater;
}

