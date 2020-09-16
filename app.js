const drawingCanvas = document.getElementById("drawing-canvas");
const artBoard = document.getElementById("artboard");
const ctx = drawingCanvas.getContext("2d");
const ctxOne = artboard.getContext("2d");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const brushSize = document.getElementById("brushsize");
const brushColor = document.getElementById("brushcolor");
const artboardColor = document.getElementById("artboardcolor");

let lineWidth = 5;
let drawIng = false;
let strokeColor = "black";
let artBoardcolor = "white";

// resizing canvas
 function resize() {
    drawingCanvas.width = window.innerWidth ;
    drawingCanvas.height = window.innerHeight;
    artboard.width = window.innerWidth;
    artboard.height = window.innerHeight;
    canvasArtboard();
 }
resize();

window.addEventListener("resize", resize);

// canvas artboard
function canvasArtboard() {
    ctxOne.fillStyle = artBoardcolor;
    ctxOne.fillRect(0, 0, artboard.width, artboard.height);
}

// event listners
drawingCanvas.addEventListener("mousedown", () => {
    drawIng = true;
});

drawingCanvas.addEventListener("mouseup", () => {
    drawIng = false;
    ctx.beginPath();
});

drawingCanvas.addEventListener("mousemove", (e) => {
   if(drawIng === true){
      const x = e.offsetX;
      const y = e.offsetY;
      drawline(x,y);
   }
});

increaseBtn.addEventListener("click", () => {
    lineWidth += 5;

    if(lineWidth >= 60){
        lineWidth = 60;
    }
    brushsizeUpdate();
});

decreaseBtn.addEventListener("click", () => {
    lineWidth -= 5;

    if(lineWidth < 5){
        lineWidth = 5;
    }
    brushsizeUpdate();
});

brushColor.addEventListener("change", (e)=>{
    strokeColor = e.target.value;
});

artboardColor.addEventListener("change", (e)=>{
    artBoardcolor = e.target.value;
    canvasArtboard();
});

//  drawing line
function drawline (x,y) {
    ctx.lineCap = "round";
    ctx.lineWidth = lineWidth;
    ctx.lineTo(x, y);
    ctx.strokeStyle = strokeColor;
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x, y);
}

// brush size update
function brushsizeUpdate() {
    brushSize.innerHTML = lineWidth;
}

