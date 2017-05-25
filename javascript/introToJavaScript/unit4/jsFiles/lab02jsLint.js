/*
    This is the JavaScript code for 
    "Lab 2: Experimenting with jsLint" 
    File: /unit4/labs/lab02jsLint.html
*/
function lab02jsLint() {
    // Declare Variables
    var aFineVariable;
    var anotherVariable;
    var oneMoreVariable;
 
    // Assign Variables
    aFineVariable = "A fine value";
    anotherVariable = "This is another fine value";
    oneMoreVariable = prompt("Enter the number 5");
    oneMoreVariable = Number(oneMoreVariable);
 
    //Logic section
    if (oneMoreVariable === 5) {
        document.write(aFineVariable);
    } else {
        document.write(anotherVariable);
    }
}
