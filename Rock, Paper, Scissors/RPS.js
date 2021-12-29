function computerPlay() {
    let num = Math.floor(Math.random() * 3)
    if(num == 0) {
        return 'Rock';
    }
    else if(num == 1) {
        return 'Paper';
    }
    else {
        return 'Scissors';
    }
}

function playRound(playerSelection, computerSelection) {
    let pS = playerSelection.toLowerCase(), cS = computerSelection.toLowerCase();
    if(pS == 'rock') {
        if(cS == 'paper') {
            return "(C) You just got out-RNGed by the computer! Paper beats rock!";
        }
        else if(cS = 'scissors') {
            return "(P) You won! Rock beats scissors!";
        }
        else {
            return "(T) TIE! Rock matches rock!";
        }
    }
    else if(pS == 'paper') {
        if(cS == 'rock') {
            return "(P) You won! Paper beats rock!";
        }
        else if(cS = 'scissors') {
            return "(C) You just got out-RNGed by the computer! Scissors beats paper!";
        }
        else {
            return "(T) TIE! Paper matches paper!";
        }
    }
    else {
        if(cS == 'paper') {
            return "(P) You won! Scissors beats paper!";
        }
        else if(cS = 'rock') {
            return "(C) You just got out-RNGed by the computer! Rock beats scissors!";
        }
        else {
            return "(T) TIE! Scissors matches scissors!";
        }
    }
}
let p_score = 0;
let c_score = 0;
const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {

  button.addEventListener('click', () => {
    let cS = computerPlay();
    let result = playRound(button.textContent, cS);
    announcer.textContent = `${result}`;
    if(result[1] == 'P') {
        p_score++;
        score_board.textContent = `Player Score: ${p_score}, Computer Score: ${c_score}`;
    }
    else if(result[1] == 'C') {
        c_score++;
        score_board.textContent = `Player Score: ${p_score}, Computer Score: ${c_score}`;
    }
    if(c_score == 5 || p_score == 5) {
        if(p_score == 5) {
            winner.textContent = 'You won!';
        }
        else {
            winner.textContent = 'The computer won!';
        }
    }
  });
});
const body = document.querySelector('body');

const score_board = document.createElement('div');
score_board.textContent = `Player Score: ${p_score}, Computer Score: ${c_score}`;

const announcer = document.createElement('h3');

const winner = document.createElement('h2');

body.appendChild(score_board);
body.appendChild(announcer);
body.appendChild(winner);