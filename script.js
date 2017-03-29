var canvas,context;

function drawRect(){

	//house
	context.beginPath();
	context.moveTo(25,400);
	context.lineTo(150,400);
	context.lineTo(150,250);
	context.lineTo(25,250);
	context.lineTo(25,400);
	context.fillStyle = "pink";
	context.fill();
	context.strokeStyle = "black";
	context.stroke();

}

function drawSun(){
	context.beginPath();
	context.moveTo(430,50);
	var centerX = 400;
	var centerY = 50;
	var radius = 30;
	var startingAngle = 0 * Math.PI;
	var endingAngle = 2 * Math.PI;
	context.arc(centerX,centerY,radius,startingAngle,endingAngle);
	context.fillStyle = "yellow";
	context.fill();
	context.strokeStyle = "yellow";
	context.stroke();
}

function moveRect(){

}

function keyDown(e) {
 if (e.keyCode === 39) { 
 	drawSun();
 }
}

window.addEventListener('keydown', keyDown, false);

window.onload = function() {
	canvas = document.getElementById("drawingCanvas");
    context = canvas.getContext("2d");
	drawRect();


}