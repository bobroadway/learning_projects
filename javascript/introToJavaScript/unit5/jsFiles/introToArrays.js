/*
    This is file /unit5/introToArrays.js 
    It contains the JavaScript code for
    
    "Introduction to Arrays" File: /unit5/introToArrays.html
*/
function introToArrays() {
    // Your code goes in here.
    var output;
    
    output = document.getElementById('outputDiv');
    
    output.innerHTML = "The JavaScript file for this page is: "
            + "\"/unit5/jsFiles/introToArrays.js\"";
}

/*
    The first demo function using Arrays.
*/
function createWisconsinAreaCodes() {
    // Declare our array
    var areaCodes = [];
    
    // Here's our output list
    var output;

    // Assign six variables in the array
    areaCodes[0] = 608;
    areaCodes[1] = 414;
    areaCodes[2] = 715;
    areaCodes[3] = 414;
    areaCodes[4] = 262;
    areaCodes[5] = 920;
    
    // Get the output element
    output = document.getElementById('outputList1');
    
    // Output each element of the array to the list 
    // inside <li> tags.
    output.innerHTML += "<li>" + areaCodes[0] + "</li>";
    output.innerHTML += "<li>" + areaCodes[1] + "</li>";
    output.innerHTML += "<li>" + areaCodes[2] + "</li>";
    output.innerHTML += "<li>" + areaCodes[3] + "</li>";
    output.innerHTML += "<li>" + areaCodes[4] + "</li>";
    output.innerHTML += "<li>" + areaCodes[5] + "</li>";

}  

/*
    The second demo function using Arrays.
*/
function createWisconsinAreaCodesVersionTwo() {
    // Declare our array
    var areaCodes = [];
    var index;
    
    // Here's our output list
    var output;

    // Assign six variables in the array
    areaCodes[0] = 608;
    areaCodes[1] = 414;
    areaCodes[2] = 715;
    areaCodes[3] = 414;
    areaCodes[4] = 262;
    areaCodes[5] = 920;
    
    // Get the output element
    output = document.getElementById('outputList2');
    
    // Output each element of the array to the list 
    // inside <li> tags.
    for (index = 0; index < areaCodes.length; index++) {
        output.innerHTML += "<li>" + areaCodes[index] + "</li>";
    }

}  


/*
    The third demo function using Arrays.
*/
function createWisconsinAreaCodesVersionThree() {
    // Declare our array
    var areaCodes;
    var index;
    
    // Here's our output list
    var output;

    // Assign six variables in the array
    areaCodes = [608, 414, 715, 414, 262, 920];
    
    // Get the output element
    output = document.getElementById('outputList3');
    
    // Output each element of the array to the list 
    // inside <li> tags.
    for (index = 0; index < areaCodes.length; index++) {
        output.innerHTML += "<li>" + areaCodes[index] + "</li>";
    }

}  


/*
    The fourth demo function using Arrays.
*/
function createWisconsinAreaCodesVersionFour() {
    // Declare our array
    var areaCodes;
    
    // Here's our output list
    var output;

    // Assign six variables in the array
    areaCodes = [608, 414, 715, 414, 262, 920];
    
    // Get the output element
    output = document.getElementById('outputList4');
    
    // Output the whole array as one <li> tag
    output.innerHTML += "<li>" + areaCodes + "</li>";

}  
