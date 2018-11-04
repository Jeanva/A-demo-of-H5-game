var c3 = document.getElementById('canvas_area');

var ctx = c3.getContext('2d');
var isMouseDown = false; // flag of mouse pressing down
var width = c3.width, height = c3.height;

console.log(c3.width,c3.height);
console.log(c3);
ctx.fillStyle = 'pink';
ctx.strokeStyle ='red';
// ctx.strokeWidth = 10;
ctx.lineWidth = 10;


window.onclick = function(e){
    console.log(e.target);
    console.log('e.clientX',e.clientX,'e.clientY',e.clientY);
}

function myCanvasMouseDown(event) {
//event.preventDefault();    
    ctx.clearRect(0,0,width,height);
    if(event.button == 0) {
        orignalX = event.layerX;
        orignalY = event.layerY;
        ctx.moveTo(orignalX,orignalY); 
        data = ctx.getImageData(0, 0, width, height);
        ctx.arc(orignalX,orignalY,5,0,2*Math.PI);
        ctx.globalAlpha=0.5;
        ctx.fillStyle = "rgba(255,0,0,0.25)";
        isMouseDown = true;
        console.log('orignalX',orignalX,'orignalY',orignalY);
    }
}
function myCanvasMouseMove(event) {
if (isMouseDown){
        lastX = event.layerX;
        lastY = event.layerY;
        ctx.clearRect(0,0,width,height);
        ctx.putImageData(data,0,0);
        // ctx.lineTo(lastX, lastY); //根据鼠标路径绘画  
        // ctx.stroke();   //立即渲染  
        // 如果初始x 轴和y 轴 的坐标 与 结束 x轴和y 轴的偏移量小于10,那么orignalX =lastX,orignalY = lastY 
        if(Math.abs(orignalX-lastX)<20){
            lastX = orignalX;
        }
        if(Math.abs(orignalY - lastY)<20){
            lastY = orignalY;
        }
        ctx.arc(lastX,lastY,5,0,2*Math.PI);
        ctx.fillStyle = "rgba(255,0,0,0.25)";
        ctx.globalAlpha = 0.5;
        console.log('lastX',lastX,'lastY',lastY);
}
}
function myCanvasMouseUp(event) {
    if (isMouseDown){

        ctx.clearRect(0,0,width,height);
        ctx.putImageData(data,0,0);
        lastX = event.layerX;
        lastY = event.layerY;
        console.log(orignalX,lastX);
        if(Math.abs(orignalX-lastX)<20){
            lastX = orignalX;
        }
        if(Math.abs(orignalY - lastY)<20){
            lastY = orignalY;
        }
        console.log('比较之后',orignalX,lastX);
        ctx.arc(lastX,lastY,5,0,2*Math.PI);
        ctx.fillStyle = "rgba(255,0,0,0.25)";
        ctx,globalAlpha =0.5;
        // ctx.lineTo(lastX, lastY); //根据鼠标路径绘画  
        ctx.stroke();   //立即渲染 

        isMouseDown = false;
        lastX = null;
        lastY = null;
        orignalX = null;
        orignalY = null;
        data = ctx.getImageData(0, 0, width, height);
        ctx.beginPath();
        ctx.clearRect(0,0,width,height);
        ctx.putImageData(data,0,0);
        ctx.closePath();
    }
    } 
c3.addEventListener("touchstart", myCanvasMouseDown, false);
c3.addEventListener("touchmove", myCanvasMouseMove, false);
c3.addEventListener("touchend", myCanvasMouseUp, false);