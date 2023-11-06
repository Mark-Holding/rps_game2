let compScore = 0;
let playerScore = 0;




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
        compScore +=1;
        playerScore +=1;
        return 'Draw!';
        
    } else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'scissors'){
        playerScore +=1;
        return 'You win! Rock beats scissors.';
        
    } else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'paper'){
        compScore +=1;
        return 'You lose! Rock loses to paper.';
        
    } else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'rock'){
        playerScore +=1;
        return 'You win! Paper beats rock.';
        
    } else if(playerSelection.toLowerCase() === 'paper' && computerSelection === 'scissors'){
        compScore +=1;
        return 'You lose! Paper loses to scissors.';
        
    } else if(playerSelection.toLowerCase() === 'scissors' && computerSelection === 'rock'){
        compScore +=1;
        return 'You lose! Scissors beats rock.';
        
    } else if(playerSelection.toLowerCase() === 'scissors' && computerSelection === 'paper'){
        playerScore +=1;
        return 'You win! Scissors beats paper.';
        
    }
}




function game(){
    for (let i = 0; i <5; i++){
        const computerSelection = computerChoice();
        let playerSelection = prompt("Enter your choice");
        console.log(playRound(playerSelection, computerSelection))
    }
    console.log('Computer score: ', compScore);
    console.log('Player Score: ', playerScore);
    if (compScore === playerScore){
        console.log('Final Score: Draw');
    } else if (compScore > playerScore){
        console.log('Final Score: Computer wins')
    } else {
        console.log('Final Score: You win!')
    }

}

game()