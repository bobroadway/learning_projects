var PARAMS = {};

PARAMS.codeImage = null;
PARAMS.codeContext = null;
PARAMS.codeExplanation = null;
PARAMS.outputElement = null;
PARAMS.counterValues = [];
PARAMS.codeImageLineHeight = 27;
PARAMS.codeImageFirstLine = 10;
PARAMS.currentCodeLine = 9;
PARAMS.currentFrame = 0;
PARAMS.frameFunctions = [];
PARAMS.twoImage = null;
PARAMS.threeImage = null;
PARAMS.fiveImage = null;
PARAMS.arrowImage = null;
PARAMS.pathPosition = 0;
PARAMS.xcoord = 0;
PARAMS.ycoord = 0;
PARAMS.intervalIdOne = null;
PARAMS.intervalIdTwo = null;
PARAMS.animationOnePath = [
    [288, 393],
    [292, 386],
    [297, 378],
    [302, 370],
    [306, 364],
    [310, 356],
    [314, 350],
    [320, 342],
    [328, 333],
    [338, 318],
    [345, 302],
    [351, 289],
    [357, 274],
    [361, 259],
    [366, 241],
    [375, 221],
    [381, 201],
    [387, 181],
    [391, 161],
    [394, 141],
    [397, 118],
    [398, 100],
    [399, 86],
    [400, 68],
    [402, 57],
    [403, 44]
];

PARAMS.animationTwoPath = [
    [319, 393],
    [324, 386],
    [332, 378],
    [337, 370],
    [348, 364],
    [356, 356],
    [363, 350],
    [373, 342],
    [382, 333],
    [388, 318],
    [398, 302],
    [413, 289],
    [421, 274],
    [432, 259],
    [441, 241],
    [450, 221],
    [460, 201],
    [466, 181],
    [474, 161],
    [483, 141],
    [490, 118],
    [500, 100],
    [505, 86],
    [510, 68],
    [516, 57],
    [520, 49],
    [524, 44]
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
        drawCodePointer(2);
        return;
    }
    
    PARAMS.xcoord = PARAMS.animationOnePath[PARAMS.pathPosition][0] - 20;
    PARAMS.ycoord = PARAMS.animationOnePath[PARAMS.pathPosition][1] - 27;
    
    
    PARAMS.pathPosition++;
            
    PARAMS.codeContext.drawImage(PARAMS.codeImage, 0, 0);    
    PARAMS.codeContext.drawImage(PARAMS.twoImage, PARAMS.xcoord, PARAMS.ycoord);
 
}

function animateParamPassingTwo() {
    
    if (PARAMS.pathPosition >= PARAMS.animationTwoPath.length) {
        clearInterval(PARAMS.intervalIdTwo);
        PARAMS.codeContext.drawImage(PARAMS.twoImage, 383, 17);
        drawCodePointer(2);
        return;
    }
    
    PARAMS.xcoord = PARAMS.animationTwoPath[PARAMS.pathPosition][0] - 15;
    PARAMS.ycoord = PARAMS.animationTwoPath[PARAMS.pathPosition][1] - 27;
    
    
    PARAMS.pathPosition++;
    
    
    PARAMS.codeContext.drawImage(PARAMS.codeImage, 0, 0);
    PARAMS.codeContext.drawImage(PARAMS.twoImage, 383, 17);  
    PARAMS.codeContext.drawImage(PARAMS.threeImage, PARAMS.xcoord, PARAMS.ycoord);
 
}


function animationStartOne() {
    
    PARAMS.pathPosition = 0;
    PARAMS.codeContext.fillStyle = "rgba(0, 100, 255, 0.3)";
    PARAMS.intervalIdOne = setInterval(animateParamPassingOne, 50);
    
   
}

function animationStartTwo() {
    
    PARAMS.pathPosition = 0;
    PARAMS.codeContext.fillStyle = "rgba(0, 100, 255, 0.3)";
    PARAMS.intervalIdTwo = setInterval(animateParamPassingTwo, 50);
    
   
}

function drawCodeImage() {
    PARAMS.codeContext.clearRect(0, 0, 521, 595);
    PARAMS.codeContext.drawImage(PARAMS.codeImage, 0, 0);
    
}


/*
    Go to Line 13 Action Frame
*/
PARAMS.frameFunctions[0] = function () {
    
    PARAMS.codeExplanation.innerHTML = "Start of program.";
    drawCodePointer(13);
};

/*
    Line 13 to Line 15 Action Frame
*/
PARAMS.frameFunctions[1] = function () {
    
    PARAMS.codeExplanation.innerHTML = "Get ready to pass the arguments to the" 
            + " parameters and call the other function.";
    drawCodePointer(15);
};

/*
    Line 15 to Line 2 Action Frame
*/
PARAMS.frameFunctions[2] = function () {
    
    PARAMS.codeExplanation.innerHTML = "Pass the arguments to the parameters" 
            + " and jump to the function.";
    
    //Miracle occurs here
    animationStartOne();
    drawCodePointer(15);
};

/*
    Second animatione
*/
PARAMS.frameFunctions[3] = function () {
    
    PARAMS.codeExplanation.innerHTML = "Pass the arguments to the parameters" 
            + " and jump to the function.";
    
    //Another Miracle occurs here
    animationStartTwo();
    drawCodePointer(2);
};

/*
    Line 2 to Line 3 Action Frame
*/
PARAMS.frameFunctions[4] = function () {
    
    PARAMS.codeExplanation.innerHTML = "Declare the total variable.";
    animateParamPassingTwo();
    drawCodeImage();
    PARAMS.codeContext.drawImage(PARAMS.twoImage, 383, 17);
    PARAMS.codeContext.drawImage(PARAMS.threeImage, 509, 17);
    PARAMS.codeContext.drawImage(PARAMS.twoImage, 253, 153);
    PARAMS.codeContext.drawImage(PARAMS.threeImage, 395, 153);
    drawCodePointer(3);
};

/*
    Line 3 to Line 4 Action Frame
*/
PARAMS.frameFunctions[5] = function () {

    PARAMS.codeExplanation.innerHTML = "Declare the output element variable.";
    PARAMS.codeContext.drawImage(PARAMS.twoImage, 383, 17);
    PARAMS.codeContext.drawImage(PARAMS.threeImage, 509, 17);
    PARAMS.codeContext.drawImage(PARAMS.twoImage, 253, 153);
    PARAMS.codeContext.drawImage(PARAMS.threeImage, 395, 153);
    
    drawCodePointer(4);
};

/*
    Line 4 to Line 5 Action Frame
*/
PARAMS.frameFunctions[6] = function () {
    
    PARAMS.codeExplanation.innerHTML = "Get the output element from the HTML page.";
    PARAMS.codeContext.drawImage(PARAMS.twoImage, 383, 17);
    PARAMS.codeContext.drawImage(PARAMS.threeImage, 509, 17);
    PARAMS.codeContext.drawImage(PARAMS.twoImage, 253, 153);
    PARAMS.codeContext.drawImage(PARAMS.threeImage, 395, 153);
    drawCodePointer(5);

};

/*
    Line 5 to Line 7 Action Frame
*/
PARAMS.frameFunctions[7] = function () {
    
    PARAMS.codeExplanation.innerHTML = "Perform the calculation.";
    PARAMS.codeContext.drawImage(PARAMS.twoImage, 383, 17);
    PARAMS.codeContext.drawImage(PARAMS.threeImage, 509, 17);
    PARAMS.codeContext.drawImage(PARAMS.twoImage, 253, 153);
    PARAMS.codeContext.drawImage(PARAMS.threeImage, 395, 153);
    PARAMS.codeContext.drawImage(PARAMS.arrowImage, 235, 75);
    drawCodePointer(7);
    
};

/*
    Line 7 to Line 9 Action Frame
*/
PARAMS.frameFunctions[8] = function () {
    
    PARAMS.codeExplanation.innerHTML = "Output the total to the page.";
    PARAMS.codeContext.drawImage(PARAMS.twoImage, 383, 17);
    PARAMS.codeContext.drawImage(PARAMS.threeImage, 509, 17);
    PARAMS.codeContext.drawImage(PARAMS.fiveImage, 131, 152);
    PARAMS.codeContext.drawImage(PARAMS.fiveImage, 502, 205);
    PARAMS.codeContext.drawImage(PARAMS.fiveImage, 176, 45);
    PARAMS.codeContext.drawImage(PARAMS.twoImage, 253, 153);
    PARAMS.codeContext.drawImage(PARAMS.threeImage, 395, 153);
    PARAMS.codeContext.drawImage(PARAMS.arrowImage, 235, 75);
    drawCodePointer(9);

};

/*
    Line 9 to Line 10 Action Frame
    
*/
PARAMS.frameFunctions[9] = function () {
    
    PARAMS.codeExplanation.innerHTML = "End of function, return to the" 
            + " first function.";
    
    //Show output here
    PARAMS.outputElement.innerHTML = "Total: 5";
    
    PARAMS.codeContext.drawImage(PARAMS.twoImage, 383, 17);
    PARAMS.codeContext.drawImage(PARAMS.threeImage, 509, 17);
    PARAMS.codeContext.drawImage(PARAMS.fiveImage, 131, 152);
    PARAMS.codeContext.drawImage(PARAMS.fiveImage, 502, 205);
    PARAMS.codeContext.drawImage(PARAMS.fiveImage, 176, 45);
    PARAMS.codeContext.drawImage(PARAMS.twoImage, 253, 153);
    PARAMS.codeContext.drawImage(PARAMS.threeImage, 395, 153);
    PARAMS.codeContext.drawImage(PARAMS.arrowImage, 235, 75);
    drawCodePointer(10);

};

/*
    Line 10 to Line 15 Action Frame
*/
PARAMS.frameFunctions[10] = function () {
    
    PARAMS.codeExplanation.innerHTML = "We're back, just keep going.";
    
    PARAMS.codeContext.drawImage(PARAMS.twoImage, 383, 17);
    PARAMS.codeContext.drawImage(PARAMS.threeImage, 509, 17);
    PARAMS.codeContext.drawImage(PARAMS.fiveImage, 131, 152);
    PARAMS.codeContext.drawImage(PARAMS.fiveImage, 502, 205);
    PARAMS.codeContext.drawImage(PARAMS.fiveImage, 176, 45);
    PARAMS.codeContext.drawImage(PARAMS.twoImage, 253, 153);
    PARAMS.codeContext.drawImage(PARAMS.threeImage, 395, 153);
    PARAMS.codeContext.drawImage(PARAMS.arrowImage, 235, 75);
    drawCodePointer(15);
    
};

/*
    Line 15 to Line 17 Action Frame
*/
PARAMS.frameFunctions[11] = function () {
    
    PARAMS.codeExplanation.innerHTML = "All done.";
    PARAMS.codeContext.drawImage(PARAMS.twoImage, 383, 17);
    PARAMS.codeContext.drawImage(PARAMS.threeImage, 509, 17);
    PARAMS.codeContext.drawImage(PARAMS.fiveImage, 131, 152);
    PARAMS.codeContext.drawImage(PARAMS.fiveImage, 502, 205);
    PARAMS.codeContext.drawImage(PARAMS.fiveImage, 176, 45);
    PARAMS.codeContext.drawImage(PARAMS.twoImage, 253, 153);
    PARAMS.codeContext.drawImage(PARAMS.threeImage, 395, 153);
    PARAMS.codeContext.drawImage(PARAMS.arrowImage, 235, 75);
    drawCodePointer(17);
    
};

function makePassingParamsDemo() {
    
    
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
    PARAMS.arrowImage.src = "resources/outputArrow.png";
    
    PARAMS.codeImage = new Image();
    PARAMS.codeImage.src = "resources/passingParams.png";
    PARAMS.codeImage.onload = function () {
        drawCodeImage();
    };

}

function drawCurrentCodeLine() {
    
    
    var arrowX = 2;
    var arrowY = 3 + (PARAMS.codeImageLineHeight * PARAMS.currentCodeLine);
    
    var height = 23;
    var boxWidth = 26;
    var arrowWidth = 15;
    var arrowHeight = 12;
    
    PARAMS.codeContext.fillStyle = "rgba(255, 0, 0, 0.5)";
    //PARAMS.codeContext.beginPath();
    //PARAMS.codeContext.arc(30, lineY, 10, 0, Math.PI * 2, true);
    //PARAMS.codeContext.fill();
    
    PARAMS.codeContext.beginPath();
    PARAMS.codeContext.moveTo(arrowX, arrowY);
    PARAMS.codeContext.lineTo(arrowX, arrowY + height);
    PARAMS.codeContext.lineTo(arrowX + boxWidth, arrowY + height);
    PARAMS.codeContext.lineTo(arrowX + boxWidth + arrowWidth, arrowY + arrowHeight);
    PARAMS.codeContext.lineTo(arrowX + boxWidth, arrowY);
    PARAMS.codeContext.fill();
}

function drawCurrentFrame() {

    PARAMS.codeContext.drawImage(PARAMS.codeImage, 0, 0);    
    
    PARAMS.frameFunctions[PARAMS.currentFrame]();
    
}

function resetFrames() {
    PARAMS.currentFrame = 0;
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
