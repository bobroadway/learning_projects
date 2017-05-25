/*
    This is the JavaScript code for 
    "Employee Payroll" 
    File: /unit4/project/project4Part2.html
*/
function project4Part2() {
    // Your code goes in here.
    
    // Declare Constants
    var WITHHOLDING_PERCENT = .15;  // Percent is in decimal format
    var OVERTIME_BOUNDARY = 35;     // Overtime is any hours over 35
    var OVERTIME_PAY = 1.5;         // Overtime is 'time and a half'
    
    // Declare Variables, and initialize
    var employeeRecords = openEmployeePayrollRecords();
    var employeeNumber;
    var employeeName;
    var employeeWage;
    var employeeHours;
    var employeeOvertimeHours;
    var employeeOvertimeWage;
    var employeeGrossPay;
    var employeeWithholding;
    var employeeNetPay;
    var totalGrossPay = 0;
    var totalNetPay = 0;
    var employeeCount = 0;
    var averageNetPay;
    
    // Table Heading
    document.write("Employee\tEmployee\tGross\t\tWithholding\tNet\n"
        + "Number\t\tName\t\tPay\t\tAmount\t\tPay\n\n");
    
    // Access the records in a loop, and print the rows with each loop
    while (employeeRecords.readNextRecord()) {
        employeeNumber = employeeRecords.getEmployeeNumber();
        employeeName = employeeRecords.getEmployeeName();
        employeeWage = employeeRecords.getEmployeeHourlyWage();
        employeeHours = employeeRecords.getEmployeeHoursWorked();
        
        // Calculate Gross Pay
        if (employeeHours > OVERTIME_BOUNDARY) {
            // Find overtime hours
            employeeOvertimeHours = employeeHours - OVERTIME_BOUNDARY;
            // Find overtime wage
            employeeOvertimeWage = employeeWage * OVERTIME_PAY;
            // Find Gross Pay by adding the full time hours and wage 
            // with the overtime hours and wage
            employeeGrossPay = (OVERTIME_BOUNDARY * employeeWage) 
                + (employeeOvertimeHours * employeeOvertimeWage);    
        } else {
            employeeGrossPay = (employeeWage * employeeHours);
        }
        
        // Calculate Amount Withheld
        employeeWithholding = employeeGrossPay * WITHHOLDING_PERCENT;
        
        // Calculate Net Pay
        employeeNetPay = employeeGrossPay - employeeWithholding;
        
        // Add on to total gross and total net amounts
        totalGrossPay += employeeGrossPay;
        totalNetPay += employeeNetPay;
        
        employeeCount++;
        
        // Print line of employee information
        document.write(employeeNumber + "\t\t" 
            + employeeName + "\t" 
            + employeeGrossPay.toFixed(2) + "\t\t" 
            + employeeWithholding.toFixed(2) + "\t\t" 
            + employeeNetPay.toFixed(2) + "\n");   
    }  
    
    // Find average of net pay
    averageNetPay = totalNetPay / employeeCount;
    
    // Display final totals and average
    document.write("\nTotal Gross Payroll: " + totalGrossPay.toFixed(2)
        + "\nTotal Net Payroll: " + totalNetPay.toFixed(2)
        + "\nAverage Net Pay: " + averageNetPay.toFixed(2));
}