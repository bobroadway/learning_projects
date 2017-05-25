// Declare the variables that all the 
// functions will need to share.
var character1;
var character2;
var character3;
var swap;

/*
    All in one!
*/
function processThreeCharactersVersion1() {

    var character1;
    var character2;
    var character3;
    var swap;
    
    character1 = prompt("Enter blah one character (1/3) "
                + "or 'XXX' to quit.");
    character2 = prompt("Enter one character (2/3) "
                + "or 'XXX' to quit.");
    character3 = prompt("Enter one character (3/3) "
                + "or 'XXX' to quit.");

    while (character1 !== "XXX" 
            && character2 !== "XXX" 
            && character3 !== "XXX") {

        if (character1 > character2) {
            swap = character1;
            character1 = character2;
            character2 = swap;
        }
     
        if (character2 > character3) {
            swap = character2;
            character2 = character3;
            character3 = swap;
        }

        if (character1 > character2) {
            swap = character1;
            character1 = character2;
            character2 = swap;
        }

        document.write("character1: " + character1 + "<br />");
        document.write("character2: " + character2 + "<br />");
        document.write("character3: " + character3 + "<br />");
        
        character1 = prompt("Enter one character (1/3) "
                    + "or 'XXX' to quit.");
        character2 = prompt("Enter one character (2/3) "
                    + "or 'XXX' to quit.");
        character3 = prompt("Enter one character (3/3) "
                    + "or 'XXX' to quit."); 
    }  
}

/*
    This function sorts the three global variables.
*/
function sortThreeCharacters() {
    
    if (character1 > character2) {
        swap = character1;
        character1 = character2;
        character2 = swap;
    }
    if (character2 > character3) {
        swap = character2;
        character2 = character3;
        character3 = swap;
    }
    if (character1 > character2) {
        swap = character1;
        character1 = character2;
        character2 = swap;
    }
}

/*
    The program starts with this function.
*/
function processThreeCharactersVersion2() {
        
    character1 = prompt("Enter one character (1/3) " 
            + "or 'XXX' to quit.");
    character2 = prompt("Enter one character (2/3) " 
            + "or 'XXX' to quit.");
    character3 = prompt("Enter one character (3/3) " 
            + "or 'XXX' to quit.");
        
    while (!(character1 === 'XXX' 
            && character2 === 'XXX' 
            && character1 === 'XXX')) {
        
        sortThreeCharacters();  // <-- Here's the function call
        
        document.write("character1: " + character1 + "<br />");
        document.write("character2: " + character2 + "<br />");
        document.write("character3: " + character3 + "<br />");
        
        character1 = prompt("Enter one character (1/3) " 
                + "or 'XXX' to quit.");
        character2 = prompt("Enter one character (2/3) " 
                + "or 'XXX' to quit.");
        character3 = prompt("Enter one character (3/3) " 
                + "or 'XXX' to quit.");
    }
    
}


/*
    We call this whenever we want input
*/
function readThreeCharacters() {
    
    character1 = prompt("Enter one character (1 of 3) " 
            + "or 'XXX' to quit.");
    character2 = prompt("Enter one character (2 of 3) " 
            + "or 'XXX' to quit.");
    character3 = prompt("Enter one character (3 of 3) " 
            + "or 'XXX' to quit.");    

}


/*
    Here's the output
*/
function printThreeCharacters() {
    
    document.write("character1: " + character1 + "<br />");
    document.write("character2: " + character2 + "<br />");
    document.write("character3: " + character3 + "<br />");

}

/*
    The program starts with this function.
*/
function processThreeCharactersVersion3() {
    
    readThreeCharacters();
    
    while (character1 !== 'XXX' 
            && character2 !== 'XXX' 
            && character1 !== 'XXX') {
        sortThreeCharacters();
        printThreeCharacters();
        readThreeCharacters();
    }
}


