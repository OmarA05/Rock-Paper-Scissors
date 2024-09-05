let score = JSON.parse(localStorage.getItem('score')) || {
    wins:0,
    losses:0,
    ties:0
};

function pickComputerMove(){

    const randomNumber = Math.random();
    let computerMove = '';

    if (0 <= randomNumber && randomNumber < 1/3){
        computerMove = 'Rock';
    } else if (1/3 <= randomNumber && randomNumber < 2/3){
        computerMove = 'Paper';
    } else if (2/3 <= randomNumber && randomNumber <= 1){
        computerMove = 'Scissors';
    }

    return computerMove;
}

function playGame(playerMove){
    
    const computerMove = pickComputerMove();
    let result = '';

    if(playerMove === computerMove){
        result = "It's a Tie";
    } else if( playerMove === 'Rock'){
        if(computerMove === 'Paper'){
            result = 'You Lose';
        }
        if(computerMove === 'Scissors'){
            result = 'You Win'
        }
    } else if( playerMove === 'Paper'){
        if(computerMove === 'Scissors'){
            result = 'You Lose';
        }
        if(computerMove === 'Rock'){
            result = 'You Win'
        }
    } else if( playerMove === 'Scissors'){
        if(computerMove === 'Rock'){
            result = 'You Lose';
        }
        if(computerMove === 'Paper'){
            result = 'You Win'
        }
    }

    if (result === 'You Win'){
        score.wins++;
    } else if(result === 'You Lose'){
        score.losses++;
    } else if(result === "It's a Tie"){
        score.ties++;
    }

    localStorage.setItem('score', JSON.stringify(score));

    document.querySelector('.js-moves').innerHTML = `You Chose ${playerMove} V.S  Computers Choice ${computerMove}`;
    
    document.querySelector('.js-result').innerHTML = `${result}`;
    
    updateScore();

    //alert(`You picked ${playerMove} and the computer picked ${computerMove}, ${result}. \n Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`);
}

function updateScore(){
    document.querySelector('.js-score').innerHTML = `Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`;
}

function resetScore(){
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;
    updateScore();

}  
updateScore();