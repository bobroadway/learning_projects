/*
    This is the JavaScript code for 
    "Find Unique Zip Codes" 
    File: /unit5/project/project5Part1.html.
*/

/*

The Test Plan

    Test Case 1:
        Inputs: 75213, 91343, 10024

        Expected Results: 51, 41, 48
        

    Test Case 2:
        Inputs: 75215, 10021, 55414

        Expected Results: 46, 52, 50


    Test Case 3:
        Inputs: 55411, 75214, 10023

        Expected Results: 36, 46, 65

*/

/*
    PURPOSE:    Function to initialize a table in the HTML page
    
    PARAMETERS: table - table to be initialized, declared in mainline
                at this point as an empty string ("")
                
    RETURN:     initialized table
*/
function initializeTable(table) {
    table += "<table>";
    return table;
}

/*
    PURPOSE:    Properly format a table row with the output given

    PARAMETERS: table - the table the row is being added to
                cellOne - output to be placed in the first cell
                cellTwo - output to be placed in the second cell

    RETURN:     completed row
*/
function outputTableRow(table, cellOne, cellTwo) {
    table += "<tr><td>" + cellOne + "</td><td>" + cellTwo + "</td></tr>";
    return table;
}

/*
    PURPOSE:    Function to finalize a table in the HTML page
    
    PARAMETERS: table - table to be finalized, declared in mainline
                at this point as an empty string ("")
                
    RETURN:     finalized table
*/
function finalizeTable(table) {
    table += "</table>";
    return table;
}

/* 
    PURPOSE:    Function to search an array, return its index or -1 if not found
    
    PARAMATERS: searchValue - value to search for
                searchArray - array to search
               
    RETURN:     index - 0 - (array.length - 1) IF found,
                       -1 IF NOT FOUND
*/
function indexOfEntryInArray(searchValue, searchArray) {
    // Constants
    var INDEX_NOT_FOUND = -1;

    // Declare Variables
    var index;
    var valueFound = false;

    // Loop through the array until the value is found or the end is reached
    for (index = 0; index < searchArray.length; index++) {
        // Check if entry equals current element
        if (searchValue === searchArray[index]) {
            valueFound = true;
            break;
        }
    }

    // Check if entry is not found
    if (!valueFound) {
        index = INDEX_NOT_FOUND;
    }

    return index;
}

// Mainline
function project5Part1() {

    // Constants
    var NOT_FOUND = -1;

    // Declare Variables and assign where applicable
    var output = document.getElementById("outputDiv");     // Assign to outputDiv
    var outputTable = "";
    var records = openZipCodeStudyRecordSet();             // Open the record set
    var uniqueZipCodes = [];
    var zipCodeCounts = [];
    var currentZipCode;
    var arrayIndex;
    var index;

    // FOR EACH zip code in te record set
    while (records.readNextRecord()) {
        currentZipCode = records.getSampleZipCode();

        arrayIndex = indexOfEntryInArray(currentZipCode, uniqueZipCodes);
        if (arrayIndex === NOT_FOUND) {
            uniqueZipCodes.push(currentZipCode);
            zipCodeCounts.push(1);
        } else { // Zip Code Found
            zipCodeCounts[arrayIndex]++;
        }
    }

    // Begin the output table
    outputTable = initializeTable(outputTable);
    outputTable = outputTableRow(outputTable, "Zip Code", "Count");

    // Step Through Zip Codes for Output
    for (index = 0; index < uniqueZipCodes.length; index++) {
        outputTable = outputTableRow(outputTable, uniqueZipCodes[index], zipCodeCounts[index]);
    }

    // Close the output table
    outputTable = finalizeTable(outputTable);

    // Display the full table
    output.innerHTML = outputTable;
}