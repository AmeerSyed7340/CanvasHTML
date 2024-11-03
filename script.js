var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

//Start a new Path
ctx.lineWidth = 3;
ctx.beginPath();
ctx.moveTo(0,0);
ctx.lineTo(100,100);
ctx.lineTo(200,100);


ctx.stroke();

ctx.beginPath();
ctx.moveTo(0,0);
ctx.lineTo(200,100);
ctx.lineTo(300,50);

ctx.strokeStyle = 'salmon';
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = 'green';
ctx.moveTo(300,0);
ctx.lineTo(200,100);
ctx.lineTo(0,150);
ctx.lineTo(100,100);

ctx.stroke();


var c2 = document.getElementById("text-canvas");
var context = c2.getContext("2d");

context.beginPath();
//body
context.arc(150,75, 70, 0, 2*Math.PI);
context.fillStyle = 'pink';
context.fill();

context.moveTo(140,55);
context.arc(130,55, 10, 0, 2*Math.PI);

context.moveTo(180,55);
context.arc(170, 55, 10, 0, 2 * Math.PI);

context.moveTo(200, 75);
context.arc(150, 75, 50, 0,  Math.PI);

context.stroke();
