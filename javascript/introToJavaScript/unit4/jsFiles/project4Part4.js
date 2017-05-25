/*
    This is the JavaScript code for 
    "Students in Zip Codes" 
    File: /unit4/project/project4Part4.html
*/

// Declare Global Constants
var maleStudentCode = "M";
var femaleStudentCode = "F";

// Declare Global Variables and Initialize the counts
var studentEnrollment;
var studentZip;
var studentGender;
var male53711Count = 0;
var male53712Count = 0;
var male53713Count = 0;
var male53714Count = 0;
var male53716Count = 0;
var female53711Count = 0;
var female53712Count = 0;
var female53713Count = 0;
var female53714Count = 0;
var female53716Count = 0;
var maleCount = 0;
var femaleCount = 0;

// This function accesses student enrollment records and places them into
// the studentEnrollment variable
function initializeEnrollmentRecords() {
    studentEnrollment = openStudentEnrollmentRecords();
}

// This function displays the output of all the gender per zip counts
function printZipGenderCount() {
    document.write("53711: Males: " + male53711Count + " Females: " + female53711Count
        + "\n53712: Males: " + male53712Count + " Females: " + female53712Count
        + "\n53713: Males: " + male53713Count + " Females: " + female53713Count
        + "\n53714: Males: " + male53714Count + " Females: " + female53714Count
        + "\n53716: Males: " + male53716Count + " Females: " + female53716Count
        + "\n\n");
}

// This function displays the output of the total of each gender count
function printGenderCount() {
    document.write("Total Males: " + maleCount
        + "\nTotal Females: " + femaleCount);
}

function project4Part4() {
    
    // Access student enrollment records
    initializeEnrollmentRecords();
    
    // Loop through student enrollment records, counting each zipcode
    while (studentEnrollment.readNextRecord()) {
        studentZip = Number(studentEnrollment.getStudentZipCode());
        studentGender = studentEnrollment.getStudentGender();
        // Check if male, and then count each zip, also count the male
        if (studentGender === maleStudentCode) {
            if (studentZip === 53711) {
                male53711Count++;
            } else if (studentZip === 53712) {
                male53712Count++;
            } else if (studentZip === 53713) {
                male53713Count++;
            } else if (studentZip === 53714) {
                male53714Count++;
            } else if (studentZip === 53716) {
                male53716Count++;
            }
            maleCount++;
        // Check if female, and then count each zip, also count the female
        } else if (studentGender === femaleStudentCode) {
            if (studentZip === 53711) {
                female53711Count++;
            } else if (studentZip === 53712) {
                female53712Count++;
            } else if (studentZip === 53713) {
                female53713Count++;
            } else if (studentZip === 53714) {
                female53714Count++;
            } else if (studentZip === 53716) {
                female53716Count++;
            }
            femaleCount++;    
        }
    }
    
    // Print Zip and Gender Counts
    printZipGenderCount();
    
    // Print Total Gender Counts
    printGenderCount();
}