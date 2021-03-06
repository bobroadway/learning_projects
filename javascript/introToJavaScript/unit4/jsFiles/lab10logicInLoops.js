/*
    This is the JavaScript code for 
    the function lab10logicInLoopsPart1() 
    in "Lab 10: Logic in Loops" 
    File: /unit4/labs/lab10logicInLoops.html
*/
function lab10logicInLoopsPart1() {
    // Your code goes in here.
    
    // Declare Variables
    var enteredNumber;
    var counter;
    var total;
    
    // Initialize / Assign
    counter = 0;
    total = 0;
    
    // Run the prompt loop, display results
    while (counter < 5) {
        enteredNumber = Number(prompt("Enter a number:"));
        if (isNaN(enteredNumber)) {
            alert("That is not a valid entry.");
            break;
        } else if (enteredNumber > 0) {
            total += enteredNumber;
        }
        document.write("Entered number was: " + enteredNumber + "\n");
        counter++;
    }
    
    // Display final results
    if (counter === 5) {
        document.write("\nTotal: " + total);
    } else {
        document.write("\nResults: User does not know how to follow directions.");
    }
}

/*
    This is the JavaScript code for 
    the function lab10logicInLoopsPart2() 
    in "Lab 10: Logic in Loops" 
    File: /unit4/labs/lab10logicInLoops.html
*/
function lab10logicInLoopsPart2() {
    // Your code goes in here.
        
    // Declare Variables
    var totalWage;
    var averageWage;
    var minimumWage;
    var maximumWage;
    var employeeCounter;
    
    // Initialize / Assigments
    totalWage = 0;
    employeeCounter = 0;
    
    // Access Records
    records = openEmployeePayrollRecords();
    
    // Loop Accessing Records
    while (records.readNextRecord()) {
        
        // Check if the hourly wage is greater than the current value of maximumWage
        // if so, reassign
        // else, Check if the hourly wage is less than the current value of minimumWage
        // if so, reassign
        if (employeeCounter === 0) {
            minimumWage = maximumWage = records.getEmployeeHourlyWage();
        } else if (records.getEmployeeHourlyWage() > maximumWage) {
            maximumWage = records.getEmployeeHourlyWage();
        } else if (records.getEmployeeHourlyWage() < minimumWage) {
            minimumWage = records.getEmployeeHourlyWage();
        }
        
        // Add current wage record into the total, and increment employeeCounter
        totalWage += records.getEmployeeHourlyWage();
        employeeCounter++;
    }
    
    // Calculate Average
    averageWage = totalWage / employeeCounter;
    
    // Display Output
    document.write("Average Hourly Wage: " + averageWage.toFixed(2) 
        + "\n\Maximum Hourly Wage: " + maximumWage.toFixed(2) 
        + "\nMinimum Hourly Wage: " + minimumWage.toFixed(2));
}
