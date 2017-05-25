/*
    This is the JavaScript code for 
    "Lab Exercise 10, Part 1
    File: /unit4/labs/exercise-10.html
*/
function exercise10Part1() {
    // PART 1: YOUR CODE STARTS AFTER THIS LINE
        
    // Declare Constants
    var LOOP_TOTAL = 1000;
    
    // Declare Variables and Initialize
    var totalEven = 0;
    var totalOdd = 0;
    var counter;
    var counterModulo;
    
    // Loop one thousand times, incrementing even total when even
    // and odd total when odd
    for (counter = 0; counter < LOOP_TOTAL; counter++) {
        counterModulo = counter % 2;
        if (counterModulo === 0) {
            totalEven += counter;
        } else {
            totalOdd += counter;
        }
    }
        
    // Display Results
    document.write("Even Total: " + totalEven
        + "\nOdd Total: " + totalOdd);
}


/*
    This is the JavaScript code for 
    "Lab Exercise 10, Part 2
    File: /unit4/labs/exercise-10.html
*/
function exercise10Part2() {
    // PART 2: YOUR CODE STARTS AFTER THIS LINE
    
    // Declare Constants
    WEEKLY_MINIMUM = 1000;
       
    // Declare Variables
    var records;
    var weeklyPay;
    
    // Access Employee Records
    records = openEmployeePayrollRecords();
    
    // Read each record, printing the necessary fields and the calulation field
    while (records.readNextRecord()) {
        weeklyPay = records.getEmployeeHourlyWage() * records.getEmployeeHoursWorked();
        if (weeklyPay > WEEKLY_MINIMUM) {
            document.write(records.getEmployeeNumber() + "\t" + records.getEmployeeName()
                + "\t" + records.getEmployeeHourlyWage() + "\t" + records.getEmployeeHoursWorked()
                + "\t" + weeklyPay + "\n");
        }
    }
}