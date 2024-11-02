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