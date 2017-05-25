/* File: /unit5/project/project5Part3.html */

/*  There are no global variables  */

/*

The Test Plan

    Test Case 1:
        Inputs: 31, 45
    
        Expected Results:
        Number Recs Selected | 0
        Total Number Records | 17
        
        Test Case 2:
        Inputs: 30, 30
    
        Expected Results:
        202                  | Dodads  | 30
        Number Recs Selected | 1
        Total Number Records | 17

    Test Case 3:
        Inputs: 10, 25
    
        Expected Results:
        200                  | Widgets | 25
        201                  | Gadgets | 17
        203                  | Toggles | 12
        204                  | Doilies | 25
        206                  | Fidgets | 20
        207                  | Fiddles | 19
        208                  | Faddles | 10
        Number Recs Selected | 7
        Total Number Records | 17
        
    Test Case 4:
        Inputs: 200, 100
    
        Expected Results:
        ERROR: Max must be greater than or equal to min.
*/

/*
This is the JavaScript code for the Item Inventory starting program 
as it currently exists.  This is a working program, and currently produces 
the output as seen at the bottom of the Project Part 3 web page.

You must do maintenanace to the program to change it so that it then meets the 
specifications of LU5 Project Part 3.
*/


/* ---------- The functions constituting this program are below -----------*/


/*-----------------------------------------------------------------------
  The purpose of this function is to place the heading title ABOVE the table
  that will hold the rows of data from the selected records.
    
  Inputs arriving from the calling function:       - none -
     
  Output being sent back to the calling function:  - none -  
------------------------------------------------------------------------*/

function displayHeadingAboveTable()  {
	
	var outputHeadingTitle;    // will contain ref to heading above results table

	outputHeadingTitle    = document.getElementById('headingAboveTable');
	outputHeadingTitle.innerHTML = "Item Inventory Records with Stock Amounts within Specified Range";
}



/*-----------------------------------------------------------------------
  The purpose of this function is to place the FIRST row into the results
  table.  This first row contains just a descriptive heading for each column.
    
  Inputs arriving from the calling function:
  
    theResultsTable:  contains a reference to the output table on the Web page
     
  Output being sent back to the calling function:  - none -  
------------------------------------------------------------------------*/

function insertColumnHeadingsRow(theResultsTable)  {
	
    theResultsTable.innerHTML =  "<tr><th>Item Number</th><th>Item Description</th><th>Item Stock Amount</th></tr>";
};   // END OF FUNCTION



/*-----------------------------------------------------------------------
  The purpose of this function is to place a selected record's information
  in the form of a table row) into the results table on the Web page.
  
  Inputs arriving from the calling function:
  
    theOutputTable:  contains a reference to the output table on the Web page
    itemNumber:      contains the item number of the current record
    itemDescription: contains the item description of the current record
    itemStockAmount: contains the stock amount of the current record
  
  Output being sent back to the calling function:  - none -  
------------------------------------------------------------------------*/

function placeRecordIntoResultTable(theOutputTable,itemNumber,itemDescription,itemStockAmount)  {
	
    theOutputTable.innerHTML += "<tr><td>" 
	        + itemNumber
            + "</td><td>" + itemDescription
            + "</td><td>" + itemStockAmount
            + "</td></tr>"; 
}    // END OF FUNCTION



/*-----------------------------------------------------------------------
  The purpose of this function is to place the number of selected
  records for this run, and the total number of records in the
  Item Inventory file, into the results table on the Web page.  The
  totals will be the last two rows in the table. 
    
  Inputs arriving from the calling function:
  
    thatOutputTable:         contains a ref to the output table on the Web page
    numberSelectedRecords:   contains the total number of selected records this run
    numberRecordsInFile:     contain the total number of records in the file
   
  Output being sent back to the calling function:  - none -  
------------------------------------------------------------------------*/
function displayRecordTotals(thatOutputTable,numberSelectedRecords,numberRecordsInFile)  {

    thatOutputTable.innerHTML += "<tr><td>&nbsp;Number Recs Selected</td><td>" + numberSelectedRecords + "</td></tr>";
	thatOutputTable.innerHTML += "<tr><td>&nbsp;Total Number Records</td><td>" + numberRecordsInFile + "</td></tr>";
};    // END OF FUNCTION

/*
    PURPOSE:       Provide validation for the number range fields
    PARAMETERS:    min - the minimum value entered
                   max - the maximum value entered
    RETURN:        a boolean based on the range's validity
*/
function validateRange(min, max) {
    // Declare variables
    var valueIsValid = true;
    var errorMessage = document.getElementById("errorMessage");
    var outputTable = document.getElementById("tableForResults");

    if (min.length < 1) {
        errorMessage.innerHTML = "ERROR: You must enter a \"min\" value."; // Display error
        outputTable.innerHTML = ""; // Clear the table if there is one
        valueIsValid = false;      
    } else if (isNaN(Number(min))) {
        errorMessage.innerHTML = "ERROR: Min is not a number."; // Display error
        outputTable.innerHTML = ""; // Clear the table if there is one
        valueIsValid = false;
    } else if (Number(min) < 0) {
        errorMessage.innerHTML = "ERROR: Min can't be less than zero."; // Display error
        outputTable.innerHTML = ""; // Clear the table if there is one
        valueIsValid = false; 
    } else if (max.length < 1) {
        errorMessage.innerHTML = "ERROR: You must enter a \"max\" value."; // Display error
        outputTable.innerHTML = ""; // Clear the table if there is one
        valueIsValid = false;
    } else if (isNaN(Number(max))) {
        errorMessage.innerHTML = "ERROR: Max is not a number."; // Display error
        outputTable.innerHTML = ""; // Clear the table if there is one
        valueIsValid = false;
    } else if (Number(max) < Number(min)) {
        errorMessage.innerHTML = "ERROR: Max must be greater than or equal to min."; // Display error
        outputTable.innerHTML = ""; // Clear the table if there is one
        valueIsValid = false;  
    } else {
        errorMessage.innerHTML = ""; // Clear the error if there is one
    }
    return valueIsValid
}


/*------------------------------------------------------------------------
 This is the MAINLINE function called from the Web page.  The purpose of 
 this function is to coordinate all the function calls needed to produce
 a table of stock items with one hundred or more on hand.
------------------------------------------------------------------------*/

function project5Part3()  {
		
		
    // Define all variables available in this mainline function		
    var currentNumber;
    var currentDescription;
    var currentStockAmount;
	
	var totalNumberRecords;
	var numberSelectedRecords;
	
	var itemRecords;           // will hold ref to the Item Inventory file
    var outputTable;           // will hold ref to the results table on Web page

    // Declare form reference variables
    var rangeForm = document.getElementById("rangeForm");
    var lowerBoundary = rangeForm.lowerBoundary.value;
    var upperBoundary = rangeForm.upperBoundary.value;

    // Validate the range, ends the program if the range is not valid
    // and displays an error message to the div, per the validateRange function
    if(!validateRange(lowerBoundary, upperBoundary)) {
        return false;
    }
    
    // Convert boundaries to numbers
    lowerBoundary = Number(lowerBoundary);
    upperBoundary = Number(upperBoundary);
	
	// Place heading line above the table to reflect what the table contains
	displayHeadingAboveTable();
     
    // Generate a reference to the HTML output table so we can add rows to it
	//    (Note that for this program, the html table element itself is already present
	//    in the html, and does not have to be inserted by this JavaScript program.)
    outputTable = document.getElementById('tableForResults');
	
	// Initialize counter variables in prep for looping
	totalNumberRecords = 0;
	numberSelectedRecords = 0;
     
	// Set up output table heading row as first row of the table
	insertColumnHeadingsRow(outputTable);
		 
    // Open the Inventory Items Records & make them available to be read
    itemRecords = openInventoryItemsRecords();
     
    // Loop thru all Item records and output those with 100 or more on hand
    while (itemRecords.readNextRecord()) {
        
		totalNumberRecords++;
		 
        currentNumber      = itemRecords.getItemNumber();
        currentDescription = itemRecords.getItemDescription();
        currentStockAmount = itemRecords.getItemStockAmount();
        currentStockAmount = Number(currentStockAmount.toFixed(1));        // user said there might be parital units onhand
		
		if (currentStockAmount >= lowerBoundary && currentStockAmount <= upperBoundary) {
			
			numberSelectedRecords++;

            placeRecordIntoResultTable(outputTable,currentNumber,currentDescription,currentStockAmount);   
		}
    }
	
	// Display total lines on Web page
	displayRecordTotals(outputTable,numberSelectedRecords,totalNumberRecords);

	// Do not refresh the page
	return false;
}  // END OF MAINLINE FUNCTION

