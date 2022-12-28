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

function generateCircles(count = difficultyValue.innerHTML) {
    // Deletes all circles that were in the list
    listOfCircles.innerHTML = '';

    for (let i = 0; i < count; i++) {
        let randomHex = generateHex();

        while (randomHex.length < 6) randomHex = generateHex();
        const randomColor = '#' + randomHex;

        const circle = document.createElement("li");
        circle.classList.add("rounded-circle");
        circle.style.backgroundColor = randomColor;
        circle.id = randomColor;

        listOfCircles.appendChild(circle);
    }

    let randomCircle = listOfCircles.getElementsByTagName("li").item(Math.floor(Math.random() * count));
    hexCodeText.textContent = correctCircleID = randomCircle.id;
}

function hideFooter() {
    footer.classList.remove("d-flex");
    newGameBtn.classList.remove("d-grid");
}

/* Declaring event listener */

// Performs actions depending on the condition when the user clicks on the circle
listOfCircles.addEventListener("click", function (event) {
    if (event.target.matches("li") && !event.target.classList.contains("selected")) {
        let targetCircle = event.target;
        
        if (targetCircle.id == correctCircleID) {
            footer.classList.add("d-flex");
            newGameBtn.classList.add("d-grid");
            hexCodeText.style.color = correctCircleID;
            infoSelect.textContent = "You guessed the color!";

            let circles = listOfCircles.getElementsByTagName("li");
            for (let i = 0; i < circles.length; i++) {
                if (circles[i].id != correctCircleID) {
                    circles[i].classList.add("selected");
                }
            }
        }
        else {
            footer.classList.add("d-flex");
            targetCircle.classList.add("selected");
            infoSelect.innerHTML = `You guessed wrong, it's <span style='color: ${targetCircle.id}'>${targetCircle.id}</span>!`;
        }
    }
});

// Set value for <span> element when user change position of slider
difficultyRange.addEventListener('input', function () {
    difficultyValue.innerHTML = this.value;
});

// If the user releases the slider, a new game will start
difficultyRange.addEventListener('mouseup', function () {
    generateCircles(this.value);
    hideFooter();
    hexCodeText.style.color = "black";
});

// If the user presses the button, a new game will start
newGameBtn.addEventListener("click", function () {
    generateCircles();
    hideFooter();
    hexCodeText.style.color = "black";
});

/* Calling methods */

generateCircles();
hideFooter();
