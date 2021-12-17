landingPage = document.getElementById("landing-page");
quizPage = document.getElementById("quiz");
startGameButton = document.getElementById("start-game-button");
countdown = document.getElementById("timer");

// global variables for the timer
var seconds = 60;
countdown.textContent = "timer: " + seconds;

// Function to start the timer
function timer() {
    setInterval(function() {
        seconds -= 1;
        countdown.textContent = "timer: " + seconds;
    }, 1000);
}


// Function to start the game
function startGame() {
    startGameButton.addEventListener("click", function() {
        timer();        // start the timer

        landingPage.style.display = "none";     // remove the landing page from view
        quizPage.style.display = "flex";      // add the quiz to the view
    });
}

startGame()