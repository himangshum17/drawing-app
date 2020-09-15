const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const brushSize = document.getElementById("brushsize");
const brushColor = document.getElementById("brushcolor");

let lineWidth = 5;
let drawIng = false;
let strokeColor = "black";
let bgColor = "white";

// resizing canvas
 function resize() {
     canvas.width = window.innerWidth;
     canvas.height = window.innerHeight;
     ctx.fillStyle = bgColor;
     ctx.fillRect(0, 0, canvas.width, canvas.height);
 }
resize();
window.addEventListener("resize", resize);

// event listners
canvas.addEventListener("mousedown", () => {
    drawIng = true;
});

canvas.addEventListener("mouseup", () => {
    drawIng = false;
    ctx.beginPath();
});

canvas.addEventListener("mousemove", (e) => {
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

