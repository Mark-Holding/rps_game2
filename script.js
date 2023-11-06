function getComputerChoice() {
    let compRandNumber = Math.floor(Math.random()*3) 
    if(compRandNumber === 0){
        return 'Rock';
    } else if(compRandNumber === 1){
        return 'Paper';
    } else {
        return 'Scissors';
    }
};

getComputerChoice()