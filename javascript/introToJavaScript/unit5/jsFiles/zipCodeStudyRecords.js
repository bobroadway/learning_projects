
/*
    This is an example of using the
    Zip Code Study Record Set
*/
function zipCodeStudyRecords() {
    
    // Variable Declarations
    var firstName;
    var lastName;
    var gender;
    var zipCode;
    var outputTable;
    var records;
    var count = 0;
    var allDisplayRows = "";

    // Get the HTML output table so we can add rows
    outputTable = document.getElementById('outputTable');

    // Open the Zip Code Study Records and make them 
    // available to the script
    records = openZipCodeStudyRecordSet();

    while (records.readNextRecord()) {
        // This IF only in place for this particular example program
		// Remove the IF to work with the entire file
        if (count >= 25) {
            break;
        }
        firstName   = records.getSampleFirstName();
        lastName    = records.getSampleLastName();
        gender      = records.getSampleGender();
        zipCode     = records.getSampleZipCode();

        allDisplayRows += "<tr><td>" + firstName + "</td>" 
                + "<td>" + lastName + "</td><td>" + gender 
                + "</td><td>" + zipCode + "</td></tr>";

        count++;
    }
    
    // Output the entire data table
    outputTable.innerHTML = allDisplayRows;
}
