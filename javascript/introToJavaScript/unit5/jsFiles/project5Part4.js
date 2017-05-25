/* File: /unit5/project/project5Part4.html */

/*  
    Global variables - none
/*

The Test Plan

    Test Case 1:
        Inputs:    zebra cat bat gnat turtle
    
        Expected Results: 
		
		   (The ordered list would show as):
		     1.  zebra
		   	 2.  cat
			 3.  bat
			 4.  gnat
			 5.  turtle
			 
		 The number of strings entered for this run was:  5
		 The content of the slot halfway through the array:  bat


    Test Case 2:
        Inputs: one, two, three, four, five, six, seven,
        eight, nine, ten, eleven, twelve, thirteen, fourteen,
        fifteen, sixteen, seventeen, quit
        
        Expected Results:
        (The ordered list would show as):
        1.  one
        2.  two
        3.  three
        4.  four
        5.  five
        6.  six
        7.  seven
        8.  eight
        9.  nine
        10. ten
        11. eleven
        12. twelve
        13. thirteen
        14. fourteen
        15. fifteen
        16. sixteen
        17. seventeen
        The number of strings entered for this run was:  17
        The content of the slot halfway through the array:  nine

    Test Case 3:
        Inputs: red, yellow, blue, quit
    
        Expected Results:
        (The ordered list would show as):
        1.  red
        2.  yellow
        3.  blue
        The number of strings entered for this run was:  3
        The content of the slot halfway through the array:  yellow
        
*/


/*
This is the JavaScript code for the user-entered set of strings, 
as it currently exists.  This is a working program, and currently produces 
the output as seen at the bottom of the Project Part 4 web page.

You must do maintenance to the program to enhance it so that it then meets the 
specifications of LU5 Project Part 4.
*/

/*------------------------------------------------------------------------
  This is the MAINLINE function called from the Web page.  This program
  consists of ONLY this one MAINLINE function.  No "modularization" is
  involved in this Part 4--rather the program consists of just this one
  function.
------------------------------------------------------------------------*/

function project5Part4()  {
		
    //  Define all variables 
	
	var userEnteredString;       // will contain the string entered by the user
	
	var arrayIndex;
	var stringArray = [];	     // will contain any number of user entered strings
	
	var middleIndex;             // will contain the "middle" index for the third portion of output
	
	var outputList;              // will contain a ref to the ordered list on the web page
	var firstSubHeading;         // will contain a ref to the first sub heading 
	var secondSubHeading;        // will contain a ref to the second sub heading 
	
    
    //  Loop to obtain and place any number of strings from user into the string array
    while (userEnteredString !== "quit") {
	
	    userEnteredString = prompt("Enter a string\nIf finished, enter 'quit'");           // obtain a string
		
		if (userEnteredString === "quit") {
			  alert("Program is halting as requested");
			  break; 	
		}
        
		arrayIndex = stringArray.length;                 // point index at next open slot of array
		
		stringArray[arrayIndex] = userEnteredString;     // place string into next open slot of array 
        	
    }
	
	
    //  Generate a reference to the ordered list on the web page so we can add line items 
	//  to it.
	//    (Note that for this program, the html ordered list element itself is already present
	//    in the html, and does not have to be inserted by this JavaScript program.)
    
	outputList = document.getElementById("listToDisplayEnteredStrings");
	  
	//  Loop through the string array placing the content of each element (aka "slot") in turn
	//  onto the web page in the form of items in an ordered list
	
	arrayIndex = 0;      // point index at first row of the array
	
	while (arrayIndex < stringArray.length)   {
	    outputList.innerHTML += "<li>"  + stringArray[arrayIndex] + "</li>"; 
	    arrayIndex++;	
	}
	
	//  Next, check to make sure the user entered an odd (as opposed to even) number of strings
	//  before showing any more output that just the strings he/she entered.
	
	if (stringArray.length % 2 !== 1) {
	    alert("You must enter an ODD number of strings."
			         + "\n\nIgnore program output from this run."
			         + "\nExecution terminating--please start over."
					 + "\n");
		return;              // return from the mainline to the web page and thus stop 
	}
	
	// Calculate middle index
	middleIndex = Math.floor(stringArray.length / 2);
	
	//  Place the number of strings entered by the user into the first sub heading on the Web page
	
	firstSubHeading = document.getElementById("headingForNumber");     // generate ref to 1st subheading
	firstSubHeading.innerHTML += stringArray.length; 
	
	// Place the string from the middle element (aka "slot") of the array into the second sub heading on the web page
	
	secondSubHeading = document.getElementById("headingForMiddleSlotContent"); // generate ref to 2nd subheading
	secondSubHeading.innerHTML += stringArray[middleIndex];
	
}  //  END OF FUNCTION

