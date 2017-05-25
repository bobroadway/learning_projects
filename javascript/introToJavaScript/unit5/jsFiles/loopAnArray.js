var LOOPING = {};

LOOPING.baseImage = null;
LOOPING.slideImages = [];
LOOPING.slidesContext = null;
LOOPING.currentImage = 0;


function drawBaseImage() {
    LOOPING.currentImage = 0;
    LOOPING.slidesContext.clearRect(0, 0, 816, 608);
    LOOPING.slidesContext.drawImage(LOOPING.baseImage, 0, 0);
    
}

function drawImage(index) {
    LOOPING.slidesContext.drawImage(LOOPING.slideImages[index], 0, 0);
}


function resetFrames() {
    LOOPING.currentImage = 0;
    drawBaseImage();
}

/*
    If we're not in a loop then just increment

*/
function nextFrame() {
    
    if (LOOPING.currentImage < LOOPING.slideImages.length) {
        drawImage(LOOPING.currentImage);
        LOOPING.currentImage++;
    } else {
        resetFrames();
    }
   
}

function loadDemoImages() {
    
    LOOPING.baseImage = new Image();
    LOOPING.baseImage.src = "resources/loopAnArray01.png";
    
    
    LOOPING.slideImages[0] = new Image();
    LOOPING.slideImages[0].src = "resources/loopAnArray02.png";

    LOOPING.slideImages[1] = new Image();
    LOOPING.slideImages[1].src = "resources/loopAnArray03.png";

    LOOPING.slideImages[2] = new Image();
    LOOPING.slideImages[2].src = "resources/loopAnArray04.png";

    LOOPING.slideImages[3] = new Image();
    LOOPING.slideImages[3].src = "resources/loopAnArray05.png";

    LOOPING.slideImages[4] = new Image();
    LOOPING.slideImages[4].src = "resources/loopAnArray06.png";

    LOOPING.slideImages[5] = new Image();
    LOOPING.slideImages[5].src = "resources/loopAnArray07.png";

    LOOPING.slideImages[6] = new Image();
    LOOPING.slideImages[6].src = "resources/loopAnArray08.png";

    LOOPING.slideImages[7] = new Image();
    LOOPING.slideImages[7].src = "resources/loopAnArray09.png";

    LOOPING.slideImages[8] = new Image();
    LOOPING.slideImages[8].src = "resources/loopAnArray09.png";

    LOOPING.slideImages[8] = new Image();
    LOOPING.slideImages[8].src = "resources/loopAnArray10.png";

}

function makeLoopingDemo() {
    
    
    LOOPING.slidesContext = 
            document.getElementById('loopAnArrayCanvas').getContext('2d');
        
    loadDemoImages();
    
    LOOPING.baseImage.onload = function () {
        drawBaseImage();
    };
    
}

/*
    This is file /unit5/loopAnArray.js 
    It contains the JavaScript code for
    
    "Looping Through an Array" File: /unit5/loopAnArray.html
*/
function loopAnArray() {

    // Declare Constants
    var ZERO = 0;

    // Declare Variables
    var sampleArray;
    var output;
    var index;
    var outputString;
    var element;
    
    // Assign initial values
    outputString = "";
    sampleArray = [10, 34, 65, 22, 98];
    
    // Loop through the array

    for (index = ZERO; index < sampleArray.length; index++) {
        outputString += "<li>";
        outputString += sampleArray[index];
        outputString += "</li>";
    }

    output = document.getElementById('outputList');
    
    output.innerHTML = outputString;
}