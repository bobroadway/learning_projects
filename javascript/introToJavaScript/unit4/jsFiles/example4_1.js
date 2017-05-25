/*
    This is file /unit4/example4_1.js 
    It contains the JavaScript code for
    
    "Fahrenheit-Celsius Conversion" File: /unit4/example4_1.html
*/
function example4_1() {
    
    // Declare Constants
    var ZERO = 0;
    var ONE = 1;
    var FIVE = 5;
    var NINE = 9;
    var THIRTY_TWO = 32;
    var LOOP_LIMIT = FIVE;
    var FINAL_MESSAGE = "All temperatures processed";
    
    
    // Declare variables
    var counter = ZERO;
    var currentFahrenheitTemperature;
    var currentCelciusTemperature;
    
    // Get user data, convert to Celcius and display
    while (counter < LOOP_LIMIT) {
        currentFahrenheitTemperature = prompt("Enter Fahrenheit " 
                + "temperature number " + (counter + ONE) 
                + " of " + LOOP_LIMIT);
        currentFahrenheitTemperature = Number(currentFahrenheitTemperature);
        currentCelciusTemperature = (currentFahrenheitTemperature - THIRTY_TWO)
                * (FIVE / NINE);
        document.write(currentFahrenheitTemperature 
                + " degrees Fahrenheit " + "is " 
                + currentCelciusTemperature 
                + " degrees Celcius.<br />");
        counter++;  
    }
    
    // Output the final message
    document.write(FINAL_MESSAGE);
}