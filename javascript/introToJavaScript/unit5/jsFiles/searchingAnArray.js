/*
This is file /unit5/searchingAnArray.js 
It contains the JavaScript code for

"Searching an Array" File: /unit5/searchingAnArray.html
*/
function searchingAnArray() {

    var numbers;
    var output;
    var index;
    var search;
    var form;
    var valueFound = false;
    var outputString;

    numbers = [4, 6, 7, 11, 13, 16, 18, 19, 20, 21, 23, 26, 29, 35, 
            37, 38, 39, 41, 42, 45, 48, 51, 57, 58, 63, 66, 70, 72,
            81, 88, 89, 90, 92, 93, 94, 95, 96];

    form = document.getElementById('searchingAnArrayId1');

    search = form.entry.value;

    output = document.getElementById('outputList');

    if (isNaN(search) || search === "") {
        outputString = "<li>Not a number</li>";
        output.innerHTML = outputString;
        return false;
    }

    search = Number(search);

    for (index = 0; index < numbers.length; index++) {
        if (search === numbers[index]) {
            valueFound = true;
            break;
        }
    }

    if (valueFound) {
        outputString = "<li>The number " + search 
                + " is in the array " + "and is in index " 
                + index + "</li>";
    } else {
        outputString = "<li>The number " + search 
                + " is not in the array </li>";
    }


    output.innerHTML = outputString;

    return false;

}