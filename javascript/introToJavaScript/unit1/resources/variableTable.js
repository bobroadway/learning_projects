var VAR_TABLE = {};

VAR_TABLE.baseTableImage = null;
VAR_TABLE.tableImages = [];
VAR_TABLE.tableContext = null;
VAR_TABLE.currentImage = 0;


function drawBaseTableImage() {
    VAR_TABLE.currentImage = 0;
    VAR_TABLE.tableContext.clearRect(0, 0, 882, 602);
    VAR_TABLE.tableContext.drawImage(VAR_TABLE.baseTableImage, 0, 0);
    
}

function drawTableImage(index) {
    VAR_TABLE.tableContext.drawImage(VAR_TABLE.tableImages[index], 0, 0);
}


function resetFrames() {
    VAR_TABLE.currentImage = 0;
    drawBaseTableImage();
}

/*
    If we're not in a loop then just increment

*/
function nextFrame() {
    
    if (VAR_TABLE.currentImage < VAR_TABLE.tableImages.length) {
        drawTableImage(VAR_TABLE.currentImage);
        VAR_TABLE.currentImage++;
    } else {
        resetFrames();
    }
   
}

function loadDemoImages() {
    
    VAR_TABLE.baseTableImage = new Image();
    VAR_TABLE.baseTableImage.src = "resources/VariableTable.png";
    
    
    VAR_TABLE.tableImages[0] = new Image();
    VAR_TABLE.tableImages[0].src = "resources/VariableTable00.png";

    VAR_TABLE.tableImages[1] = new Image();
    VAR_TABLE.tableImages[1].src = "resources/VariableTable01.png";

    VAR_TABLE.tableImages[2] = new Image();
    VAR_TABLE.tableImages[2].src = "resources/VariableTable02.png";

    VAR_TABLE.tableImages[3] = new Image();
    VAR_TABLE.tableImages[3].src = "resources/VariableTable03.png";

    VAR_TABLE.tableImages[4] = new Image();
    VAR_TABLE.tableImages[4].src = "resources/VariableTable04.png";

    VAR_TABLE.tableImages[5] = new Image();
    VAR_TABLE.tableImages[5].src = "resources/VariableTable05.png";

    VAR_TABLE.tableImages[6] = new Image();
    VAR_TABLE.tableImages[6].src = "resources/VariableTable06.png";

    VAR_TABLE.tableImages[7] = new Image();
    VAR_TABLE.tableImages[7].src = "resources/VariableTable07.png";

    VAR_TABLE.tableImages[8] = new Image();
    VAR_TABLE.tableImages[8].src = "resources/VariableTable08.png";

    VAR_TABLE.tableImages[9] = new Image();
    VAR_TABLE.tableImages[9].src = "resources/VariableTable09.png";

    VAR_TABLE.tableImages[10] = new Image();
    VAR_TABLE.tableImages[10].src = "resources/VariableTable10.png";

    VAR_TABLE.tableImages[11] = new Image();
    VAR_TABLE.tableImages[11].src = "resources/VariableTable11.png";

}

function makeVariableTableDemo() {
    
    
    VAR_TABLE.tableContext = 
            document.getElementById('tableImage').getContext('2d');
        
    loadDemoImages();
    
    VAR_TABLE.baseTableImage.onload = function () {
        drawBaseTableImage();
    };
    
}

