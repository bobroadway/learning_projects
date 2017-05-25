/*
    This is file /unit5/parallelArrays.js 
    It contains the JavaScript code for
    
    "Parallel Arrays" File: /unit5/parallelArrays.html
*/
function parallelArraysOne() {
    var states;
    var capitals;
    var output;
    var listItems = "";
    var index;
    
    states = ["Alabama", "Alaska", "Arizona", "Arkansas", "California"];
    capitals = ["Montgomery", "Juneau", "Phoenix", "Little Rock", "Sacramento"];  
    
    output = document.getElementById('outputList');

    for (index = 0; index < states.length; index++) {
        listItems += "<li>" + states[index] + ": " + capitals[index] + "</li>";
    }
    
    output.innerHTML = listItems;
}