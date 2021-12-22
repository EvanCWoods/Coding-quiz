// Global variables for selectors to be used throughout the code
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
var initialsValue = document.getElementById("initials-value");
var closeScoresButton = document.getElementById("close-scores-button");


// global variable for the questions and answers
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
    question3 = {
        question: "tWhen integrating javascript into HTML pages, the tag that is used is",
        answers: {
            incorrect1: "<src>",
            incorrect2: "<code>",
            incorrect3: "<javascript>",
            correct: "<script>"        
        }
    },
    question4 = {
        question: "assingment of variables in javascript is done with which character",
        answers: {
            incorrect1: "==",
            incorrect2: "===",
            incorrect3: ":",
            correct: "="        
        }
    },
    question5 = {
        question: "What method is used by web developers ato test if things are working in the console",
        answers: {
            incorrect1: "printToConsole()",
            incorrect2: "print()",
            incorrect3: "console.show()",
            correct: "console.log()"        
        }
    },
];

// Global variables for the game to run
var score = 0;
var highScore = 0;
var initials = 'None';
var answeredQuestions = [];
var seconds = 60;
countdown.textContent = "timer: " + seconds;

// Function to start the timer
function timer() {
    var interval = setInterval(function() {
        seconds -= 1;
        countdown.textContent = "timer: " + seconds;
        if (endGame()) {
            clearInterval(interval);
        }
    }, 1000);
}


function saveInitials() {
    var initials = prompt("Congtratulations! You set a new high score. Save your initials with your score.");
    localStorage.setItem("HighScore", score);
    localStorage.setItem("Initials", initials);
}


function setHighScore() {
    highScore = localStorage.getItem("HighScore");
    initials = localStorage.getItem("Initials");
    highScoreValue.textContent = " " + highScore;
    initialsValue.textContent = initials + ":" + " ";
    highScoreButton.addEventListener("click", function() {
        landingPage.style.display = "none";
        quizPage.style.display = "none";
        highScorePage.style.display = "flex";
    });
    return highScore;
}


// Function to end the game if the timer is at 0 seconds or if all questions are anwered
function endGame() {
    if (seconds < 1 || answeredQuestions.length == questionsAndAnswers.length) {
        quizPage.style.display = "none";
        countdown.textContent = "timer: " + 0;
        if (score > highScore) {
            saveInitials();
        } else {
            prompt("Game Over!");
        }
        return true;
    }
    return;
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
        } else {
            seconds -= 3;
        }
        answeredQuestions.push(questionIndex);
        setQuestions();
    })
    answer2.addEventListener("click", function() {
        if (answer2.textContent == questionsAndAnswers[questionIndex].answers.correct) {
            score += 1;
        } else {
            seconds -= 3;
        }
        answeredQuestions.push(questionIndex);
        setQuestions();
    })
    answer3.addEventListener("click", function() {
        if (answer3.textContent == questionsAndAnswers[questionIndex].answers.correct) {
            score += 1;
        } else {
            seconds -= 3;
        }
        answeredQuestions.push(questionIndex);
        setQuestions();
    })
    answer4.addEventListener("click", function() {
        if (answer4.textContent == questionsAndAnswers[questionIndex].answers.correct) {
            score += 1;
        } else {
            seconds -= 3;
        }
        answeredQuestions.push(questionIndex);
        setQuestions();
    });
}


// Function to start and run the game the game
function playGame() {
    setHighScore();
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

// Run the game
playGame();