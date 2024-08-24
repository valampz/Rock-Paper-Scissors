const arr = ["rock", "paper", "scissor"];
let computeScore = 0;
let humanScore = 0;

function getComputerChoice(){
    return arr[Math.floor(Math.random() * 3)];    
}

function getHumanChoice(){
    let userMove = window.prompt('rock, paper or scissor?');

    if(arr.includes(userMove)){
        return userMove;
    }
    else{
        return `Enter a valid input in lower-case letters`;
    }
}

