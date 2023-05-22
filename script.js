'use strict';

const message = document.querySelector(".question");
const enterGuess  = document.querySelector(".guess");
const check =  document.querySelector(".input-btn");
const scoretext =  document.querySelector(".score span");
const highScoretext =  document.querySelector(".high-score span");
const star = document.querySelector(".star");
const playAgain = document.querySelector(".header-btn");

const number = () => Math.trunc(Math.random()*100)+1;
let secretNumber = number();
let score = 20;
let highScore = 0;


const setStatus = (status) => message.textContent = status;

const setScore = () => {
    score--;
    if(score < 0){
        setStatus("You Lost");
        return;
    }
    scoretext.textContent = score;
}

const setHighScore = () => {
if(score > highScore){
    highScoretext.textContent = score;
}
}

check.addEventListener('click',function(){
    const guess = Number(enterGuess.value);
    
    if(!guess){
        setStatus("No Number");
    }else if(guess === secretNumber){
        setStatus(secretNumber);
        star.classList.add("star-animate");
        setHighScore();
    }else if(guess > secretNumber){
        setStatus("Too High");
        setScore();
    }else if(guess < secretNumber){
        setStatus("Too Low");
        setScore();
    }

})

playAgain.addEventListener('click',function(){
    star.classList.remove("star-animate");
    secretNumber =  number();
    enterGuess.value = null;
    setStatus("?")
    score = 20;
    scoretext.textContent = score;

})
