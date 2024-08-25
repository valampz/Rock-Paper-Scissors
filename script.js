const arr = ["rock", "paper", "scissor"];
let computeScore = 0;
let humanScore = 0;

function getComputerChoice(){
    return arr[Math.floor(Math.random() * 3)];    
}

function getHumanChoice(){
    return window.prompt('Rock, Paper or Scissor?');
}


function playRound(humanChoice, computerChoice){
   
    humanChoice = humanChoice.toLowerCase();

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


for(let i = 0; i < 5; i++){
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    console.log(playRound(humanChoice, computerChoice));
}

console.log(humanScore > computeScore? 'You\'re the winner!' : 'computer\'s the winner!' );