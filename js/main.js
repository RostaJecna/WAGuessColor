/* Variable declaration */

const listOfCircles = document.getElementById("list-of-circles");
var correctCircleID; // ID of circle selected at random

const difficultyValue = document.getElementById("difficulty-value");
const difficultyRange = document.getElementById("difficulty-range");

const hexCodeText = document.getElementById("hex-code");

const footer = document.getElementById("footer");
const infoSelect = document.getElementById("info-select");
const newGameBtn = document.getElementById("new-game-btn");
footer.style.display = "none";
newGameBtn.style.display = "none";

difficultyValue.innerHTML = difficultyRange.value; // Set for <span> value of <input type="range">

/* Declaring methods */

function generateHex() {
    return Math.floor(Math.random() * 16777215).toString(16);
}

function hideFooter() {
    footer.classList.remove("d-flex");
    newGameBtn.classList.remove("d-grid");
}
