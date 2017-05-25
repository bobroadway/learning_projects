/*
FindArraySum
    set sum to zero
    declare average
    declare array of numbers
    FOR index 0 to length of array
        sum += array[index]
    ENDFOR
    output sum and average
END
*/
function findArraySum() {
    // Declare variables
    var sum = 0;
    var average;
    var numbers;
    var sumOutput;
    var averageOutput;
    var index;
    
    // Populate the array
    numbers = [402, 107, 8, 183, 517, 577, 688, 945, 141, 194, 613, 966, 928, 
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
               
    // Calculate the sum
    for (index = 0; index < numbers.length; index++) {
        sum += numbers[index];
    }

    average = sum / numbers.length;
    
    // Get access to the output HTML element
    sumOutput = document.getElementById('findArraySumOutput');
    averageOutput = document.getElementById('findArrayAverageOutput');

    // Output the sum to the element
    sumOutput.innerHTML += sum;
    averageOutput.innerHTML += average.toFixed(2);
    
}


/*
FindRangeOfNumbers
    set smallest to first array element
    set largest to first array element
    declare array of numbers
    FOR index 0 to length of array
        IF array[index] < smallest THEN
            smallest = array[index]
        ELSE IF array[index] > largest THEN
            largest = array[index]
        ENDIF
    ENDFOR
    output smallest and largest
END
*/
function findRangeOfNumbers() {
    // Declare variables
    var sum = 0;
    var average;
    var numbers;
    var smallestOutput;
    var largestOutput;
    var index;
    var smallest;
    var largest;
    
    // Populate the array
    numbers = [402, 107, 8, 183, 517, 577, 688, 945, 141, 194, 613, 966, 928, 
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
               
    smallest = numbers[0];
    largest  = numbers[0];
    
    
    for (index = 0; index < numbers.length; index++) {
        if (numbers[index] < smallest) {
            smallest = numbers[index];
        } else if (numbers[index] > largest) {
            largest = numbers[index];
        }
    }
    
    // Get access to the output HTML element
    smallestOutput = document.getElementById('findRangeSmallest');
    largestOutput  = document.getElementById('findRangeLargest');

    // Output the sum to the element
    smallestOutput.innerHTML += smallest;
    largestOutput.innerHTML += largest;
    
}


/*
    This is file /unit5/arrayExamples.js 
    It contains the JavaScript code for
    
    "Array Examples" File: /unit5/arrayExamples.html
*/
function arrayExamples() {
    // Your code goes in here.
    var output;
    
    output = document.getElementById('outputDiv');
    
    output.innerHTML = "The JavaScript file for this page is: "
            + "\"/unit5/jsFiles/arrayExamples.js\"";
}

function examGrid() {
    var column;
    var row;

    column = 0;
    while (column < 2) {
        row = 0;
        while (row < 2) {
            document.write("Y");
            row++;
        }
        document.write("<br />");
        column++;
    }
}
