let userChoice = prompt("Let's play Rock-Paper-Scissors game.\nPlease make your choice.\nYou can use either the initial letters or the complete words.");
let userChoiceUpperCase = userChoice.toUpperCase();
let firstUserChoice;

function firstMatchUserChoice() {
    if (userChoiceUpperCase === "R" || userChoiceUpperCase === "ROCK") {
        return "ROCK";
    } else if (userChoiceUpperCase === "P" || userChoiceUpperCase === "PAPER") {
        return "PAPER";
    } else if (userChoiceUpperCase === "S" || userChoiceUpperCase === "SCISSORS") {
        return "SCISSORS";
    } else {
        alert("Not a valid choice");
    }
}

firstUserChoice = firstMatchUserChoice();

const computerChoice = ["ROCK", "PAPER", "SCISSORS"];
const randomizeComputerChoice = Math.floor(Math.random()*computerChoice.length);

function firstComputerChoice() {
    if (randomizeComputerChoice === 0) {
        return "ROCK";
    } else if (randomizeComputerChoice === 1) {
        return "PAPER";
    } else {
        return "SCISSORS";
    } 
}

const firstComputerChoiceValue = firstComputerChoice();

function firstEsit() {
    if (firstUserChoice === "ROCK" && firstComputerChoiceValue === "ROCK" || firstUserChoice === "SCISSORS" && firstComputerChoiceValue === "SCISSORS" || firstUserChoice === "PAPER" && firstComputerChoiceValue === "PAPER") {
        return "The match ended in a tie";
    } else if (firstUserChoice === "ROCK" && firstComputerChoiceValue === "PAPER" || firstUserChoice === "SCISSORS" && firstComputerChoiceValue === "ROCK" || firstUserChoice === "PAPER" && firstComputerChoiceValue === "SCISSORS") {
        return "You lose";
    } else {
        return "You win";
    }

}

console.log(firstEsit());

function userPoint() {
    if (firstEsit() === "You win") {
        return 1;
    } else {
        return 0;
    }
}

function computerPoint() {
    if (firstEsit() === "You lose") {
        return 1;
    } else {
        return 0;
    }
}

let secondMatch = prompt( "USER: "+userPoint()+" - COMPUTER: "+computerPoint()+"\n"+"\nRemember that you can use either the initial letters or the complete words");



