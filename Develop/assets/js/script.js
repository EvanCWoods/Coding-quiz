var landingPage = document.getElementById("landing-page");
var quizPage = document.getElementById("quiz");
var startGameButton = document.getElementById("start-game-button");
var countdown = document.getElementById("timer");

var question = document.getElementById("question");
var answer1 = document.getElementById("answer-1");
var answer2 = document.getElementById("answer-2");
var answer3 = document.getElementById("answer-3");
var answer4 = document.getElementById("answer-4");


// global variable for the quesations and answers
var questionsAndAnswers = [
    question1 = {
        question: "Arrays in javascript can store what variables",
        answers: {
            incorrect1: "none",
            incorrect2: "numbers",
            incorrect3: "strings",
            correct: "anything"
        }
    },
    question2 = {
        question: "the difference between a float and an int is",
        answers: {
            incorrect1: "nothing",
            incorrect2: "ability to multiply",
            incorrect3: "there are only floats in javascript",
            correct: "decimals"        
        }
    },
];

//
var questionIndex = Math.floor(Math.random() * questionsAndAnswers.length);     // random question from the array
var correctAnswerIndex = Math.floor(Math.random() * 3);     //random correct answer placement

var score = 0;

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

function isIncorrect() {
    seconds -= 3;
    console.log("Incorrect! -3 seconds");
}


function setQuestions() {
    quizPage.style.display = "flex";      // add the quiz to the view

    question.textContent = questionsAndAnswers[questionIndex].question;

    if (correctAnswerIndex === 0) {
        answer1.textContent = questionsAndAnswers[questionIndex].answers.correct;
        answer2.textContent = questionsAndAnswers[questionIndex].answers.incorrect1;
        answer3.textContent = questionsAndAnswers[questionIndex].answers.incorrect2;
        answer4.textContent = questionsAndAnswers[questionIndex].answers.incorrect3;
    } else if (correctAnswerIndex === 1) {
        answer1.textContent = questionsAndAnswers[questionIndex].answers.incorrect1;
        answer2.textContent = questionsAndAnswers[questionIndex].answers.correct;
        answer3.textContent = questionsAndAnswers[questionIndex].answers.incorrect2;
        answer4.textContent = questionsAndAnswers[questionIndex].answers.incorrect3;
    }
    else if (correctAnswerIndex === 2) {
        answer1.textContent = questionsAndAnswers[questionIndex].answers.incorrect1;
        answer2.textContent = questionsAndAnswers[questionIndex].answers.incorrect2;
        answer3.textContent = questionsAndAnswers[questionIndex].answers.correct;
        answer4.textContent = questionsAndAnswers[questionIndex].answers.incorrect3;
    } else if (correctAnswerIndex === 3) {
        answer1.textContent = questionsAndAnswers[questionIndex].answers.incorrect1;
        answer2.textContent = questionsAndAnswers[questionIndex].answers.incorrect3;
        answer3.textContent = questionsAndAnswers[questionIndex].answers.incorrect2;
        answer4.textContent = questionsAndAnswers[questionIndex].answers.correct;
    }
}

function checkAnswers() {
    answer1.addEventListener("click", function() {
        if (answer1.textContent == questionsAndAnswers[questionIndex].answers.correct) {
            score += 1;
            console.log(score);
        } else {
            isIncorrect();
        }
    })
    answer2.addEventListener("click", function() {
        if (answer2.textContent == questionsAndAnswers[questionIndex].answers.correct) {
            score += 1;
            console.log(score);
        } else {
            isIncorrect();
        }
    })
    answer3.addEventListener("click", function() {
        if (answer3.textContent == questionsAndAnswers[questionIndex].answers.correct) {
            score += 1;
            console.log(score);
        } else {
            isIncorrect();
        }
    })
    answer4.addEventListener("click", function() {
        if (answer4.textContent == questionsAndAnswers[questionIndex].answers.correct) {
            score += 1;
            console.log(score);
        } else {
            isIncorrect();
        }
    });
}


// Function to start the game
function startGame() {
    startGameButton.addEventListener("click", function() {
        timer();        // start the timer

        landingPage.style.display = "none";     // remove the landing page from view
        setQuestions();
        checkAnswers();
    });
}

startGame();