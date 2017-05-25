/*
    This is the JavaScript code for 
    "Students in Zip Codes" 
    File: /unit4/project/project4Part3.html
*/

// Declare Constants
var GRADE_A_LOWER_BOUNDARY = 90;

// Declare Global Variables, and initialize counts
var studentRecords;
var studentCount = 0;
var scoreACount = 0;
var studentName;
var studentScore;

// The purpose of this function is to access the student exam records
// and place it in the studentRecords variable
function initializeExamRecords() {
    studentRecords = openStudentExamRecords();
}

// This functin outputs the beginning HTML table tag and table header row.
function startTable() {
    document.write("<table><tr><th>Student Name</th><th>Exam Score</th></tr>");
}

// The purpose of this function is to print a single record, student name
// and score, into a table row
function printRecord() {
    // Assign Name and Score for use in the output
    studentName = studentRecords.getStudentName();
    studentScore = studentRecords.getStudentScore();
    
    // Output Name in the first cell, score in the second
    document.write("<tr><td>" + studentName + "</td>"
        + "<td>" + studentScore + "</td></tr>");  
}

// This function closes the table.
function endTable() {
    document.write("</table>");
}

// The purpose of this function is to output the total number of As
// and the total number of students
function printTotals() {
    document.write("\nTotal Number of As: " + scoreACount
        + "\nTotal Number of Students: " + studentCount);
}

// Main line function
function project4Part3() {
    
    // Output the heading
    document.write("<h3>A Exams</h3>");

    // Access Student Exam Records
    initializeExamRecords()
    
    // Start the table
    startTable();
    
    // Loop through the student exam records, printing any that qualifies as an A
    while (studentRecords.readNextRecord()) {
        studentScore = studentRecords.getStudentScore();
        if (studentScore >= GRADE_A_LOWER_BOUNDARY) {
            printRecord();
            scoreACount++;
        }
        studentCount++;
    }
    // Close the table tag
    endTable();
    
    // Print the totals
    printTotals();
}