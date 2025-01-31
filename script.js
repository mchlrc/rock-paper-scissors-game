let humanScore = 0;
let computerScore = 0;
let roundNumber = 1;
let gameLength = 5;
let isGameOver = false;

const result = document.querySelector("p");

const roundNumberCell = document.getElementById("rnd-number");
const humanScoreCell = document.getElementById("hmn-score");
const computerScoreCell = document.getElementById("cmp-score");

const buttons = document.querySelectorAll("#options");
buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    let humanChoice = event.target.textContent;
    let robotChoice = getComputerChoice();
    console.log(`button clicked: humanChoice: ${humanChoice}`);
    playRound(humanChoice, robotChoice);
  });
});

const resultsTable = document.querySelector("table");
const restartButton = document.createElement("button");

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
      choice = choice.toLowerCase().charAt(0).toUpperCase() + choice.slice(1);
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
  let outcome = "Draw";

  if (humanChoice === computerChoice) {
    console.log(`It's a draw. ${humanChoice} vs. ${computerChoice}`);
    if (!isGameOver) {
      result.textContent = `It's a draw. ${humanChoice} vs. ${computerChoice}`;
    }
    return;
  }

  let victor = computerChoice;

  if (humanChoice === "Rock" && computerChoice === "Scissors") {
    victor = humanChoice;
  } else if (humanChoice === "Paper" && computerChoice === "Rock") {
    victor = humanChoice;
  } else if (humanChoice === "Scissors" && computerChoice === "Paper") {
    victor = humanChoice;
  }

  if (victor === humanChoice) {
    console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    if (!isGameOver) {
      result.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
    }
    outcome = "Human";
  } else if (victor === computerChoice) {
    console.log(`You lose. ${computerChoice} beats ${humanChoice}`);
    if (!isGameOver) {
      result.textContent = `You lose. ${computerChoice} beats ${humanChoice}`;
    }
    outcome = "Computer";
  }

  updateGameState(outcome);
}

function updateGameState(outcome) {
  // Store Human Score
  console.log(`updateGameState(${outcome})`);
  // Store Computer Score

  if (roundNumber <= gameLength) {
    // let humanSelection = getHumanChoice();
    // let computerSelection = getComputerChoice();
    // let result = playRound(humanSelection, computerSelection);
    if (outcome === "Human") {
      humanScore++;
    } else if (outcome === "Computer") {
      computerScore++;
    }

    console.log(
      `Round ${roundNumber}: Human - ${humanScore}. Computer - ${computerScore}`
    );

    if (outcome !== "Draw") {
      roundNumber++;
    }

    if (roundNumber > gameLength) {
      roundNumberCell.textContent = roundNumber;
    } else {
      roundNumberCell.textContent = gameLength;
    }
  } else {
    isGameOver = true;
    if (humanScore > computerScore) {
      console.log(`You won ${humanScore}-${computerScore}!`);
      result.textContent = `You won ${humanScore}-${computerScore}!`;
    } else {
      console.log(`You lost ${computerScore}-${humanScore}.`);
      result.textContent = `You lost ${computerScore}-${humanScore}.`;
    }
  }

  humanScoreCell.textContent = humanScore;
  computerScoreCell.textContent = computerScore;

  if (isGameOver) {
    resultsTable.parentElement.appendChild(restartButton);

    restartButton.textContent = "Restart Game";
    restartButton.addEventListener("click", () => {
      resetGame();
      restartButton.remove();
    });
  }
}

function resetGame() {
  humanScore = 0;
  computerScore = 0;
  roundNumber = 1;
  isGameOver = false;
  humanScoreCell.textContent = humanScore;
  computerScoreCell.textContent = computerScore;
  roundNumberCell.textContent = roundNumber;
  result.textContent = "";
}

//playGame();
