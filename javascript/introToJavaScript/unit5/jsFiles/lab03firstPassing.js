/*
    This is the JavaScript code for 
    "Lab 3: Passing Parameters" 
    File: /unit5/labs/lab03firstPassing.html
*/
// This function diplays the city prompted for by the main line function.
function displayCity(cityReceived) {
    // Declare variable, reference to output div
    var referenceToDivElement = document.getElementById('divForOutput');
    
    // Output to the html document
    referenceToDivElement.innerHTML = "Hello, " + cityReceived 
        + "! How's the weather out there?";
}

function lab03firstPassing() {
    // Declare variable
    var cityName;
    
    // Prompt the user for a city name.
    cityName = prompt("Be a doll and give me a city name.");
    
    // Call the function for displaying the city.
    displayCity(cityName);
}