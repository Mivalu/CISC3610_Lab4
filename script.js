var canvas,context;
var centerX, centerY;
var boxWidth = 50;
var boxHeight = 25;
var left=0,right=0,topp=0,bottom=0;
var color = "white";

function drawSquare(left,right,top,bottom,color="pink"){
    //house
    context.beginPath();
    context.moveTo(centerX-boxWidth-left,centerY-boxHeight-top);
    context.lineTo(centerX+boxWidth+right,centerY-boxHeight-top);
    context.lineTo(centerX+boxWidth+right,centerY+boxHeight+bottom);
    context.lineTo(centerX-boxWidth-left,centerY+boxHeight+bottom);
    context.lineTo(centerX-boxWidth-left,centerY-boxHeight-top);
    context.fillStyle = color;
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

var reset = document.getElementById("reset");
window.addEventListener('keydown', keyDown, false);

function keyDown(e) {
 if (e.keyCode === 39) {
 	right += 5;
 	context.clearRect(0, 0, canvas.width, canvas.height);
 	drawSquare(left,right,topp,bottom,color);
 	generateJSON();
 }
 else if (e.keyCode === 37) {
 	left += 5;
 	context.clearRect(0, 0, canvas.width, canvas.height);
 	drawSquare(left,right,topp,bottom,color);
 	generateJSON();
 }
 else if (e.keyCode === 38) {
 	topp += 5;
 	context.clearRect(0, 0, canvas.width, canvas.height);
 	drawSquare(left,right,topp,bottom,color);
 	generateJSON();
 }
 else if (e.keyCode === 40) {
 	bottom += 5;
 	context.clearRect(0, 0, canvas.width, canvas.height);
 	drawSquare(left,right,topp,bottom,color);
 	generateJSON();
 }
}

function generateJSON(){
	var coords = {
		"topp" : topp,
		"bottom" : bottom,
		"right" : right,
		"left" : left,
		"color" : color
 	};
 	localStorage.setItem("coords", JSON.stringify(coords));
}

reset.addEventListener("click", function(){
	left=0;
	right=0;
	topp=0;
	bottom=0;
	color = "white";
	context.clearRect(0, 0, canvas.width, canvas.height);
 	drawSquare(left,right,topp,bottom,color);
},false);

function radioClick(rad){
    if (rad.value ==="none"){
        context.clearRect(0, 0, canvas.width, canvas.height);
        color = "white";
 		drawSquare(left,right,topp,bottom,"white");
    }
    else if (rad.value ==="green"){
        context.clearRect(0, 0, canvas.width, canvas.height);
        color = "green";
 		drawSquare(left,right,topp,bottom,"green");
    }
    else if (rad.value ==="black"){
        context.clearRect(0, 0, canvas.width, canvas.height);
        color = "black"
 		drawSquare(left,right,topp,bottom,"black");
    }
    else if (rad.value ==="pink") {
        context.clearRect(0, 0, canvas.width, canvas.height);
        color = "pink"
 		drawSquare(left,right,topp,bottom,"pink");
    }
}

window.onload = function() {
	canvas = document.getElementById("drawingCanvas");
    context = canvas.getContext("2d");
    centerX = canvas.width/2;
    centerY = canvas.height/2;
    var data = JSON.parse(localStorage.getItem("coords"));
    top = data.topp;
    right = data.right;
    left = data.left;
    bottom = data.bottom;
	drawSquare(left,right,topp,bottom,color);
}

// Assignment
// Have 3 (or more) colors available to draw a rectangle.
// Draw a rectangle in the center of the screen the 
// size100x50 pixels.
// The user can press the arrow keys to change the shape 
// of the rectangle, keeping the rectangle at the center
// of the screen.
// After each change, save the settings of the 
// dimensions/color to the browser's localStorage
// When the user closes (or revisits the page), the 
// rectangle and colors should be the same choice and 
// size as the way the user last left it.
// Offer a reset button, to reset the program to the 
// default colors/size.
// Make sure you user interface reflects what is drawn on 
// the screen (this is importance when setting the values 
// from the localStorage).