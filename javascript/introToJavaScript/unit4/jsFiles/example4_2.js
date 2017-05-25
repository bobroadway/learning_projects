/*
    This is the JavaScript code for 
    "Print Examination Scores" File: /unit4/example4_2.html
*/
function example4_2() {

    // Declare Constants
    var ZERO = 0;
    
    // Declare variables
    var studentName;
    var studentScore;
    var totalStudents = ZERO;
    var totalScore = ZERO;
    var averageScore;
    var records;
    
    // Open the Student Exam Record set
    records = openStudentExamRecords();
    
    // Loop through the records
    while (records.readNextRecord()) {
        totalStudents++;
        studentName = records.getStudentName();
        studentScore = records.getStudentScore();
        totalScore += studentScore;
        document.write(studentName + ":\t" + studentScore + "<br />");
    }
    
    // Calculate and print the average if there 
    // were students in the record set
    if (totalStudents > ZERO) {
        averageScore = totalScore / totalStudents;
        document.write("<br />The average score is: " + averageScore);
    }
}