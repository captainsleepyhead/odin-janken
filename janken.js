function getComputerChoice() {
    let randChoice = Math.floor(Math.random()* 3) + 1;
    if( randChoice === 1 ) return "rock";
    else if ( randChoice === 2 ) return "paper";
    else if ( randChoice === 3 ) return "scissors";
    else return "error"
}


function getHumanChoice() {
    return prompt(`You May Choose Between Rock, Paper, or Scissors`);

}

let humanScore = 0;
let computerScore = 0;

let display = document.querySelector(".display");
display.style.marginTop = "-25px";

function playRound( humanChoice, computerChoice ) {
    let display = document.querySelector(".display");
    display.style.marginTop = "-25px";

    if(humanScore == 5 || computerScore == 5){
        while(display.firstChild){
            display.removeChild(display.lastChild);
        }
        humanScore = 0;
        computerScore = 0;
    }
    humanChoice = humanChoice.toLowerCase();
    if( (humanChoice == 'rock' && computerChoice == 'rock')
        || (humanChoice == 'paper' && computerChoice == 'paper')
        || (humanChoice == "scissors" && computerChoice == 'scissors') ) {
        display.innerHTML += `<br /><br />Draw! ${humanChoice} draws with ${computerChoice}`;
        return 0; // 0 for draw
    }else if ( (humanChoice == 'rock' && computerChoice == 'scissors')
                || (humanChoice == 'scissors' && computerChoice == 'paper')
                || (humanChoice == 'paper' && computerChoice == 'rock') ){
        display.innerHTML += `<br /><br />You win! ${humanChoice} beats ${computerChoice}`;
        return -1; // -1 for human point
    }else {
        display.innerHTML += `<br /><br />You lose! ${computerChoice} beats ${humanChoice}`;
        return 1; // 1 for computer point
    }
}

let selection = document.querySelector(".selection");

selection.addEventListener('click', (e) => {

    let result = 0;
    let display = document.querySelector(".display");
    
    switch(e.target.id){
        case 'paper':
            result = playRound('paper', getComputerChoice());
            if (result === -1) ++humanScore;
            else if (result === 1) ++computerScore;
            display.innerHTML += `<br />Your score: ${humanScore}. Computer score: ${computerScore}`;
            if(humanScore === 5){
                display.innerHTML += "<br /> You win!";
            }else if(computerScore === 5){
                display.innerHTML += "<br /> Computer wins.";
            }
            break;
        case 'rock':
            result = playRound('rock', getComputerChoice());
            if (result === -1) ++humanScore;
            else if (result === 1) ++computerScore;
            display.innerHTML += `<br />Your score: ${humanScore}. Computer score: ${computerScore}`;
            if(humanScore === 5){
                display.innerHTML += "<br /> You win!";
            }else if(computerScore === 5){
                display.innerHTML += "<br /> Computer wins.";
            }
            break;
        case 'scissors':
            result = playRound('scissors', getComputerChoice());
            if (result === -1) ++humanScore;
            else if (result === 1) ++computerScore;
            display.innerHTML += `<br />Your score: ${humanScore}. Computer score: ${computerScore}`;
            if(humanScore === 5){
                display.innerHTML += "<br /> You win!";
            }else if(computerScore === 5){
                display.innerHTML += "<br /> Computer wins.";
            }
            break; 
    }
})
