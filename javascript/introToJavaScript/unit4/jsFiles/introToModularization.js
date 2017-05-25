/*
    This function is being called
    by the theMainline function below.
*/
function justCallMe() {
    // Declare variables
    var name;
    
    name = "Ethel";
    
    document.write("Hello, " + name + ".<br />");
}

/*
    This function will run some code,
    call a function and let the function
    run its code and then run some more code.
*/
function theMainline() {
    // Declare variables
    var name;
    name = "Fred";
    
    document.write("Hello, " + name + ".<br />");
    
    //Here's the function call!
    justCallMe();
    
    document.write("All done!");
}
