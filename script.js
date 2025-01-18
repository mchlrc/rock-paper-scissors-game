// Get the computer's choice
function getComputerChoice() {
  let choices = ["Rock", "Paper", "Scissors"];
  let choice = Math.floor(Math.random() * 3);
  return choices[choice];
}

// Get the human's choice
function getHumanChoice() {
    let choices = ["Rock", "Paper", "Scissors"];
    let choiceIsValid = false;
    let choice = "";
    let basePrompt = "Choose Rock, Paper, or Scissors:";
    let thePrompt = basePrompt;

    while (!choiceIsValid) {
        choice = prompt(thePrompt);

        if (choice === null) {
            choice = getComputerChoice();
        } else {
            choice = choice.toLowerCase().charAt(0).toUpperCase() + choice.slice(1)
        }

        if (choices.includes(choice)) {
            choiceIsValid = true;
        } else {
            thePrompt = `${choice} is not a valid choice.\n${basePrompt}`;
        }
    }
    return choice;
}

// Play a round of rock paper scissors
function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log(`Draw: ${humanChoice} vs. ${computerChoice}`)
        return "Draw"
    }

    let victor = computerChoice

    if (humanChoice === "Rock" && computerChoice === "Scissors") {
        victor = humanChoice;
    } else if (humanChoice === "Paper" && computerChoice === "Rock") {
        victor = humanChoice;
    } else if (humanChoice === "Scissors" && computerChoice === "Paper") {
        victor = humanChoice;
    }

    if (victor === humanChoice) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        return "Human"
    } else {
        console.log(`You lose. ${computerChoice} beats ${humanChoice}`);
        return "Computer"
    }
}

function playGame() {
    // Store Human Score
    let humanScore = 0;

    // Store Computer Score
    let computerScore = 0;

    let round = 1;
    
    while (humanScore + computerScore < 5) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        let result = playRound(humanSelection, computerSelection);
        if (result === "Human") {
            humanScore++;
        } else if (result === "Computer") {
            computerScore++;
        }

        console.log(`Round ${round}: Human - ${humanScore}. Computer - ${computerScore}`);
        round++;
    }

    if (humanScore > computerScore) {
        console.log(`You won ${humanScore}-${computerScore}!`)
    } else {
        console.log(`You lost ${computerScore}-${humanScore}.`)
    }
}

playGame();