/*
Modules:
    CalculatePercentage
    ConvertFractionToPercentage
    OutputPercentage
    GetValueFromFormFieldById


The Program Planning Lists

    The List of Input Variables:
        numerator
        denominator

    The List of Output Variables:
        percentage

    The Process Checklist:
        prompt the user for the numerator
        prompt the user for the denominator
        validate and convert the entries
        convert fraction to a percentage rounded to the nearest tenth
        display the percentage


The Program Test Plan

    TEST CASE 1:

        INPUT VALUES: 1, 10

        EXPECTED RESULT: 10.0%
    
    TEST CASE 2:

        INPUT VALUES: 2, 7

        EXPECTED RESULT: 28.6%

*/


// Declare Global Constants
var ZERO = 0;
var ONE = 1;
var ONE_HUNDRED = 100;


/*
ConvertFractionToPercentage(numerator, denominator)
    declare result
    declare resultRounded
    IF denominator NOT zero THEN
        result = numerator / denominator * 100
    ELSE
        result = zero
    ENDIF
    resultRounded = roundToTenth(result)
    return resultRounded
END
*/
function convertFractionToPercentage(numerator, denominator) {
        
    // Declare variables
    var result;
    var resultRounded;

    // Calculate Percentage
    if (denominator !== ZERO) {
        result = (numerator / denominator) * ONE_HUNDRED;
    } else {
        result = ZERO;
    }

    resultRounded = result.toFixed(ONE);

    return resultRounded;
}


/*
GetValueFromFormFieldById(elementId)
    declare formValue
    access form and extract value with elementId
    IF formValue NOT numeric valueTHEN
        inform user that entered number is not valid
        return false
    ELSE
        convert formValue to a number
        return formValue
    END
END
*/
function getValueFromFormFieldById(elementId) {
    var formField;
    var formValue;

    formField = document.getElementById(elementId);

    formValue = formField.value;

    if (isNaN(formValue)) {
        alert("Please enter a valid number.");
        return false;
    } else {
        formValue = Number(formValue);
        return formValue;
    }

}

/*
OutputPercentage(percentage)
    declare output
    declare invalidMessage to be "Invalid Fraction"
    access page and retrieve output element
    IF percentage is not zero THEN
        output percentage to page
    ELSE
        output invalidMessage
    ENDIF
END
*/
function outputPercentage(percentage) {
    var output;
    var invalidMessage = "Invalid Fraction";

    // Get the output element
    output = document.getElementById('percentageOutput');

    // Output the percent to the page
    if (percentage !== ZERO) {
        output.innerHTML = "Percentage: " + percentage + "%";
    } else {
        output.innerHTML = invalidMessage;
    }

}

/*
CalculatePercentage
    declare numerator
            denominator
            percentage
    GetValueFromFormFieldById("numeratorId")
    GetValueFromFormFieldById("denominatorId")
    IF invalid entry THEN
        end function
    ENDIF
    ConvertFractionToPercentage(numerator, denominator)
    OutputPercentage(percentage)
END
*/
function calculatePercentage() {
    // Declare variables
    var numerator;
    var denominator;
    var percentage;

    numerator = getValueFromFormFieldById("numeratorId");
    denominator = getValueFromFormFieldById("denominatorId");

    if (numerator === false || denominator === false) {
        return;
    }

    // Get the percentage from the convertFractionToPercentage function
    percentage = convertFractionToPercentage(numerator, denominator);

    outputPercentage(percentage);
    
    return false;

}