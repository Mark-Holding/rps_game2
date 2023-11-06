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
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection.toLowerCase() === computerSelection){
        console.log('Draw!')
    } else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'scissors'){
        console.log('You win! Rock beats scissors.');
    } else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'paper'){
        console.log('You lose! Rock loses to paper.');
    } else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'rock'){
        console.log('You win! Paper beats rock.');
    } else if(playerSelection.toLowerCase() === 'paper' && computerSelection === 'scissors'){
        console.log('You lose! Paper loses to scissors.');
    } else if(playerSelection.toLowerCase() === 'scissors' && computerSelection === 'rock'){
        console.log('You lose! Scissors beats rock.');
    } else if(playerSelection.toLowerCase() === 'scissors' && computerSelection === 'paper'){
        console.log('You win! Scissors beats paper.');
    }
}

const playerSelection = "Rock";
const computerSelection = computerChoice();
console.log(playRound(playerSelection, computerSelection))