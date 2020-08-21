var canvas = document.getElementById('flowerCanvas');
const ctx = canvas.getContext("2d")
function createPetal(length, width){
    ctx.strokeStyle = "red";
    const path = new Path2D();
    path.moveTo(0,0);
    path.lineTo(length * 0.3, -width)
    path.lineTo(length * 0.8, -width);
    path.lineTo(length, 0);
    path.lineTo(length * 0.8, width);
    path.lineTo(length * 0.3, width);
    path.closePath();
    return path;
}

function drawPetals(x, y, count, startAt, petal){
    const step = (Math.PI * 2)/ count;
    ctx.setTransform(1,0,0,1,x,y)
    ctx.rotate(startAt);
    for (var i = 0; i < count; i += 1){
        ctx.stroke(petal)
        ctx.rotate(step)
    }
    ctx.setTransform(1,0,0,1,0,0)
}

function drawFlower(col, lineWidth, fitScale, petalCount, x, y){
    ctx.strokeStyle = "green";
    ctx.lineWidth = lineWidth*4;
    ctx.moveTo(x, y);
    ctx.lineTo(x, ctx.canvas.height)
    ctx.stroke();
    ctx.closePath()
    ctx.lineWidth = lineWidth;
    const size = Math.min(ctx.canvas.width, ctx.canvas.height) * fitScale * 0.5;
    drawPetals(x, y, petalCount, 0, createPetal(size, size*0.2));
    ctx.beginPath();
    ctx.arc(x, y, size*0.15, 0, Math.PI * 2)
    ctx.fillStyle = "brown";
    ctx.fill()
    ctx.closePath();

}
function getRandomNum(min, max){
    return Math.random() * (max-min) + min;
}
function getRandomWidth(){
    console.log(ctx.canvas.width)
    var number = getRandomNum(0, ctx.canvas.width)
    return number
}
function getRandomHeight(){
    var number = getRandomNum(ctx.canvas.height/3, ctx.canvas.height)
    return number
}
function getRandomInt(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)+ min);
}
for (var i = 0; i < 30; i++){
    scale = Math.random(2);
    lineWidth = Math.random(2)
    petals = getRandomInt(5, 10)
    x = getRandomWidth()
    y = getRandomHeight()
    console.log(x)
    console.log(y)
    drawFlower("black", scale, scale/2, petals, x, y);
 
}

