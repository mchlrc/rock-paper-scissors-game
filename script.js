// Get the computer's choice
function getComputerChoice() {
  let choices = ["Rock", "Paper", "Scissors"];
  let choice = Math.floor(Math.random() * 3);
  return choices[choice];
}