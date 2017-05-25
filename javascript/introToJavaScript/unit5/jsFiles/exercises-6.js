/*
    Name: Bo Broadway
    Section: Tu/Th 12:30-2:20
    Email: bbroadway@madisoncollege.edu
*/

/*
Modules:
    validateCell(cell)
    cellValue(cell)
    calculateSum(firstCell, secondCell, thirdCell)
    clearSums()
    resetGridForm()
    generateGrid()

The Program Planning Lists

    The List of Input Variables:
        row1Col1
        row1Col2
        row1Col3
        row2Col1
        row2Col2
        row2Col3
        row3Col1
        row3Col2
        row3Col3
        
    The List of Output Variables:
        row1Sum
        row2Sum
        row3Sum
        col1Sum
        col2Sum
        col3Sum

    The Process Checklist:
        Declare Variables and assign
        Clear sums (if applicable)
        Validation with function
        If all the cells are valid, call the function for sum values
        Display Sum Values
        Don't Refresh The Page :)

The Program Test Plan

    TEST CASE 1:

        INPUT VALUES: 1, 2, 3, 4, 5, 6, 7, 8, 9

        EXPECTED RESULT: 
        1  2  3  6
        4  5  6  15
        7  8  9  24
        12 15 18
    
    TEST CASE 2:

        INPUT VALUES: 1, 1, q, 1, 1, 1, 1, 1, 1

        EXPECTED RESULT: 
        AlertBox "Invalid Entry Present"
        The first offender will be selected to replace
        No calculations will have been done

    TEST CASE 3:

        INPUT VALUES: 1, 1, 1, 2, 2, 2, 3, 3, 3

        EXPECTED RESULT: 
        1  1  1  3
        2  2  2  6
        3  3  3  9
        6  6  6
*/

// Function to validate cells as numbers
function validateCell(cell) { 
    if (isNaN(Number(cell.value))) {
        alert("Invalid Entry Present");
        cell.select();
        return false;
    }
    
    return true;
}

// Function that returns the value of a cell in number format
function cellValue(cell) {
    return Number(cell.value);
}

// Function to calculate the sum of 3 cells
function calculateSum(firstCell, secondCell, thirdCell) {
    return cellValue(firstCell) + cellValue(secondCell) + cellValue(thirdCell);
}

// Function to clear out the sum output fields
function clearSums() {
    // Clear the sum outputs
    row1SumCell.innerHTML = "";
    row2SumCell.innerHTML = "";
    row3SumCell.innerHTML = "";
    col1SumCell.innerHTML = "";
    col2SumCell.innerHTML = "";
    col3SumCell.innerHTML = "";
}

function resetGridForm() {
    // Declare Variables and assign
    var gridForm = document.getElementById("gridFormId");
    
    // Sum Cells Declared and Assigned
    var row1SumCell = document.getElementById("row1SumCell");
    var row2SumCell = document.getElementById("row2SumCell");
    var row3SumCell = document.getElementById("row3SumCell");
    var col1SumCell = document.getElementById("col1SumCell");
    var col2SumCell = document.getElementById("col2SumCell");
    var col3SumCell = document.getElementById("col3SumCell");
    
    // Clear the sum outputs
    clearSums()

    // Clear out the fields
    gridForm.row1col1.value = "";
    gridForm.row1col2.value = "";
    gridForm.row1col3.value = "";
    
    gridForm.row2col1.value = "";
    gridForm.row2col2.value = "";
    gridForm.row2col3.value = "";
    
    gridForm.row3col1.value = "";
    gridForm.row3col2.value = "";
    gridForm.row3col3.value = "";
    
    // Don't refresh the page
    return false;
}

// Main line function
function generateGrid() {
    
    // Declare Variables and assign
    var gridForm = document.getElementById("gridFormId");
    
        // Row 1 declaration and assignments
    var row1Col1 = gridForm.row1col1;
    var row1Col2 = gridForm.row1col2;
    var row1Col3 = gridForm.row1col3;
    
        // Row 2 declaration and assignments
    var row2Col1 = gridForm.row2col1;
    var row2Col2 = gridForm.row2col2;
    var row2Col3 = gridForm.row2col3;
    
        // Row 3 declaration and assignments
    var row3Col1 = gridForm.row3col1;
    var row3Col2 = gridForm.row3col2;
    var row3Col3 = gridForm.row3col3;
    
        // Sum Cells Declared and Assigned
    var row1SumCell = document.getElementById("row1SumCell");
    var row2SumCell = document.getElementById("row2SumCell");
    var row3SumCell = document.getElementById("row3SumCell");
    var col1SumCell = document.getElementById("col1SumCell");
    var col2SumCell = document.getElementById("col2SumCell");
    var col3SumCell = document.getElementById("col3SumCell");
    
        // Sum declarations;
    var row1Sum;
    var row2Sum;
    var row3Sum;
    var col1Sum;
    var col2Sum;
    var col3Sum;
    
    // Flag indicating if all cells are valid
    var allCellsValid = true;
    
    // Clear sums
    clearSums();
    
    // Validation with function
    allCellsValid = allCellsValid && validateCell(row1Col1);
    allCellsValid = allCellsValid && validateCell(row1Col2);
    allCellsValid = allCellsValid && validateCell(row1Col3);
    allCellsValid = allCellsValid && validateCell(row2Col1);
    allCellsValid = allCellsValid && validateCell(row2Col2);
    allCellsValid = allCellsValid && validateCell(row2Col3);
    allCellsValid = allCellsValid && validateCell(row3Col1);
    allCellsValid = allCellsValid && validateCell(row3Col2);
    allCellsValid = allCellsValid && validateCell(row3Col3);
    
    // If all the cells are valid, call the function for sum values
    if (allCellsValid) {
        row1Sum = calculateSum(row1Col1, row1Col2, row1Col3);
        row2Sum = calculateSum(row2Col1, row2Col2, row2Col3);
        row3Sum = calculateSum(row3Col1, row3Col2, row3Col3);
        
        col1Sum = calculateSum(row1Col1, row2Col1, row3Col1);
        col2Sum = calculateSum(row1Col2, row2Col2, row3Col2);
        col3Sum = calculateSum(row1Col3, row2Col3, row3Col3);
    
        // Display Sum Values
        row1SumCell.innerHTML = row1Sum;
        row2SumCell.innerHTML = row2Sum;
        row3SumCell.innerHTML = row3Sum;
        col1SumCell.innerHTML = col1Sum;
        col2SumCell.innerHTML = col2Sum;
        col3SumCell.innerHTML = col3Sum;
    }
    
    // Don't Refresh The Page
    return false;
}


/*
Modules:
    outputTableCell(cellItem)
    outputTableRow(firstName, lastName, address, city, state, zipCode)
    generateTableRow()

The Program Planning Lists

    The List of Input Variables:
        firstName
        lastName
        address
        city
        state
        zipCode
    
    The List of Output Variables:
        outputTable

    The Process Checklist:
        Get the address form
        Declare and assign field variables
        Output the table row, using the variables
        Clear the fields  
        Insertion point to First Name field
        Do not refresh the page
    
The Program Test Plan

    TEST CASE 1:

        INPUT VALUES: Bo, Broadway, 123 Fake St., Madison, WI, 53719

        EXPECTED RESULT: 
        Bo    Broadway    123 Fake St.    Madison WI  53719
        
    TEST CASE 2:

        INPUT VALUES: Joe, Smith, 456 Superfake Ave., Faketown, VA, 12345

        EXPECTED RESULT: 
        Joe   Smith   456 Superfake Ave.  Faketown    VA  12345

    TEST CASE 3: 

        INPUT VALUES: 1, 1, 1, 1, 1, 1

        EXPECTED RESULT: 
        1   1   1   1   1   1 
*/



/*
    This is the JavaScript code for 
    "Lab Exercise 9, Part 2
    File: /unit5/labs/exercises-6.html
*/

// Function to add a single table cell
function outputTableCell(cellItem) {
    return "<td>" + cellItem + "</td>";
}

// Function to add an entire table row
function outputTableRow(firstName, lastName, address, city, state, zipCode) {
    var outputTable = document.getElementById("outputTable");
    
    outputTable.innerHTML += "<tr>" + outputTableCell(firstName) + outputTableCell(lastName)
        + outputTableCell(address) + outputTableCell(city)
        + outputTableCell(state) + outputTableCell(zipCode) + "</tr>";
}

// Main line function
function generateTableRow() {
    // PART 2: YOUR CODE STARTS AFTER THIS LINE
    
    // Get the address form
    var addressForm = document.getElementById("addressForm");
    
    // Declare and assign field variables
    var firstName = addressForm.firstName.value;
    var lastName = addressForm.lastName.value;
    var address = addressForm.address.value;
    var city = addressForm.city.value;
    var state = addressForm.state.value;
    var zipCode = addressForm.zipCode.value;
    
    // Output the table row, using the variables
    outputTableRow(firstName, lastName, address, city, state, zipCode);
    
    // Clear the fields
    addressForm.firstName.value = "";
    addressForm.lastName.value = "";
    addressForm.address.value = "";
    addressForm.city.value = "";
    addressForm.state.value = "";
    addressForm.zipCode.value = "";
    
    // Insertion point to First Name field
    addressForm.firstName.focus();
    
    // Do not refresh the page
    return false;
}

