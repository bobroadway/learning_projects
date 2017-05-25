/*
    This is the JavaScript code for 
    the function lab11moreLoopsAndLogicPart1() 
    in "Lab 11: More Loops and Logic" 
    File: /unit4/labs/lab11moreLoopsAndLogic.html
*/
function lab11moreLoopsAndLogicPart1() {
    // Your code goes in here.
    
    // Declare Constants
    var LOOP_MAXIMUM = 10;
    
    // Declare Variables
    var enteredNumber;
    var total;
    var counter;
    
    // Assignments / Initialize
    total = 0;
    counter = 0;
    
    // Prompt Loop
    while (counter < LOOP_MAXIMUM) {
        enteredNumber = Number(prompt("Enter a number:"));
        counter++;
        
        // Check if the entry "isNAN', error message if so, otherwise add to the total
        if (isNaN(enteredNumber)) {
            alert("That is not a valid entry.");
            break;
        } else {
            total += enteredNumber;
        }
    }
    
    // Display Final Results
    document.write("The number of loops: " + counter
        + "\nThe total: " + total); 
}

/*
    This is the JavaScript code for 
    the function lab11moreLoopsAndLogicPart2() 
    in "Lab 11: More Loops and Logic" 
    File: /unit4/labs/lab11moreLoopsAndLogic.html
*/
function lab11moreLoopsAndLogicPart2() {
    // Your code goes in here.
    
    // Declare Constants
    var WAGE_CATEGORY_ONE = 15;
    var WAGE_CATEGORY_TWO = 20;
    var WAGE_CATEGORY_THREE = 25;
    var WAGE_CATEGORY_FOUR = 30;
    
    // Declare Variables and Initialize
    var totalFifteen = 0;
    var totalTwenty = 0;
    var totalTwentyFive = 0;
    var totalThirty = 0; 
    var records;
    
    // Access Records
    records = openEmployeePayrollRecords();
    
    // Read each record, incrementing each identified wage count
    while (records.readNextRecord()) {
        if (records.getEmployeeHourlyWage() === WAGE_CATEGORY_ONE) {
            totalFifteen++;
        } else if (records.getEmployeeHourlyWage() === WAGE_CATEGORY_TWO) {
            totalTwenty++;
        } else if (records.getEmployeeHourlyWage() === WAGE_CATEGORY_THREE) {
            totalTwentyFive++;
        } else {
            totalThirty++;
        }
    }
    
    // Display Results
    document.write("Hourly Wage \tCount\n" + WAGE_CATEGORY_ONE + "\t\t" + totalFifteen
        + "\n" + WAGE_CATEGORY_TWO + "\t\t" + totalTwenty
        + "\n" + WAGE_CATEGORY_THREE + "\t\t" + totalTwentyFive
        + "\n" + WAGE_CATEGORY_FOUR + "\t\t" + totalThirty);
}
