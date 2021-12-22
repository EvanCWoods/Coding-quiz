# bootcamp-week4-homework

This repository holds the code for the "University of Sydney Full Stack Flex Coding Bootcamp" Week 4 Homework. The web page is a coding quiz consisting of 5 multiple choice questions surrounding coding in javascript.

The landing page of the website presents a user with a brief explaination of the quiz, the ability to check high scores, and the ability to start the quiz. 
![The landing page presents users with options of viewing the high scores or starting a quiz](./Develop/assets/images/landing-page.png).

The questions are selected randomly out of a library of questions stored in an object 'questionsAndAnswers'. The code checks to the question library against the answered questions array to ensure that no queastions are re asked.

![The questions page of the quiz loads new questions and answers after each question is answered.](./Develop/assets/images/questions-page.png).

There is a 3 second time penalty applied for every wrong answer and the game ends when either there are no more questions left or the timer runs out (0 seconds).

High scores will be stored in local memory and area ccompanied by the players initials which can be viewed by clicking the "View High Score" button on the top left of the page.


The website is is hosted on github pages and can be accessed here: https://evancwoods.github.io/bootcamp-week4-homework//Develop/index.html 