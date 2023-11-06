const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');
const resultsDiv = document.querySelector('.results');
const scores = document.querySelector('.scores');
const playerScoreUpdate = document.querySelector('#playerScoreUpdate');
const compScoreUpdate = document.querySelector('#computerScoreUpdate');
const finalResult = document.querySelector('#finalResult');

let computerSelection;
let compScore = 0;
let playerScore = 0;

rockBtn.addEventListener('click', () => playRound('rock', computerSelection));
paperBtn.addEventListener('click', () => playRound('paper', computerSelection));
scissorsBtn.addEventListener('click', () => playRound('scissors', computerSelection));




function computerChoice() {
    let compRandNumber = Math.floor(Math.random()*3) 
    if(compRandNumber === 0){
        return 'rock';
    } else if(compRandNumber === 1){
        return 'paper';
    } else {
        return 'scissors';
    }
};



function playRound(playerSelection, computerSelection){
    computerSelection = computerChoice();
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection.toLowerCase() === computerSelection){
        compScore +=1;
        playerScore +=1;
        resultsDiv.textContent = 'Draw!';
        
    } else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'scissors'){
        playerScore +=1;
        resultsDiv.textContent = 'You win! Rock beats scissors.';
        
    } else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'paper'){
        compScore +=1;
        resultsDiv.textContent = 'You lose! Rock loses to paper.';
        
    } else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'rock'){
        playerScore +=1;
        resultsDiv.textContent = 'You win! Paper beats rock.';
        
    } else if(playerSelection.toLowerCase() === 'paper' && computerSelection === 'scissors'){
        compScore +=1;
        resultsDiv.textContent = 'You lose! Paper loses to scissors.';
        
    } else if(playerSelection.toLowerCase() === 'scissors' && computerSelection === 'rock'){
        compScore +=1;
        resultsDiv.textContent = 'You lose! Scissors beats rock.';
        
    } else if(playerSelection.toLowerCase() === 'scissors' && computerSelection === 'paper'){
        playerScore +=1;
        resultsDiv.textContent = 'You win! Scissors beats paper.';
        
    }

    playerScoreUpdate.textContent = playerScore;
    compScoreUpdate.textContent = compScore;

    if (compScore === 5 || playerScore === 5){

        if (compScore > playerScore){
            finalResult.textContent = 'Computer wins';
        } else if (compScore < playerScore){
            finalResult.textContent = 'You win!';
        } 

    }

}
