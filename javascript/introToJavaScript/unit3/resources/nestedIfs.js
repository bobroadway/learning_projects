var IF_ELSE_IF = {};

IF_ELSE_IF.baseImage = null;
IF_ELSE_IF.slideImages = [];
IF_ELSE_IF.slidesContext = null;
IF_ELSE_IF.currentImage = 0;


function drawBaseImage() {
    IF_ELSE_IF.currentImage = 0;
    IF_ELSE_IF.slidesContext.clearRect(0, 0, 816, 608);
    IF_ELSE_IF.slidesContext.drawImage(IF_ELSE_IF.baseImage, 0, 0);
    
}

function drawImage(index) {
    IF_ELSE_IF.slidesContext.drawImage(IF_ELSE_IF.slideImages[index], 0, 0);
}


function resetFrames() {
    IF_ELSE_IF.currentImage = 0;
    drawBaseImage();
}

/*
    If we're not in a loop then just increment

*/
function nextFrame() {
    
    if (IF_ELSE_IF.currentImage < IF_ELSE_IF.slideImages.length) {
        drawImage(IF_ELSE_IF.currentImage);
        IF_ELSE_IF.currentImage++;
    } else {
        resetFrames();
    }
   
}

function loadDemoImages() {
    
    IF_ELSE_IF.baseImage = new Image();
    IF_ELSE_IF.baseImage.src = "resources/IfElseif00.jpg";
    
    
    IF_ELSE_IF.slideImages[0] = new Image();
    IF_ELSE_IF.slideImages[0].src = "resources/IfElseif01.jpg";

    IF_ELSE_IF.slideImages[1] = new Image();
    IF_ELSE_IF.slideImages[1].src = "resources/IfElseif02.jpg";

    IF_ELSE_IF.slideImages[2] = new Image();
    IF_ELSE_IF.slideImages[2].src = "resources/IfElseif03.jpg";

    IF_ELSE_IF.slideImages[3] = new Image();
    IF_ELSE_IF.slideImages[3].src = "resources/IfElseif04.jpg";

    IF_ELSE_IF.slideImages[4] = new Image();
    IF_ELSE_IF.slideImages[4].src = "resources/IfElseif05.jpg";

    IF_ELSE_IF.slideImages[5] = new Image();
    IF_ELSE_IF.slideImages[5].src = "resources/IfElseif06.jpg";

    IF_ELSE_IF.slideImages[6] = new Image();
    IF_ELSE_IF.slideImages[6].src = "resources/IfElseif07.jpg";

    IF_ELSE_IF.slideImages[7] = new Image();
    IF_ELSE_IF.slideImages[7].src = "resources/IfElseif08.jpg";

}

function makeNestedIfElseIfDemo() {
    
    
    IF_ELSE_IF.slidesContext = 
            document.getElementById('ifElseIfImage').getContext('2d');
        
    loadDemoImages();
    
    IF_ELSE_IF.baseImage.onload = function () {
        drawBaseImage();
    };
    
}

