/*
    This is the JavaScript code for 
    "Lab 6: A Simple Start With Student Enrollment Records" 
    File: /unit4/labs/lab06simpleEnrollment.html
*/
function lab06simpleEnrollment() {
    // Your code goes in here.
    
    // Declare Variabls
    var currentNumber;
    var currentName;
    
    var studentRecords;
    
    // Open Student Enrollment Records
    studentRecords = openStudentEnrollmentRecords();
    
    // Read next record, if there is a next, output it
    while (studentRecords.readNextRecord()) {
        currentNumber   = studentRecords.getStudentNumber();
        currentName     = studentRecords.getStudentName();

        // Display record
        document.write(currentNumber + " " + currentName + "\n");
        
    }
}