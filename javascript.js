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

let secondUserChoiceOfGame = prompt( "USER: "+userPoint()+" - COMPUTER: "+computerPoint()+"\n"+"\nRemember that you can use either the initial letters or the complete words");

let userSecondChoiceUpperCase = secondUserChoiceOfGame.toUpperCase();
let secondUserChoice;

function secondMatchUserChoice() {
    if (userSecondChoiceUpperCase === "R" || userSecondChoiceUpperCase === "ROCK") {
        return "ROCK";
    } else if (userSecondChoiceUpperCase === "P" || userSecondChoiceUpperCase === "PAPER") {
        return "PAPER";
    } else if (userSecondChoiceUpperCase === "S" || userSecondChoiceUpperCase === "SCISSORS") {
        return "SCISSORS";
    } else {
        alert("Not a valid choice");
    }
}

secondUserChoice = secondMatchUserChoice();

const secondComputerChoiceOfGame = ["ROCK", "PAPER", "SCISSORS"];
const randomizeSecondComputerChoice = Math.floor(Math.random()*secondComputerChoiceOfGame.length);

function secondComputerChoice() {
    if (randomizeSecondComputerChoice === 0) {
        return "ROCK";
    } else if (randomizeSecondComputerChoice === 1) {
        return "PAPER";
    } else {
        return "SCISSORS";
    } 
}

const secondComputerChoiceValue = secondComputerChoice();

function secondEsit() {
    if (secondUserChoice === "ROCK" && secondComputerChoiceValue === "ROCK" || secondUserChoice === "SCISSORS" && secondComputerChoiceValue === "SCISSORS" || secondUserChoice === "PAPER" && secondComputerChoiceValue === "PAPER") {
        return "The match ended in a tie";
    } else if (secondUserChoice === "ROCK" && secondComputerChoiceValue === "PAPER" || secondUserChoice === "SCISSORS" && secondComputerChoiceValue === "ROCK" || secondUserChoice === "PAPER" && secondComputerChoiceValue === "SCISSORS") {
        return "You lose";
    } else {
        return "You win";
    }

}

console.log(secondEsit());


function userPointSecondMatch() {
    if (secondEsit() === "You win") {
        return userPoint()+1;
    } else {
        return userPoint()+0;
    }
}

function computerPointSecondMatch() {
    if (secondEsit() === "You lose") {
        return computerPoint()+1;
    } else {
        return computerPoint()+0;
    }
}

let userScoreSecondMarch = parseInt(userPointSecondMatch());
let computerScoreSecondMarch = parseInt(computerPointSecondMatch());


let thirdUserChoice = prompt( "USER: "+userScoreSecondMarch+" - COMPUTER: "+computerScoreSecondMarch+"\n"+"\nRemember that you can use either the initial letters or the complete words");
