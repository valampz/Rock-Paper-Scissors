const arr = ["rock", "paper", "scissor"];
let computeScore = 0;
let humanScore = 0;

function getComputerChoice(){
    return arr[Math.floor(Math.random() * 3)];    
}

function getHumanChoice(){
    let choice;
    while (true) {
        choice = window.prompt('Rock, Paper, or Scissor?').toLowerCase();
        if (arr.includes(choice)) {
            return choice;
        } else {
            alert('Invalid input. Please enter Rock, Paper, or Scissor.');
        }
    }
}


function playRound(humanChoice, computerChoice){
   
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === 'rock'){
        switch (computerChoice){
            case 'paper':
                computeScore++;
                return 'You lose! Paper beats Rock';
                break;
            case 'scissor':
                humanScore++;
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
                return 'You win! Paper beats Rock';
                break;
            case 'scissor':
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
                return 'You win! Scissor beats Paper';
                break;
            case 'rock':
                computeScore++;
                return 'You lose! Rock beats Scissor';
                break;
            default:
                return 'Nobody wins!';
        }
    }
}

function playGame(){
    
    for(let i = 0; i < 5; i++){
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        console.log(playRound(humanChoice, computerChoice));
    }

    if (humanScore > computeScore) {
        console.log('You\'re the winner!');
    } else if (humanScore < computeScore) {
        console.log('Computer\'s the winner!');
    } else {
        console.log('It\'s a tie!');
    }
}

playGame();