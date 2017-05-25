var PARAMS = {};

PARAMS.codeImage = [];
PARAMS.codeImageIndex = 0;
PARAMS.codeContext = null;
PARAMS.codeExplanation = null;
PARAMS.outputElement = null;
PARAMS.counterValues = [];
PARAMS.codeImageLineHeight = 27;
PARAMS.codeImageFirstLine = 10;
PARAMS.currentCodeLine = 9;
PARAMS.currentFrame = 0;
PARAMS.frameFunctions = [];
PARAMS.fadeImages = [];
PARAMS.twoImage = null;
PARAMS.threeImage = null;
PARAMS.fiveImage = null;
PARAMS.arrowImage = null;
PARAMS.pathPosition = 0;
PARAMS.xcoord = 0;
PARAMS.ycoord = 0;
PARAMS.intervalIdOne = null;
PARAMS.intervalIdTwo = null;
PARAMS.intervalIdThree = null;
PARAMS.intervalIdFour = null;
PARAMS.animationOnePath = [
    [397, 365],
    [401, 352],
    [408, 339],
    [412, 329],
    [418, 314],
    [423, 303],
    [428, 289],
    [432, 274],
    [436, 259],
    [438, 245],
    [441, 232],
    [443, 214],
    [445, 200],
    [446, 185],
    [445, 167],
    [444, 147],
    [442, 128],
    [435, 109],
    [428, 93],
    [419, 79],
    [413, 68],
    [406, 55],
    [398, 44]
];

PARAMS.animationTwoPath = [
    [435, 365],
    [442, 353],
    [452, 342],
    [462, 330],
    [472, 318],
    [483, 306],
    [491, 292],
    [503, 279],
    [513, 264],
    [519, 249],
    [527, 233],
    [533, 215],
    [536, 197],
    [542, 181],
    [545, 163],
    [547, 147],
    [550, 133],
    [550, 115],
    [546, 93],
    [544, 76],
    [537, 62],
    [531, 44]
];

PARAMS.animationThreePath = [
    [224, 150],
    [222, 151],
    [230, 151],
    [236, 165],
    [243, 179],
    [251, 192],
    [258, 208],
    [264, 223],
    [272, 240],
    [280, 256],
    [289, 275],
    [294, 292],
    [300, 311],
    [306, 330],
    [306, 348],
    [309, 366],
    [297, 368],
    [283, 368],
    [270, 368],
    [257, 368],
    [243, 370]
//    [231, 370],
//    [221, 370],
//    [202, 370],
//    [186, 370],
//    [173, 370],
//    [156, 370],
//    [146, 370]
];

function drawCodePointer(line) {
    
    var arrowX = 2;
    var arrowY = 3 + (PARAMS.codeImageLineHeight * (line - 1));
    var height = 23;
    var boxWidth = 26;
    var arrowWidth = 15;
    var arrowHeight = 12;
    
    PARAMS.codeContext.fillStyle = "rgba(255, 0, 0, 0.4)";

    PARAMS.codeContext.beginPath();
    PARAMS.codeContext.moveTo(arrowX, arrowY);
    PARAMS.codeContext.lineTo(arrowX, arrowY + height);
    PARAMS.codeContext.lineTo(arrowX + boxWidth, arrowY + height);
    PARAMS.codeContext.lineTo(arrowX + boxWidth + arrowWidth, arrowY + arrowHeight);
    PARAMS.codeContext.lineTo(arrowX + boxWidth, arrowY);
    PARAMS.codeContext.fill();

}

function animateParamPassingOne() {
    
    if (PARAMS.pathPosition >= PARAMS.animationOnePath.length) {
        clearInterval(PARAMS.intervalIdOne);
        drawCodePointer(14);
        PARAMS.codeContext.drawImage(PARAMS.arrowImage, 230, 88);
        return;
    }
    
    PARAMS.xcoord = PARAMS.animationOnePath[PARAMS.pathPosition][0] - 15;
    PARAMS.ycoord = PARAMS.animationOnePath[PARAMS.pathPosition][1] - 27;
    
    
    PARAMS.pathPosition++;
            
    PARAMS.codeContext.drawImage(PARAMS.codeImage[PARAMS.codeImageIndex], 0, 0);    
    PARAMS.codeContext.drawImage(PARAMS.twoImage, PARAMS.xcoord, PARAMS.ycoord);
 
}

function animateParamPassingTwo() {
    
    if (PARAMS.pathPosition >= PARAMS.animationTwoPath.length) {
        clearInterval(PARAMS.intervalIdTwo);
        PARAMS.codeContext.drawImage(PARAMS.twoImage, 383, 17);
        PARAMS.codeContext.drawImage(PARAMS.arrowImage, 230, 88);
        drawCodePointer(2);
        return;
    }
    
    PARAMS.xcoord = PARAMS.animationTwoPath[PARAMS.pathPosition][0] - 15;
    PARAMS.ycoord = PARAMS.animationTwoPath[PARAMS.pathPosition][1] - 27;
    
    
    PARAMS.pathPosition++;
    
    
    PARAMS.codeContext.drawImage(PARAMS.codeImage[PARAMS.codeImageIndex], 0, 0);  
    PARAMS.codeContext.drawImage(PARAMS.twoImage, 383, 17);  
    PARAMS.codeContext.drawImage(PARAMS.threeImage, PARAMS.xcoord, PARAMS.ycoord);
 
}

function animateParamPassingThree() {
    
    if (PARAMS.pathPosition >= PARAMS.animationThreePath.length) {
        clearInterval(PARAMS.intervalIdThree);
        PARAMS.codeContext.drawImage(PARAMS.arrowImage, 230, 88);
        //PARAMS.codeContext.drawImage(PARAMS.fiveImage, 180, 234);
        //PARAMS.codeContext.drawImage(PARAMS.fiveImage, 501, 396);
        drawCodePointer(6);
        return;
    }
    
    PARAMS.xcoord = PARAMS.animationThreePath[PARAMS.pathPosition][0] - 15;
    PARAMS.ycoord = PARAMS.animationThreePath[PARAMS.pathPosition][1] - 27;
    
    
    PARAMS.pathPosition++;
    
    
    PARAMS.codeContext.drawImage(PARAMS.codeImage[PARAMS.codeImageIndex], 0, 0);    
    PARAMS.codeContext.drawImage(PARAMS.twoImage, 383, 17);
    PARAMS.codeContext.drawImage(PARAMS.twoImage, 252, 71);
    PARAMS.codeContext.drawImage(PARAMS.threeImage, 516, 17);
    PARAMS.codeContext.drawImage(PARAMS.threeImage, 384, 71);
    PARAMS.codeContext.drawImage(PARAMS.arrowImage, 230, 88);
    PARAMS.codeContext.drawImage(PARAMS.fiveImage, 173, 45);
    PARAMS.codeContext.drawImage(PARAMS.fiveImage, 209, 99);
    PARAMS.codeContext.drawImage(PARAMS.fiveImage, 126, 72);
    PARAMS.codeContext.drawImage(PARAMS.fiveImage, PARAMS.xcoord, PARAMS.ycoord);
 
}

function animateParamPassingFour() {
    
    if (PARAMS.pathPosition + 1 >= PARAMS.fadeImages.length) {
        clearInterval(PARAMS.intervalIdFour);
        PARAMS.codeImageIndex = 1;
        PARAMS.codeContext.drawImage(PARAMS.codeImage[PARAMS.codeImageIndex], 0, 0);
        PARAMS.codeContext.drawImage(PARAMS.arrowImage, 230, 88);
        PARAMS.codeContext.drawImage(PARAMS.fiveImage, 180, 234);
        PARAMS.codeContext.drawImage(PARAMS.fiveImage, 501, 396);
        PARAMS.codeContext.drawImage(PARAMS.fiveImage, 131, 343);
        drawCodePointer(6);
        return;
    }
    
    PARAMS.xcoord = 221;
    PARAMS.ycoord = 348;
    
    PARAMS.pathPosition++;
    
      
    //PARAMS.codeContext.drawImage(PARAMS.arrowImage, 230, 88);
    PARAMS.codeContext.drawImage(PARAMS.fadeImages[PARAMS.pathPosition], 
            PARAMS.xcoord, PARAMS.ycoord);
    PARAMS.codeContext.drawImage(PARAMS.fiveImage, 230, 343);
 
}



function animationStartOne() {
    
    PARAMS.pathPosition = 0;

    PARAMS.intervalIdOne = setInterval(animateParamPassingOne, 50);
    
   
}

function animationStartTwo() {
    
    PARAMS.pathPosition = 0;
    
    PARAMS.intervalIdTwo = setInterval(animateParamPassingTwo, 50);
    
}

function animationStartThree() {
    
    PARAMS.pathPosition = 0;
    
    PARAMS.intervalIdThree = setInterval(animateParamPassingThree, 50);
    
}

function animationStartFour() {
    
    PARAMS.pathPosition = 0;
    
    PARAMS.intervalIdFour = setInterval(animateParamPassingFour, 300);
    
}

/*
    Go to Line 9 Action Frame
*/
PARAMS.frameFunctions[0] = function () {
    
    PARAMS.codeExplanation.innerHTML = "Start of program.";
    drawCodePointer(9);
};

/*
    Line 9 to Line 10 Action Frame
*/
PARAMS.frameFunctions[1] = function () {
    
    PARAMS.codeExplanation.innerHTML = "Declare a variable for the returned data.";
    drawCodePointer(10);
};

/*
    Line 10 to Line 11 Action Frame
*/
PARAMS.frameFunctions[2] = function () {
    
    PARAMS.codeExplanation.innerHTML = "Declare the output element variable.";
    drawCodePointer(11);
};

/*
    Line 11 to Line 12
*/
PARAMS.frameFunctions[3] = function () {
    
    PARAMS.codeExplanation.innerHTML = "Get the output element from the" 
            + " HTML page.";
    drawCodePointer(12);
};

/*
    Line 12 to Line 14 Action Frame
*/
PARAMS.frameFunctions[4] = function () {
    
    PARAMS.codeExplanation.innerHTML = "Get ready to pass parameters and" 
            + " jump to the function.";
    PARAMS.codeContext.drawImage(PARAMS.arrowImage, 230, 88);
    drawCodePointer(14);
};

/*
    Line 14 Action Frame
*/
PARAMS.frameFunctions[5] = function () {

    PARAMS.codeExplanation.innerHTML = "Get ready to pass parameters and" 
            + " jump to the function.";
    
    animationStartOne();
 
};

/*
    Line 14 to Line 2 Action Frame
*/
PARAMS.frameFunctions[6] = function () {
    
    PARAMS.codeExplanation.innerHTML = "Start of function after parameters" 
            + " have been passed";
    
    animationStartTwo();

};

/*
    Line 2 to Line 3 Action Frame
*/
PARAMS.frameFunctions[7] = function () {
    
    PARAMS.codeExplanation.innerHTML = "Declare the total variable.";
    PARAMS.codeContext.drawImage(PARAMS.twoImage, 383, 17);
    PARAMS.codeContext.drawImage(PARAMS.twoImage, 252, 71);
    PARAMS.codeContext.drawImage(PARAMS.threeImage, 516, 17);
    PARAMS.codeContext.drawImage(PARAMS.threeImage, 384, 71);
    PARAMS.codeContext.drawImage(PARAMS.arrowImage, 230, 88);
    drawCodePointer(3);
    
};

/*
    Line 3 to Line 4 Action Frame
*/
PARAMS.frameFunctions[8] = function () {
    
    PARAMS.codeExplanation.innerHTML = "Perform the calculation and assign" 
            + " the results to total.";
    PARAMS.codeContext.drawImage(PARAMS.twoImage, 383, 17);
    PARAMS.codeContext.drawImage(PARAMS.twoImage, 252, 71);
    PARAMS.codeContext.drawImage(PARAMS.threeImage, 516, 17);
    PARAMS.codeContext.drawImage(PARAMS.threeImage, 384, 71);
    PARAMS.codeContext.drawImage(PARAMS.arrowImage, 230, 88);
    drawCodePointer(4);

};

/*
    Line 4 to Line 5 Action Frame
    
*/
PARAMS.frameFunctions[9] = function () {
    
    PARAMS.codeExplanation.innerHTML = "Return the value in total to the" 
            + " calling funtion.";
    
    //Show output here
    //PARAMS.outputElement.innerHTML = "Total: 5";
    
    PARAMS.codeContext.drawImage(PARAMS.twoImage, 383, 17);
    PARAMS.codeContext.drawImage(PARAMS.twoImage, 252, 71);
    PARAMS.codeContext.drawImage(PARAMS.threeImage, 516, 17);
    PARAMS.codeContext.drawImage(PARAMS.threeImage, 384, 71);
    PARAMS.codeContext.drawImage(PARAMS.arrowImage, 230, 88);
    PARAMS.codeContext.drawImage(PARAMS.fiveImage, 173, 45);
    PARAMS.codeContext.drawImage(PARAMS.fiveImage, 209, 99);
    PARAMS.codeContext.drawImage(PARAMS.fiveImage, 126, 72);
    drawCodePointer(5);

};

/*
    Line 5 to Line 6 Action Frame
*/
PARAMS.frameFunctions[10] = function () {
    
    PARAMS.codeExplanation.innerHTML = "End of the function, about to go back" 
            + " to the first function.";
    
    animationStartThree();
    
};

/*
    Line 5 to Line 6 Action Frame
*/
PARAMS.frameFunctions[11] = function () {
    
    PARAMS.codeExplanation.innerHTML = "End of the function, about to go back" 
            + " to the first function.";
    
    
    animationStartFour();
    
    
};

/*
    Line 6 to Line 14 Action Frame
*/
PARAMS.frameFunctions[12] = function () {
    
    PARAMS.codeExplanation.innerHTML = "We're back!";
    PARAMS.codeContext.drawImage(PARAMS.arrowImage, 230, 88);
    PARAMS.codeContext.drawImage(PARAMS.fiveImage, 131, 343);
    PARAMS.codeContext.drawImage(PARAMS.fiveImage, 180, 234);
    PARAMS.codeContext.drawImage(PARAMS.fiveImage, 501, 396);
    drawCodePointer(14);
    
};

/*
    Line 14 to Line 16 Action Frame
*/
PARAMS.frameFunctions[13] = function () {
    
    PARAMS.codeExplanation.innerHTML = "Display the results on the page.";
    PARAMS.codeContext.drawImage(PARAMS.arrowImage, 230, 88);
    PARAMS.codeContext.drawImage(PARAMS.fiveImage, 131, 343);
    PARAMS.codeContext.drawImage(PARAMS.fiveImage, 180, 234);
    PARAMS.codeContext.drawImage(PARAMS.fiveImage, 501, 396);
    drawCodePointer(16);
    
};

/*
    Line 16 to Line 17 Action Frame
*/
PARAMS.frameFunctions[14] = function () {
    
    PARAMS.codeExplanation.innerHTML = "All done!";
    PARAMS.outputElement.innerHTML = "Total: 5";
    PARAMS.codeContext.drawImage(PARAMS.arrowImage, 230, 88);
    PARAMS.codeContext.drawImage(PARAMS.fiveImage, 131, 343);
    PARAMS.codeContext.drawImage(PARAMS.fiveImage, 180, 234);
    PARAMS.codeContext.drawImage(PARAMS.fiveImage, 501, 396);
    drawCodePointer(17);
    
};


function drawCodeImage() {
    PARAMS.codeContext.clearRect(0, 0, 521, 595);
    PARAMS.codeContext.drawImage(PARAMS.codeImage[PARAMS.codeImageIndex], 0, 0);
    
}

function makePassingReturningDemo() {
    
    
    PARAMS.codeContext = document.getElementById('codeImage').getContext('2d');
    PARAMS.codeExplanation = document.getElementById('codeExplanation');
    PARAMS.outputElement = document.getElementById("outputP");
    
    PARAMS.twoImage = new Image();
    PARAMS.twoImage.src = "resources/2.png";
    PARAMS.threeImage = new Image();
    PARAMS.threeImage.src = "resources/3.png";
    PARAMS.fiveImage = new Image();
    PARAMS.fiveImage.src = "resources/5.png";
    PARAMS.arrowImage = new Image();
    PARAMS.arrowImage.src = "resources/outputArrow2.png";
    PARAMS.codeImage[0] = new Image();
    PARAMS.codeImage[0].src = "resources/returningValue.png";
    PARAMS.codeImage[1] = new Image();
    PARAMS.codeImage[1].src = "resources/returningValue2.jpg";
    
    PARAMS.fadeImages[0] = new Image();
    PARAMS.fadeImages[0].src = "resources/functionfade1.jpg";
    PARAMS.fadeImages[1] = new Image();
    PARAMS.fadeImages[1].src = "resources/functionfade2.jpg";
    PARAMS.fadeImages[2] = new Image();
    PARAMS.fadeImages[2].src = "resources/functionfade3.jpg";
    PARAMS.fadeImages[3] = new Image();
    PARAMS.fadeImages[3].src = "resources/functionfade4.jpg";
    PARAMS.fadeImages[4] = new Image();
    PARAMS.fadeImages[4].src = "resources/functionfade5.jpg";
    PARAMS.fadeImages[5] = new Image();
    PARAMS.fadeImages[5].src = "resources/functionfade6.jpg";
    PARAMS.fadeImages[6] = new Image();
    PARAMS.fadeImages[6].src = "resources/functionfade7.jpg";
    PARAMS.fadeImages[7] = new Image();
    PARAMS.fadeImages[7].src = "resources/functionfade8.jpg";
    PARAMS.fadeImages[8] = new Image();
    PARAMS.fadeImages[8].src = "resources/functionfade9.jpg";
    PARAMS.fadeImages[9] = new Image();
    PARAMS.fadeImages[9].src = "resources/functionfade10.jpg";

    
    PARAMS.codeImage[PARAMS.codeImageIndex].onload = function () {
        drawCodeImage();
    };

}

function drawCurrentFrame() {

    PARAMS.codeContext.drawImage(PARAMS.codeImage[PARAMS.codeImageIndex], 0, 0);    
    
    PARAMS.frameFunctions[PARAMS.currentFrame]();
    
}

function resetFrames() {
    PARAMS.currentFrame = 0;
    PARAMS.codeImageIndex = 0;
    PARAMS.codeExplanation.innerHTML = "";
    PARAMS.outputElement.innerHTML = "";
    drawCurrentFrame();
    
    PARAMS.currentFrame++;
}

/*
    If we're not in a loop then just increment
    If in a loop then 
*/
function nextFrame() {
    
    if (PARAMS.currentFrame < PARAMS.frameFunctions.length) {
        drawCurrentFrame();
        PARAMS.currentFrame++;
    } else {
        resetFrames();
    }
   

}
