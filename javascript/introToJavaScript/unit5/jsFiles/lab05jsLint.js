/*
    Global Constants
*/
var ZERO = 0;

/*
    This is the JavaScript code for 
    "Lab 8: Experimenting with jsLint" 
    File: /unit5/labs/lab05jsLint.html
    
    Start the program by calling FindRangeOfNumbers
    
*/
function lab05jsLint() {
    // Your code goes in here.
    findRangeOfNumbers();
}

/*
DetermineMinimumMaximum
    declare index, rangeValuesArray
    set smallest, largest to the first element of array
    FOR all numbers in array
        IF number at index < smallest THEN
            assign number at index to smallest
        ENDIF
        
        IF number at index is bigger than largest THEN
            assign number to largest
        ENDIF
    ENDFOR
    assign smallest & largest to rangeValuesArray
    return rangeValuesArray
END
*/
function determineMinimumMaximum(numbers) {
    // Declare Variables
    var smallest;
    var largest;
    var index;
    var rangeValuesArray;

    // Assign initial values
    smallest = numbers[0];
    largest = numbers[0];

    for (index = ZERO; index < numbers.length; index++) {
        if (numbers[index] < smallest) {
            smallest = numbers[index];
        }
        if (numbers[index] > largest) {
            largest = numbers[index];
        }
    }

    rangeValuesArray = [smallest, largest];

    return rangeValuesArray;
}

/*
SetupFindRange
    declare numbersArray
    Initialize array of numbers
    return numbersArray
END
*/
function setupFindRange() {
    var numbersArray;

    // Populate the array
    numbersArray
            = [402, 107, 8, 183, 517, 577, 688, 945, 141, 194, 613, 966, 928,
               700, 818, 749, 862, 130, 573, 676, 115, 539, 113, 690, 704, 83,
               433, 863, 885, 32, 114, 329, 186, 123, 485, 930, 449, 430, 74,
               543, 87, 916, 562, 622, 841, 533, 635, 83, 183, 989, 959, 158,
               882, 901, 78, 343, 727, 532, 287, 817, 380, 578, 637, 966, 479,
               302, 295, 36, 835, 266, 768, 160, 174, 322, 779, 201, 899, 724,
               685, 57, 369, 533, 345, 190, 628, 952, 38, 924, 917, 607, 424,
               773, 62, 625, 160, 875, 671, 757, 469, 240, 506, 392, 716, 983,
               769, 654, 587, 432, 423, 760, 610, 881, 687, 397, 339, 459, 279,
               729, 44, 916, 858, 803, 422, 84, 341, 860, 567, 354, 82, 833,
               841, 464, 733, 120, 260, 496, 465, 897, 287, 189, 749, 14, 545,
               647, 870, 923, 41, 846, 985, 154, 776, 762, 195, 63, 778, 383,
               701, 888, 835, 69, 59, 500, 731, 431, 341, 945, 447, 838, 922,
               496, 886, 570, 110, 86, 38, 950, 922, 595, 274, 464, 138, 853,
               251, 289, 306, 834, 302, 620, 154, 130, 155, 116, 696, 550, 138,
               33, 58, 431, 516, 28];

    return numbersArray;
}

/*
OutPutRangeValues
    declare smallestOutput, largestOutput
    get HTML elements and assign to smallestOutput, largestOutput
    output smallestOutput, largestOutput to HTML elements
END
*/
function outPutRangeValues(rangeArray) {
    // Declare Variables
    var smallestOutput;
    var largestOutput;


    // Get access to the output HTML element
    smallestOutput = document.getElementById('findRangeSmallest');
    largestOutput  = document.getElementById('findRangeLargest');

    // Output the values to the elements
    smallestOutput.innerHTML += rangeArray[0];
    largestOutput.innerHTML += rangeArray[1];
}

/*
FindRangeOfNumbers
    declare numbers, rangeValuesArray
    numbers = SetupFindRange
    rangeValuesArray = DetermineMinimumMaximum(numbers)
    OutPutRangeValues(rangeValuesArray)
END
*/
function findRangeOfNumbers() {
    // Declare variables
    var numbers;
    var rangeValuesArray;

    numbers = setupFindRange();

    rangeValuesArray = determineMinimumMaximum(numbers);

    outPutRangeValues(rangeValuesArray);
}