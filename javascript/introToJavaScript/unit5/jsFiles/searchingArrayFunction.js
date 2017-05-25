

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
function findZipCodeExample() {
    // Constants
    var NOT_FOUND = -1;

    // Declare Variables
    var records;
    var uniqueZipCodes = [];
    var zipCodeCounts = [];
    var currentZipCode;
    var arrayIndex;

    // Open zip code records
    records = openZipCodeStudyRecordSet();

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
}
