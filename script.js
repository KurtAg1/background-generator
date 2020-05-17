var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector("button");

// color input matches the background generated on first page load.
setGradient();

// Randomize button
function randomColor(){
	var rgb = '#'+Math.floor(Math.random()*16777215).toString(16);
	return rgb;
}

function setRandomColors(){
	color1.value = randomColor();
	color2.value = randomColor();
	setGradient();
}

button.addEventListener("click", setRandomColors);

// Actual Background Generator

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);