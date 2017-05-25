/*
    This is file /unit4/example4_3.js 
    It contains the JavaScript code for
    
    "Process Student Enrollments" File: /unit4/example4_3.html
*/
function example4_3() {

    // Declare Constants
    var ZERO = 0;
    var TARGET_COURSE = 18500;
    var ROW_START = "<tr><td>";
    var CELL = "</td><td>";
    var ROW_END = "</td></tr>";
    var ROW_START_SPAN = "<tr><td colspan=\"5\">";
    var HEADER = "<h5>Students in Course 18500</h5>";
    var MALE = "M";
    var FEMALE = "F";
    
    // Declare variables
    var totalFemales;
    var totalMales;
    var totalStudents;
    var currentStudentNumber;
    var currentName;
    var currentAddress;
    var currentZipCode;
    var currentGender;
    var currentCourseNumber;
    var formattedStudentRow;
    var header;
    var footer;
    
    // Assign initial values for variables
    totalFemales = ZERO;
    totalMales = ZERO;
    totalStudents = ZERO;
    
    
    // Open the Student Enrollments Record Set
    // and make the first row available
    var records = openStudentEnrollmentRecords();
    
    // Output the report title
    document.write(HEADER);
    
    while (records.readNextRecord()) {
        
        // get the course number of the current record
        // for checking if it is a targetted record
        currentCourseNumber = records.getStudentCourseNumber();
        if (currentCourseNumber === TARGET_COURSE) {
            
            // increment the total student count
            totalStudents++;
            
            // get all the data for this student and store
            // it in variables
            currentStudentNumber = records.getStudentNumber();
            currentName = records.getStudentName();
            currentAddress = records.getStudentAddress();
            currentZipCode = records.getStudentZipCode();
            currentGender = records.getStudentGender();
            
            // output this student
            formattedStudentRow = ROW_START
                    + currentStudentNumber
                    + CELL
                    + currentName
                    + CELL
                    + currentAddress
                    + CELL
                    + currentZipCode
                    + CELL
                    + currentGender
                    + ROW_END;
            document.write(formattedStudentRow);
            
            
            // Now check for "F" or "M" in the gender
            // and add to totals
            if (currentGender === FEMALE) {
                totalFemales++;
            } else if (currentGender === MALE) {
                totalMales++;
            }
        }
    }

    // The while loop is done, now print out the totals
    footer = ROW_START_SPAN 
            + "<strong>Total Students: </strong>"
            + totalStudents
            + ", <strong>Females: </strong>"
            + totalFemales
            + ", <strong>Males: </strong>"
            + totalMales
            + ROW_END;
           
    document.write(footer);
} 

