/*
    This is the JavaScript code for 
    "Student Enrolment Records" File: /unit5/studentEnrollmentRecords.html
*/
function studentEnrollmentRecords() {
    
    //Declare Constants
    var EMPTY_STRING = "";
    
    // Declare Variables
    var currentNumber;
    var currentName;
    var currentAddress;
    var currentZipCode;
    var currentGender;
    var currentFacultyStudent;
    var currentStudentAttendance;
    var currentAge;
    var currentCourseNumber;
    var outputTable;
    var outputString;
    
    var studentRecords;
    
    // Assign initial values to variables
    outputString = EMPTY_STRING;
    
    // Get the HTML output table so we can add rows
    outputTable = document.getElementById('outputTable');
    
    // Open the Student Enrollment Records and make them 
    // available to the script
    studentRecords = openStudentEnrollmentRecords();
    
    // Test to see if there is a next record and then output it
    while (studentRecords.readNextRecord()) {
        currentNumber            =  studentRecords.getStudentNumber();
        currentName              =  studentRecords.getStudentName();
        currentAddress           =  studentRecords.getStudentAddress();
        currentZipCode           =  studentRecords.getStudentZipCode();
        currentGender            =  studentRecords.getStudentGender();
        currentFacultyStudent    =  studentRecords.getFacultyStudentStatus();
        currentStudentAttendance =  studentRecords.getStudentAttendance();
        currentAge               =  studentRecords.getStudentAge();  
        currentCourseNumber      =  studentRecords.getStudentCourseNumber();

        // Generate an HTML table row for this student
        outputString += "<tr><td class=\"righttd\">" 
                + currentNumber 
                + "</td><td>" 
                + currentName 
                + "</td><td>" 
                + currentAddress 
                + "</td><td>" 
                + currentZipCode 
                + "</td><td class=\"centeredtd\">" 
                + currentGender 
                + "</td><td class=\"centeredtd\">" 
                + currentFacultyStudent 
                + "</td><td class=\"centeredtd\">"
                 + currentStudentAttendance
                + "</td><td class=\"righttd\">" 
                + currentAge
                + "</td><td class=\"righttd\">" 
                + currentCourseNumber 
                + "</td></tr>";
    }
    
    // Append the generated rows to the HTML table
    outputTable.innerHTML += outputString;
}
