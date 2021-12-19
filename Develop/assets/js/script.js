var landingPage = document.getElementById("landing-page");
var quizPage = document.getElementById("quiz");
var startGameButton = document.getElementById("start-game-button");
var countdown = document.getElementById("timer");

var question = document.getElementById("question");
var answer1 = document.getElementById("answer-1");
var answer2 = document.getElementById("answer-2");
var answer3 = document.getElementById("answer-3");
var answer4 = document.getElementById("answer-4");

var highScoreButton = document.getElementById("high-score-button");
var highScorePage = document.getElementById("high-score-container");
var highScoreValue = document.getElementById("high-score-value");

var closeScoresButton = document.getElementById("close-scores-button");


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

var score = 0;
var answeredQuestions = [];

// global variables for the timer
var seconds = 60;
countdown.textContent = "timer: " + seconds;

// Function to start the timer
function timer() {
    var interval = setInterval(function() {
        seconds -= 1;
        countdown.textContent = "timer: " + seconds;
        console.log(seconds);
        if (endGame()) {
            clearInterval(interval);
        }
        
    }, 1000);
}

function highScore() {
    var highScore = localStorage.getItem("HighScore");
    highScoreValue.textContent = " " + highScore;
    highScoreButton.addEventListener("click", function() {
        landingPage.style.display = "none";
        quizPage.style.display = "none";
        highScorePage.style.display = "flex";
    });
}


// Function to end the game if the timer is at 0 seconds or if all questions are anwered
function endGame() {
    if (seconds < 1 || answeredQuestions.length == questionsAndAnswers.length) {
        quizPage.style.display = "none";
        countdown.textContent = "timer: " + 0;
        localStorage.setItem("HighScore", score);
        return true;
    }
    return true;
}


// Function to generate a time penalty for incorrect answers
function isIncorrect() {
    seconds -= 3
}


// Function to set the indexes for the correct answers and check for already presented questions
function setIndex() {
    var questionIndex = Math.floor(Math.random() * questionsAndAnswers.length);     // random question from the array
    var correctAnswerIndex = Math.floor(Math.random() * 3);     //random correct answer placement
    
    for (var i=0; i<answeredQuestions.length; i++) {
        if (questionIndex == answeredQuestions[i]) {
            var questionIndex = Math.floor(Math.random() * questionsAndAnswers.length);     // random question from the array
        }
    }

    return [questionIndex, correctAnswerIndex];
}

// Function to set the questions and randomly select the correct answer index 
function setQuestions() {
    quizPage.style.display = "flex";      // add the quiz to the view

    questionIndex = setIndex()[0];
    correctAnswerIndex = setIndex()[1];

    endGame();

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


// Function to check if the answer is correct or incorrect, incrament score on correct and decrement time on incorrect
function checkAnswers() {
    answer1.addEventListener("click", function() {
        if (answer1.textContent == questionsAndAnswers[questionIndex].answers.correct) {
            score += 1;
            console.log(score);
        } else {
            isIncorrect();
        }
        answeredQuestions.push(questionIndex);
        console.log(answeredQuestions);
        setQuestions();
    })
    answer2.addEventListener("click", function() {
        if (answer2.textContent == questionsAndAnswers[questionIndex].answers.correct) {
            score += 1;
            console.log(score);
        } else {
            isIncorrect();
        }
        answeredQuestions.push(questionIndex);
        console.log(answeredQuestions);
        setQuestions();
    })
    answer3.addEventListener("click", function() {
        if (answer3.textContent == questionsAndAnswers[questionIndex].answers.correct) {
            score += 1;
            console.log(score);
        } else {
            isIncorrect();
        }
        answeredQuestions.push(questionIndex);
        console.log(answeredQuestions);
        setQuestions();
    })
    answer4.addEventListener("click", function() {
        if (answer4.textContent == questionsAndAnswers[questionIndex].answers.correct) {
            score += 1;
            console.log(score);
        } else {
            isIncorrect();
        }
        answeredQuestions.push(questionIndex);
        console.log(answeredQuestions);
        setQuestions();
    });
}


// Function to start and run the game the game
function playGame() {
    highScore();
    startGameButton.addEventListener("click", function() {
        timer();        // start the timer
        landingPage.style.display = "none";     // remove the landing page from view
        setQuestions();
        checkAnswers();
    });
    closeScoresButton.addEventListener("click", function() {
        landingPage.style.display = "block";
        highScorePage.style.display = "none";
    })
}

playGame();