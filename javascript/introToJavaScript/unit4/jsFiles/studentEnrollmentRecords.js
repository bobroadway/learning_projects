/*
    This is the JavaScript code for 
    "Student Enrolment Records" 
    File: /unit4/studentEnrollmentRecords.html
*/
function studentEnrollmentRecords() {
    
    //Declare Variables
    var currentNumber;
    var currentName;
    var currentAddress;
    var currentZipCode;
    var currentGender;
    var currentCourseNumber;
    
    var studentRecords;
    
    // Open the Student Enrollment Records and make them 
    // available to the script
    studentRecords = openStudentEnrollmentRecords();
    
    // Read the next record, test to see if there 
    // is a next record and then output it
    while (studentRecords.readNextRecord()) {
        currentNumber        =  studentRecords.getStudentNumber();
        currentName          =  studentRecords.getStudentName();
        currentAddress       =  studentRecords.getStudentAddress();
        currentZipCode       =  studentRecords.getStudentZipCode();
        currentGender        =  studentRecords.getStudentGender();
        currentCourseNumber  =  studentRecords.getStudentCourseNumber();        

        document.write(currentNumber + "\t" 
                + currentName + "\t" + currentAddress + "\t" 
                + currentZipCode + "\t" + currentGender + "\t" 
                + currentCourseNumber + "<br />");
    }
}
