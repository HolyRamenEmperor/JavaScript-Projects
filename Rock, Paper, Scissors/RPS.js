function computerPlay() {
    let num = Math.floor(Math.random() * 3)
    if(num == 0) {
        return 'Rock';
    }
    else if(num == 1) {
        return 'Scissors';
    }
    else {
        return 'Rock';
    }
}

function playRound(playerSelection, computerSelection) {
    let pS = playerSelection.toLowerCase(), cS = playerSelection.toLowerCase();
    if(pS == 'rock') {
        if(cS == 'paper') {
            return "You just got out-RNGed by the computer! Paper beats rock!";
        }
        else if(cS = 'scissors') {
            return "You won! Rock beats scissors!";
        }
        else {
            return "TIE! Rock matches rock!";
        }
    }
    else if(pS == 'paper') {
        if(cS == 'rock') {
            return "You won! Paper beats rock!";
        }
        else if(cS = 'scissors') {
            return "You just got out-RNGed by the computer! Scissors beats paper!";
        }
        else {
            return "TIE! Paper matches paper!";
        }
    }
    else {
        if(cS == 'paper') {
            return "You won! Scissors beats paper!";
        }
        else if(cS = 'rock') {
            return "You just got out-RNGed by the computer! Rock beats scissors!";
        }
        else {
            return "TIE! Scissors matches scissors!";
        }
    }
}
function game() {
    for(let i = 1; i <= 5; i++) {
        let pS = prompt("Rock, Paper, or Scissors?");
        let cS = computerPlay();
        let result = playRound(pS, cS);
        console.log(result);
    }
}
game()