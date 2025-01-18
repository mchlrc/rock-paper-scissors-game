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

// Store Human Score
let humanScore = 0;

// Store Computer Score
let computerScore = 0;