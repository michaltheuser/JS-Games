// Rock, Paper, Scissors 

const choices = ["rock", "paper", "scissors"];


function SetUpComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function playOneGame(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "Tie!";
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        return "You win!";
    } else {
        return "You lose!";
    }
}

const playerChoice = choices[Math.floor(Math.random() * choices.length)];
const computerChoice = SetUpComputerChoice();
const result = playOneGame(playerChoice, computerChoice);

console.log(`Player: ${playerChoice}`);
console.log(`Computer: ${computerChoice}`);
console.log(result);