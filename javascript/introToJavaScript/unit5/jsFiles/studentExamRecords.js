/*
    This is the JavaScript code for 
    "Student Exam Records" File: /unit5/studentExamRecords.html
*/
function studentExamRecords() {
    
    // Variable Declarations
    var currentName;
    var currentScore;
    var studentRecords;
    var outputTable;
    
    // Get the HTML output table so we can add rows
    outputTable = document.getElementById('outputTable');
    
    // Open the Student Enrollment Records and make them 
    // available to the script
    studentRecords = openStudentExamRecords();
    
    // Test to see if there is a next record and then output it
    while (studentRecords.readNextRecord()) {
        currentName          =  studentRecords.getStudentName();
        currentScore         =  studentRecords.getStudentScore();

        // output a complete HTML row
        outputTable.innerHTML += "<tr><td>" + currentName 
                + "</td><td class=\"righttd\">" 
                + currentScore + "</td></tr>";
    }
}
