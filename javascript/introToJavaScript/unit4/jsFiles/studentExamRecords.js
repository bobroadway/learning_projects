/*
    This is the JavaScript code for 
    "Student Exam Records" 
    File: /unit4/studentExamRecords.html
*/
function studentExamRecords() {
    var currentName;
    var currentScore;
    
    var studentRecords;
    
    // Open the Student Enrollment Records and make them 
    // available to the script
    studentRecords = openStudentExamRecords();
    
    //output a header with field names
    document.write("Student Name\tExam Score<br /><br />");
    
    // Read the next record, test to see if there 
    // is a next record and then output it
    while (studentRecords.readNextRecord()) {
        currentName          =  studentRecords.getStudentName();
        currentScore         =  studentRecords.getStudentScore();

        document.write(currentName + "\t" + currentScore + "<br />");
        
    }
}
