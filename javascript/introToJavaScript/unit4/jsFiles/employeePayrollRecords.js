/*
    This is file /unit4/employeePayrollRecords.js 
    It contains the JavaScript code for
    
    "Employee Payroll Records" 
    File: /unit4/employeePayrollRecords.html
*/
function employeePayrollRecords() {
    var employeeNumber;
    var employeeName;
    var hourlyWage;
    var hoursWorked;
    
    var records;
    
    // Open the Employee Payroll Records and make them 
    // available to the script
    records = openEmployeePayrollRecords();
        
    // Read the next record, test to see if there 
    // is a next record and then output it
    while (records.readNextRecord()) {
        employeeNumber          =  records.getEmployeeNumber();
        employeeName            =  records.getEmployeeName();
        hourlyWage              =  records.getEmployeeHourlyWage();
        hoursWorked             =  records.getEmployeeHoursWorked();

        document.write(employeeNumber + "\t" + employeeName + "\t" 
                + hourlyWage + "\t" + hoursWorked + "<br />");
        
    }
}
