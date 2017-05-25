/*
    This is file /unit5/employeePayrollRecords.js 
    It contains the JavaScript code for
    
    "Employee Payroll Records" File: /unit5/employeePayrollRecords.html
*/
function employeePayrollRecords() {
    
    // Variable Declarations
    var employeeNumber;
    var employeeName;
    var hourlyWage;
    var hoursWorked;
    var records;
    var outputTable;
    
    // Get the HTML output table so we can add rows
    outputTable = document.getElementById('outputTable');
    
    // Open the Employee Payroll Records and make them 
    // available to the script
    records = openEmployeePayrollRecords();
    
    // Test to see if there is a next record and then output it
    while (records.readNextRecord()) {
        employeeNumber          =  records.getEmployeeNumber();
        employeeName            =  records.getEmployeeName();
        hourlyWage              =  records.getEmployeeHourlyWage();
        hoursWorked             =  records.getEmployeeHoursWorked();
        hoursWorked             =  hoursWorked.toFixed(1);
        hourlyWage              =  hourlyWage.toFixed(2);

        outputTable.innerHTML += "<tr><td class=\"righttd\">" 
                + employeeNumber 
                + "</td><td>" 
                + employeeName 
                + "</td><td class=\"righttd\">" 
                + hourlyWage 
                + "</td><td class=\"righttd\">" 
                + hoursWorked 
                + "</td></tr>";
    }
}
