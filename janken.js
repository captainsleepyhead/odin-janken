console.log("Hello World")

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


function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound( humanChoice, computerChoice ) {
        humanChoice = humanChoice.toLowerCase();
        if( (humanChoice == 'rock' && computerChoice == 'rock')
            || (humanChoice == 'paper' && computerChoice == 'paper')
            || (humanChoice == "scissors" && computerChoice == 'scissors') ) {
            console.log(`Draw! ${humanChoice} draws with ${computerChoice}`);
            return 0; // 0 for draw
        }else if ( (humanChoice == 'rock' && computerChoice == 'scissors')
                    || (humanChoice == 'scissors' && computerChoice == 'paper')
                    || (humanChoice == 'paper' && computerChoice == 'rock') ){
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
            return -1; // -1 for human point
        }else {
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
            return 1; // 1 for computer point
        }
    }

    for( let i = 0; i < 5; ++i ) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        
        let checkWinner = playRound(humanSelection, computerSelection);

        if( checkWinner < 0 ){
            ++humanScore;
        }else if ( checkWinner > 0 ) {
            ++computerScore;
        }        console.log("human picked: " + humanSelection);
        console.log("computer picked: " + computerSelection);
    }
    if( humanScore > computerScore ) {
        console.log("After 5 rounds, You have topped the computer!");
        return "human";
    }else if ( computerScore > humanScore ) {
        console.log("After 5 rounds, Computer has topped you :(");
        return "computer";
    }else {
        console.log("After 5 rounds, You draw even with the computer...");
        return null;
    }
}

playGame();
