/*
    This is file /unit4/loopAndIfs.js 
    It contains the JavaScript code for
    
    "Combining loop and if structures" File: /unit4/loopAndIfs.html
*/
function loopAndIfs() {
    // Your code goes in here.
    
    document.write("The JavaScript file for this page is: " 
            + "\"/unit4/jsFiles/loopAndIfs.js\"");
}

/*
    This function asks for entries from a user
    and displays the entry on the page. It will
    continue asking for entries until the user
    enters "quit".
*/
function quickLoopsIfs() {
    var entry;
    var loopAgain = true;
    
    while (loopAgain) {
        entry = prompt("Please enter something or " 
                    + " \"quit\" to stop.");
        
        if (entry === "quit") {
            loopAgain = false;
            document.write("Good, bye!");
        } else {
            document.write("You entered: " + entry + "<br />");
        }
    }
}


/*
    Here's how to use the isNaN() function
*/
function isNaNUsage() {
    
    // Declare Constants
    var ZERO = 0;
    var FIVE = 5;
    
    // Declare Variables
    var entry;
    var counter;
    
    // Ask a user to enter five things
    for (counter = ZERO; counter < FIVE; counter++) {
        // Get a number or a string
        entry = prompt("Enter five words or numbers");
        
        if (isNaN(entry)) {
            // In here what was entered is a (N)ot (a) (N)umber
            document.write("You entered a string: " + entry + ".<br />");
        } else {
            // In here what was entered IS a number.
            document.write("You entered a number: " + entry + ".<br />");
        }
    }
    
}


/*
    This function prompts the user for a series of 
    numbers and stores how many even and odd numbers 
    were entered. It also checks the data to make 
    sure it is a number. The function displays 
    the results and ends when the user enters "quit".
*/
function aLittleBiggerExample() {
    
    // Declare Constants
    var ZERO = 0;
    var ONE = 1;
    var TWO = 2;
    var FIVE = 5;
    var TWENTY = 20;
    var QUIT_CODE = "quit";
    
    // Declare variables
    var evens;
    var odds;
    var evenOdd;
    var entry;
    var loopAgain;
    
    // Assign initial values to variables
    evens = ZERO;
    odds = ZERO;
    loopAgain = true;
    
    while (loopAgain) {
        entry = prompt("Enter a number, any number, " 
                + "or \"quit\" to stop.");
                
        if (isNaN(entry)) {
            // Not a number in here!
            if (entry === QUIT_CODE) {
                loopAgain = false;
            } else {
                alert(entry + " is not a number, " 
                        + "please try again.");
            }
        } else {
            // It's a number!
            entry = Number(entry);
            evenOdd = entry % TWO;
            if (evenOdd === ZERO) {
                evens++;
            } else if (evenOdd === ONE) {
                odds++;
            }
        }
    }
        
    // Display the results
    document.write("You entered " + evens 
            + " even number(s).<br />");
    document.write("You entered " + odds 
            + " odd number(s).<br />");
}


/*
    The simple test to stop a loop
*/
function firstStop() {
    
    // Declare Constants
    var QUIT_CODE = "quit";
    
    // Declare variables
    var entry;
    
    while (entry !== QUIT_CODE) {
        entry = prompt("Enter a word, \"quit\" to stop.");
        document.write("You entered: " + entry + "<br />");        
    }
}

/*
    A simple way to stop a loop and only do a task if
    the user did not enter "quit".
*/
function secondStop() {

    // Declare Constants
    var ZERO = 0;
    var QUIT_CODE = "quit";
    
    // Declare variables
    var entry;
    var total = ZERO;
    
    while (entry !== QUIT_CODE) {
        entry = prompt("Enter a number or \"quit\" to stop.");
        if (entry !== QUIT_CODE) {
            entry = Number(entry);
            total += entry;
        }
    }
    document.write("Total: " + total);
}

/*
    Take one of 2 paths depending on what is entered.
    Or quit when "quit" is entered.
*/
function thirdStop() {

    // Declare Constants
    var ZERO = 0;
    var FIVE = 5;
    var QUIT_CODE = "quit";

    // Declare variables
    var shortWords;
    var longWords;
    var entry;
    var wordLength;
    
    // Assign initial values to variables
    shortWords = ZERO;
    longWords = ZERO;

    // Get numbers from user and count words
    while (entry !== QUIT_CODE) {
        entry = prompt("Enter a word or \"quit\" to stop.");
        if (entry !== QUIT_CODE) {
            wordLength = entry.length;
            if (wordLength <= FIVE) {
                shortWords++;
            } else {
                longWords++;
            }
        }
    }
    
    // Output results
    document.write("You entered " + longWords + " Long words and " 
            + shortWords + " Short words.");
}


/*
    Stop a loop with a boolean variable
*/
function stopWithBooleanVar() {
    
    // Declare Constants
    var TEN = 10;
    
    // Declare variables
    var loopTest;
    var entry;
    
    // Assign intitial values to variables
    loopTest = true;
    
    // Get numbers from user
    while (loopTest) {
       entry = prompt("Enter a number greater than 10");
       entry = Number(entry);
       if (entry > TEN) {
           alert("You entered: " + entry);
       } else {
           loopTest = false;
           alert("Good, bye!")
       }
    }
    
}

/*
    Stop a loop with the break; statement
*/
function breakIt() {

    // Declare Constants
    var ZERO = 0;
    var LOOP_MAXIMUM = 25;
    
    // Declare variables
    var count;
    var countSquared;
    
    // Assign initial values to variables
    count = ZERO;
    
    while (true) {
        document.write(count);
        
        if (count > LOOP_MAXIMUM) {
            document.write(" is too big!");
            break;
        }
        
        countSquared = count * count;
        document.write(" squared is " + countSquared + "<br />");
        count++;
    }
}

function isNaNDemos() {
    document.write("isNaN(\"100\") --> " + isNaN("100") + "<br />");
    document.write("isNaN(\"-100\") --> " + isNaN("-100") + "<br />");
    document.write("isNaN(\"12.99\") --> " + isNaN("12.99") + "<br />");
    document.write("isNaN(\"5e10\") --> " + isNaN("5e10") 
            + "  <-- Exponential Number<br />");
    document.write("isNaN(\"100abc\") --> " + isNaN("100abc") 
            + "  <-- Trailing characters<br />");
    document.write("isNaN(\"abc100\") --> " + isNaN("abc100") 
            + "  <-- Preceding characters<br />");
    document.write("isNaN(\"100    \") --> " + isNaN("100    ") 
            + "  <-- Trailing spaces<br />");
    document.write("isNaN(\"    100\") --> " + isNaN("    100") 
            + "  <-- Preceding spaces<br />");
    document.write("isNaN(\"100   200\") --> " + isNaN("100   200") + "<br />");
    document.write("isNaN(\"100   abc\") --> " + isNaN("100   abc") + "<br />");
    document.write("isNaN(\"0x2\") --> " + isNaN("0x2") 
            + "  <-- Hexadecimal number<br />");
    document.write("isNaN(\"ten\") --> " + isNaN("ten") 
            + "  <-- Don't laugh, I've seen it!");
}


/*
    This is a larger example of checking an entered value for a valid number.
*/
function numberCheck() {
    
    // Declare Constants
    var ZERO = 0;
    var QUIT_CODE = "quit";
    
    // Declare Variables
    var enteredNumber;
    var total;
    var loopAgain;
    
    // Assign initial values to variables
    total = ZERO;
    loopAgain = true;
    
    // Get numbers from user
    while (loopAgain) {
        enteredNumber = prompt("Enter a number or \"quit\" to end.");
        if (isNaN(enteredNumber)) {            // <-- test for a number
            if (enteredNumber === QUIT_CODE) {                     
                loopAgain = false;                              //
            } else {                                            // <-- NOT a 
                alert("Not a number, please enter a number.");  //     number
            }                                                   //     in here.
        } else {                                        
            enteredNumber = Number(enteredNumber);      //
            total += enteredNumber;                     // <-- It is a number
            document.write("You entered the number "    //     in here.
                    + enteredNumber  + "<br />");       //
        }
    }
    
    // Output total
    document.write("<br />Total: " + total);
}


/*
    Adding logic to a loop
*/
function addingLogicOne() {
    
    // Declare Constants
    var FIVE = 5;
    var ZERO = 0;
        
    // Declare Variables
    var counter;
    
    // Assign values to variables
    counter = ZERO;
    
    // Now with logic
    while (counter < FIVE) {
        if (counter === ZERO) {
            document.write("Here's the first line of output!<br />");
        } else {
            document.write("Here's a line of output.<br />");
        }
        counter++;
    }

}


/*
    Adding more logic and more lines of text
*/
function addingLogicTwo() {
    
    // Declare Constants
    var ZERO = 0;
    var ONE = 1;
    var FIVE = 5;
    var TWENTY = 20;
        
    // Declare Variables
    var counter;
    var section;
    var sectionCounter;
    
    // Assign values to variables
    counter = ONE;
    section = ONE;
    sectionCounter = ONE;

    while (counter <= TWENTY) {
        if (sectionCounter === ONE) {
            document.write("<span style=\"color:blue;\">Section " 
                    + section + ":</span><br />");
            section++;
        }
        
        document.write("    Line number: " + counter 
                + ", section line: " + sectionCounter + "<br />");
        
        if (sectionCounter === FIVE) {
            document.write("<br />");
            sectionCounter = ONE;
        } else {
            sectionCounter++;
        }
        
        counter++;
    }
}


