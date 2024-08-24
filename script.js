const arr = ["rock", "paper", "scissor"];
let computeScore = 0;
let humanScore = 0;

function getComputerChoice(){
    return arr[Math.floor(Math.random() * 3)];    
}

function getHumanChoice(){
    let userMove = window.prompt('Rock, Paper or Scissor?');

    if(arr.includes(userMove.toLowerCase())){
        return userMove;
    }
    else{
        return `Enter a valid input`;
    }
}


function playRound(humanChoice, computerChoice){
   
    if (humanChoice === 'rock'){
        switch (computerChoice){
            case 'paper':
                humanScore--;
                computeScore++;
                return 'You lose! Paper beats Rock';
                break;
            case 'scissor':
                humanScore++;
                computeScore--;
                return 'You win! Rock beats Scissor';
                break;
            default:
                return 'Nobody wins!';
        }
    }

    else if (humanChoice === 'paper'){
        switch (computerChoice){
            case 'rock':
                humanScore++;
                computeScore--;
                return 'You win! Paper beats Rock';
                break;
            case 'scissor':
                humanScore--;
                computeScore++;
                return 'You lose! Scissor beats Paper';
                break;
            default:
                return 'Nobody wins!';
        }
    }

    else if (humanChoice === 'scissor'){
        switch (computerChoice){
            case 'paper':
                humanScore++;
                computeScore--;
                return 'You win! Scissor beats Paper';
                break;
            case 'rock':
                humanScore--;
                computeScore++;
                return 'You lose! Rock beats Scissor';
                break;
            default:
                return 'Nobody wins!';
        }
    }
}

const humanChoice = getHumanChoice().toLowerCase();
const computerChoice = getComputerChoice();

console.log(playRound(humanChoice, computerChoice));
