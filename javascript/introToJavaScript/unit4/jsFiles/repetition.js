var LOOPING = {};

LOOPING.baseImage = null;
LOOPING.slideImages = [];
LOOPING.slidesContext = null;
LOOPING.currentImage = 0;


function drawBaseImage() {
    LOOPING.currentImage = 0;
    LOOPING.slidesContext.clearRect(0, 0, 727, 558);
    LOOPING.slidesContext.drawImage(LOOPING.baseImage, 0, 0);
    
}

function drawImage(index) {
    LOOPING.slidesContext.clearRect(0, 0, 727, 558);
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
    LOOPING.baseImage.src = "resources/looping/looping00.jpg";
    
    
    LOOPING.slideImages[0] = new Image();
    LOOPING.slideImages[0].src = "resources/looping/looping01.png";

    LOOPING.slideImages[1] = new Image();
    LOOPING.slideImages[1].src = "resources/looping/looping02.png";

    LOOPING.slideImages[2] = new Image();
    LOOPING.slideImages[2].src = "resources/looping/looping03.png";

    LOOPING.slideImages[3] = new Image();
    LOOPING.slideImages[3].src = "resources/looping/looping03b.png";

    LOOPING.slideImages[4] = new Image();
    LOOPING.slideImages[4].src = "resources/looping/looping04.png";

    LOOPING.slideImages[5] = new Image();
    LOOPING.slideImages[5].src = "resources/looping/looping05.png";

    LOOPING.slideImages[6] = new Image();
    LOOPING.slideImages[6].src = "resources/looping/looping05b.png";

    LOOPING.slideImages[7] = new Image();
    LOOPING.slideImages[7].src = "resources/looping/looping06.png";

    LOOPING.slideImages[8] = new Image();
    LOOPING.slideImages[8].src = "resources/looping/looping07.png";

    LOOPING.slideImages[9] = new Image();
    LOOPING.slideImages[9].src = "resources/looping/looping08.png";

    LOOPING.slideImages[10] = new Image();
    LOOPING.slideImages[10].src = "resources/looping/looping08b.png";

    LOOPING.slideImages[11] = new Image();
    LOOPING.slideImages[11].src = "resources/looping/looping09.png";

    LOOPING.slideImages[12] = new Image();
    LOOPING.slideImages[12].src = "resources/looping/looping10.png";

    LOOPING.slideImages[13] = new Image();
    LOOPING.slideImages[13].src = "resources/looping/looping11.png";

    LOOPING.slideImages[14] = new Image();
    LOOPING.slideImages[14].src = "resources/looping/looping11b.png";

    LOOPING.slideImages[15] = new Image();
    LOOPING.slideImages[15].src = "resources/looping/looping12.png";

    LOOPING.slideImages[16] = new Image();
    LOOPING.slideImages[16].src = "resources/looping/looping13.png";

    LOOPING.slideImages[17] = new Image();
    LOOPING.slideImages[17].src = "resources/looping/looping14.png";

    LOOPING.slideImages[18] = new Image();
    LOOPING.slideImages[18].src = "resources/looping/looping14b.png";

    LOOPING.slideImages[19] = new Image();
    LOOPING.slideImages[19].src = "resources/looping/looping15.png";

    LOOPING.slideImages[20] = new Image();
    LOOPING.slideImages[20].src = "resources/looping/looping16.png";

    LOOPING.slideImages[21] = new Image();
    LOOPING.slideImages[21].src = "resources/looping/looping17.png";

    LOOPING.slideImages[22] = new Image();
    LOOPING.slideImages[22].src = "resources/looping/looping18.png";

}

function makeLoopingDemo() {
    
    
    LOOPING.slidesContext = 
            document.getElementById('repetitionCanvas').getContext('2d');
        
    loadDemoImages();
    
    LOOPING.baseImage.onload = function () {
        drawBaseImage();
    };
    
}


/*
    It's not magic
*/
function nonMagic() {
// A non-magical way to run that statement five times
    
    // Declare Constants
    var ZERO = 0;
    var FIVE = 5;
    
    // Declare Variables
    var counter;
    
    // Assign initial values to variables
    counter = ZERO;
    
    // Here's the real magic cloud
    while (counter < FIVE) {
        document.write("Here's a line of output.<br />");
        counter++;
    }
}
