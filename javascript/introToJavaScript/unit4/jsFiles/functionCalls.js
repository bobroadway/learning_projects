var CALLS = {};

CALLS.codeImage = null;
CALLS.codeContext = null;
CALLS.outputText = [];
CALLS.codeExplanation = null;
CALLS.outputContext = null;
CALLS.counterValues = [];
CALLS.codeImageLineHeight = 27;
CALLS.codeImageFirstLine = 10;
CALLS.currentCodeLine = 9;
CALLS.currentFrame = 0;
CALLS.frameFunctions = [];

function drawCodePointer(line) {
    
    var arrowX = 2;
    var arrowY = 3 + (CALLS.codeImageLineHeight * (line - 1));
    var height = 23;
    var boxWidth = 26;
    var arrowWidth = 15;
    var arrowHeight = 12;
    
    CALLS.codeContext.fillStyle = "rgba(255,0,0, 0.4)";

    CALLS.codeContext.beginPath();
    CALLS.codeContext.moveTo(arrowX, arrowY);
    CALLS.codeContext.lineTo(arrowX, arrowY + height);
    CALLS.codeContext.lineTo(arrowX + boxWidth, arrowY + height);
    CALLS.codeContext.lineTo(arrowX + boxWidth + arrowWidth, arrowY + arrowHeight);
    CALLS.codeContext.lineTo(arrowX + boxWidth, arrowY);
    CALLS.codeContext.fill();

}

/*
    Go to Line 1 Action Frame
*/
CALLS.frameFunctions[0] = function () {
    
    CALLS.codeExplanation.innerHTML = "Start of program.";
    drawCodePointer(9);
};

/*
    Line 1 to Line 2 Action Frame
*/
CALLS.frameFunctions[1] = function () {
    
    CALLS.codeExplanation.innerHTML = "Declare a variable.";
    drawCodePointer(10);
};

/*
    Line 2 to Line 3 Action Frame
*/
CALLS.frameFunctions[2] = function () {
    
    CALLS.codeExplanation.innerHTML = "Give the variable a value.";
    drawCodePointer(11);
};

/*
    Line 3 to Line 4 Action Frame
*/
CALLS.frameFunctions[3] = function () {
    
    CALLS.codeExplanation.innerHTML = "Write the greeting to the page.";
    drawCodePointer(12);
};

/*
    Line 4 to Line 7 Action Frame
*/
CALLS.frameFunctions[4] = function () {

    CALLS.codeExplanation.innerHTML = "Here's the function call. Look for the function on this page first.";
    CALLS.outputContext.drawImage(CALLS.outputText[0], 10, 10);
    
    drawCodePointer(15);
};

/*
    Line 7 to Line 12 Action Frame
*/
CALLS.frameFunctions[5] = function () {
    
    CALLS.codeExplanation.innerHTML = "Start of the <code>justCallMe()</code> function. We jumped here from <code>theMainline()</code> function.";
    drawCodePointer(1);

};

/*
    Line 12 to Line 13 Action Frame
*/
CALLS.frameFunctions[6] = function () {
    
    CALLS.codeExplanation.innerHTML = "Declare a variable in this function. Why can we use the same variable name?";
    drawCodePointer(2);
    
};

/*
    Line 13 to Line 15 Action Frame
*/
CALLS.frameFunctions[7] = function () {
    
    CALLS.codeExplanation.innerHTML = "Give the variable a value.";
    drawCodePointer(4);

};

/*
    Line 15 to Line 17 Action Frame
    
*/
CALLS.frameFunctions[8] = function () {
    
    CALLS.codeExplanation.innerHTML = "Write the greeting to the page.";
    drawCodePointer(6);

};

/*
    Line 17 to Line 18 Action Frame
*/
CALLS.frameFunctions[9] = function () {
    
    CALLS.codeExplanation.innerHTML = "End of the <code>justCallMe()</code> function.";
    CALLS.outputContext.drawImage(CALLS.outputText[1], 10, 40);
    drawCodePointer(7);
    
};

/*
    Line 18 to Line 7 Action Frame
*/
CALLS.frameFunctions[10] = function () {
    
    CALLS.codeExplanation.innerHTML = "We're back! Now just continue with the next statement.";
    drawCodePointer(15);
    
};

/*
    Line 7 to Line 9 Action Frame
*/
CALLS.frameFunctions[11] = function () {
    
    CALLS.codeExplanation.innerHTML = "Write the ending message.";
    drawCodePointer(17);

};

/*
    Line 9 to Line 10 Action Frame
*/
CALLS.frameFunctions[12] = function () {
    
    CALLS.codeExplanation.innerHTML = "Now we're really all done!";
    CALLS.outputContext.drawImage(CALLS.outputText[2], 10, 70);
    drawCodePointer(18);
    
};

function drawCodeImage() {
    CALLS.codeContext.clearRect(0, 0, 521, 595);
    CALLS.codeContext.drawImage(CALLS.codeImage, 0, 0);
    
}

function makeFunctionCallDemo() {
    
    
    CALLS.codeContext = document.getElementById('codeImage').getContext('2d');
    CALLS.outputContext = document.getElementById('output').getContext('2d');
    CALLS.codeExplanation = document.getElementById('codeExplanation');
    
    
    CALLS.outputText[0] = new Image();
    CALLS.outputText[0].src = "resources/Fred.png";
    CALLS.outputText[1] = new Image();
    CALLS.outputText[1].src = "resources/ethel.png";
    CALLS.outputText[2] = new Image();
    CALLS.outputText[2].src = "resources/allDone.png";
    
    CALLS.codeImage = new Image();
    CALLS.codeImage.src = "resources/firstCall.jpg";
    CALLS.codeImage.onload = function () {
        drawCodeImage();
    };

}

function drawCurrentCodeLine() {
    
    
    var arrowX = 2;
    var arrowY = 3 + (CALLS.codeImageLineHeight * CALLS.currentCodeLine);
    
    var height = 23;
    var boxWidth = 26;
    var arrowWidth = 15;
    var arrowHeight = 12;
    
    CALLS.codeContext.fillStyle = "rgba(255,0,0, 0.5)";
    //CALLS.codeContext.beginPath();
    //CALLS.codeContext.arc(30, lineY, 10, 0, Math.PI * 2, true);
    //CALLS.codeContext.fill();
    
    CALLS.codeContext.beginPath();
    CALLS.codeContext.moveTo(arrowX, arrowY);
    CALLS.codeContext.lineTo(arrowX, arrowY + height);
    CALLS.codeContext.lineTo(arrowX + boxWidth, arrowY + height);
    CALLS.codeContext.lineTo(arrowX + boxWidth + arrowWidth, arrowY + arrowHeight);
    CALLS.codeContext.lineTo(arrowX + boxWidth, arrowY);
    CALLS.codeContext.fill();
}

function drawCurrentFrame() {

    CALLS.codeContext.drawImage(CALLS.codeImage, 0, 0);    
    
    CALLS.frameFunctions[CALLS.currentFrame]();
    
}

function resetFrames() {
    CALLS.currentFrame = 0;
    CALLS.codeExplanation.innerHTML = "";
    CALLS.outputContext.clearRect(0, 0, 300, 100);
    drawCurrentFrame();
    
    CALLS.currentFrame++;
}

/*
    If we're not in a loop then just increment
    If in a loop then 
*/
function nextFrame() {
    
    if (CALLS.currentFrame < CALLS.frameFunctions.length) {
        drawCurrentFrame();
        CALLS.currentFrame++;
    } else {
        resetFrames();
    }
   

}
