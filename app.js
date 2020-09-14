const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
let lineWidth = 10;
let drawIng = false;

// resizing canvas
 function resize() {
     canvas.width = window.innerWidth;
     canvas.height = window.innerHeight;
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

//  drawing line
function drawline (x,y) {
    ctx.lineCap = "round";
    ctx.lineWidth = lineWidth;
    ctx.lineTo(x, y);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x, y);
}

