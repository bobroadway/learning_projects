/*
    This is the JavaScript code for 
    "Name Entry" 
    File: /unit5/project/project5Part2.html.
*/
/*
Modules:


The Program Planning Lists

    The List of Input Variables:
        enteredName
    
    The List of Output Variables:
        outputTable
        totalOutput
        output
            (sensing a theme here?)
            
    The Process Checklist:
        Declare Variables
        Add enterd value to the array
        Construct the output table
            Initialize the table
            Build body of the table using a for loop
            Close the table
        Construct the "total" string
        Display output on the HTML page
        Clear form, reset focus
        Do Not Refresh the Page
        
*/
/*

The Test Plan

    Test Case 1:
        Inputs: Bo, Lexi, Dante

        Expected Results:
        
        Total Names: 3
            Entered Name
            ------------
            Bo
            Lexi
            Dante

    Test Case 2:
        Inputs: Leonardo, Michaelangelo, Donatello, Raphael

        Expected Results:
        
        Total Names: 4
            Entered Name
            ------------
            Leonardo
            Mechaelangelo
            Donatello
            Raphael

    Test Case 3:
        Inputs: John

        Expected Results:
        
        Total Names: 1
            Entered Name
            ------------
            John

*/

// Global Variable so the array is not re-initialized every click of submit.
var nameArray = [];

/*
    PURPOSE:    Initialize a one column table on the HTML web page

    PARAMETERS: table - the table to be initiaized
                heading - the table heading

    RETURN:     the table so far
*/
function initializeTable(table, heading) {
    table += "<table><tr><th>" + heading + "</th></tr>";
    return table;
}


/*
    PURPOSE:    Properly format a table row with the output given

    PARAMETERS: table - the table the row is added to
                cell - the value to be added to the cell

    RETURN:     the table with completed row
*/
function outputTableRow(table, cell) {
    table += "<tr><td>" + cell + "</td></tr>";
    return table;
}

/*
    PURPOSE:    Initialize a table on the HTML web page

    PARAMETERS: table - the table to be initiaized

    RETURN:     the table
*/
function finalizeTable(table) {
    table += "</table>";
    return table;
}

/*
    PURPOSE:    Format the totals string
    
    PARAMETERS: output - the output variable that will be used
                total - the number value of the actual total in the array
             
    RETURN:     the complete totals string
*/
function displayTotal(output, total) {
    output += "Total Names: " + total;
    return output;
}


// Main line function
function project5Part2() {
    // Declare Variables
    var output = document.getElementById('outputDiv');
    var nameForm = document.getElementById('nameForm');
    var enteredName = nameForm.nameEntry;
    var nameTable = "";
    var outputTable;
    var totalOutput = "";

    // Add enterd value to the array
    nameArray.push(enteredName.value);

    // Construct the output table
        // Initialize the table
    nameTable = initializeTable(nameTable, "Entered Name");
        // Build body of the tables
    for (var index = 0; index < nameArray.length; index++) {
        nameTable = outputTableRow(nameTable, nameArray[index]);
    }
        // Close the table
    nameTable = finalizeTable(nameTable);
    
    // Construct the "total" string
    totalOutput = displayTotal(totalOutput, nameArray.length);

    // Display output on the HTML page
    output.innerHTML = totalOutput + "<br /><br />" + nameTable;

    // Clear form, reset focus
    enteredName.value = "";
    enteredName.focus();

    // Do Not Refresh the Page
    return false;
}