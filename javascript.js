let userChoice = prompt("Let's play Rock-Paper-Scissors game.\nPlease make your choice.\nYou can use either the initial letters or the complete words.");
let userChoiceUpperCase = userChoice.toUpperCase();
let firstUserChoice;

// first user choise
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

// first computer choice
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

// who win first match
function firstEsit() {
    if (firstUserChoice === "ROCK" && firstComputerChoiceValue === "ROCK" || firstUserChoice === "SCISSORS" && firstComputerChoiceValue === "SCISSORS" || firstUserChoice === "PAPER" && firstComputerChoiceValue === "PAPER") {
        return "This match ended in a tie";
    } else if (firstUserChoice === "ROCK" && firstComputerChoiceValue === "PAPER" || firstUserChoice === "SCISSORS" && firstComputerChoiceValue === "ROCK" || firstUserChoice === "PAPER" && firstComputerChoiceValue === "SCISSORS") {
        return "You lose this match";
    } else {
        return "You win this match";
    }

}

console.log(firstEsit());

//point at the end of first match

function userPoint() {
    if (firstEsit() === "You win this match") {
        return 1;
    } else {
        return 0;
    }
}

function computerPoint() {
    if (firstEsit() === "You lose this match") {
        return 1;
    } else {
        return 0;
    }
}

let secondUserChoiceOfGame = prompt( "USER: "+userPoint()+" - COMPUTER: "+computerPoint()+"\n"+"\nLet's play another match.\nRemember that you can use either the initial letters or the complete words");

//start second match


let userSecondChoiceUpperCase = secondUserChoiceOfGame.toUpperCase();
let secondUserChoice;

// second user choise

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

// second computer choice

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

// who win second match
function secondEsit() {
    if (secondUserChoice === "ROCK" && secondComputerChoiceValue === "ROCK" || secondUserChoice === "SCISSORS" && secondComputerChoiceValue === "SCISSORS" || secondUserChoice === "PAPER" && secondComputerChoiceValue === "PAPER") {
        return "This match ended in a tie";
    } else if (secondUserChoice === "ROCK" && secondComputerChoiceValue === "PAPER" || secondUserChoice === "SCISSORS" && secondComputerChoiceValue === "ROCK" || secondUserChoice === "PAPER" && secondComputerChoiceValue === "SCISSORS") {
        return "You lose this match";
    } else {
        return "You win this match";
    }

}

console.log(secondEsit());

//point at the end of second match

function userPointSecondMatch() {
    if (secondEsit() === "You win this match") {
        return userPoint()+1;
    } else {
        return userPoint()+0;
    }
}

function computerPointSecondMatch() {
    if (secondEsit() === "You lose this match") {
        return computerPoint()+1;
    } else {
        return computerPoint()+0;
    }
}

let userScoreSecondMatch = parseInt(userPointSecondMatch());
let computerScoreSecondMatch = parseInt(computerPointSecondMatch());


let thirdUserChoiceOfGame = prompt( "USER: "+userScoreSecondMatch+" - COMPUTER: "+computerScoreSecondMatch+"\n"+"\nLet's play another match.\nRemember that you can use either the initial letters or the complete words");

//start third match

let userThirdChoiceUpperCase = thirdUserChoiceOfGame.toUpperCase();
let thirdUserChoice;

// third user choise

function thirdMatchUserChoice() {
    if (userThirdChoiceUpperCase === "R" || userThirdChoiceUpperCase === "ROCK") {
        return "ROCK";
    } else if (userThirdChoiceUpperCase === "P" || userThirdChoiceUpperCase === "PAPER") {
        return "PAPER";
    } else if (userThirdChoiceUpperCase === "S" || userThirdChoiceUpperCase === "SCISSORS") {
        return "SCISSORS";
    } else {
        alert("Not a valid choice");
    }
}

thirdUserChoice = thirdMatchUserChoice();

// third computer choice

const thirdComputerChoiceOfGame = ["ROCK", "PAPER", "SCISSORS"];
const randomizeThirdComputerChoice = Math.floor(Math.random()*thirdComputerChoiceOfGame.length);

function thirdComputerChoice() {
    if (randomizeThirdComputerChoice === 0) {
        return "ROCK";
    } else if (randomizeThirdComputerChoice === 1) {
        return "PAPER";
    } else {
        return "SCISSORS";
    } 
}

const thirdComputerChoiceValue = thirdComputerChoice();

// who win third match
function thirdEsit() {
    if (thirdUserChoice === "ROCK" && thirdComputerChoiceValue === "ROCK" || thirdUserChoice === "SCISSORS" && thirdComputerChoiceValue === "SCISSORS" || thirdUserChoice === "PAPER" && thirdComputerChoiceValue === "PAPER") {
        return "This match ended in a tie";
    } else if (thirdUserChoice === "ROCK" && thirdComputerChoiceValue === "PAPER" || thirdUserChoice === "SCISSORS" && thirdComputerChoiceValue === "ROCK" || thirdUserChoice === "PAPER" && thirdComputerChoiceValue === "SCISSORS") {
        return "You lose this match";
    } else {
        return "You win this match";
    }

}

console.log(thirdEsit());

//point at the end of third match

function userPointThirdMatch() {
    if (thirdEsit() === "You win this match") {
        return userScoreSecondMatch+1;
    } else {
        return userScoreSecondMatch+0;
    }
}

function computerPointThirdMatch() {
    if (thirdEsit() === "You lose this match") {
        return computerScoreSecondMatch+1;
    } else {
        return computerScoreSecondMatch+0;
    }
}

let userScoreThirdMatch = parseInt(userPointThirdMatch());
let computerScoreThirdMatch = parseInt(computerPointThirdMatch());

let fourthUserChoiceOfGame = prompt( "USER: "+userScoreThirdMatch+" - COMPUTER: "+computerScoreThirdMatch+"\n"+"\nLet's play another match.\nRemember that you can use either the initial letters or the complete words");

// start fourth match

let userFourthChoiceUpperCase = fourthUserChoiceOfGame.toUpperCase();
let fourthUserChoice;

// fourth user choise

function fourthMatchUserChoice() {
    if (userFourthChoiceUpperCase === "R" || userFourthChoiceUpperCase === "ROCK") {
        return "ROCK";
    } else if (userFourthChoiceUpperCase === "P" || userFourthChoiceUpperCase === "PAPER") {
        return "PAPER";
    } else if (userFourthChoiceUpperCase === "S" || userFourthChoiceUpperCase === "SCISSORS") {
        return "SCISSORS";
    } else {
        alert("Not a valid choice");
    }
}

fourthUserChoice = fourthMatchUserChoice();

// fourth computer choice

const fourthComputerChoiceOfGame = ["ROCK", "PAPER", "SCISSORS"];
const randomizeFourthComputerChoice = Math.floor(Math.random()*fourthComputerChoiceOfGame.length);

function fourthComputerChoice() {
    if (randomizeFourthComputerChoice === 0) {
        return "ROCK";
    } else if (randomizeFourthComputerChoice === 1) {
        return "PAPER";
    } else {
        return "SCISSORS";
    } 
}

const fourthComputerChoiceValue = fourthComputerChoice();

// who win fourth match
function fourthEsit() {
    if (fourthUserChoice === "ROCK" && fourthComputerChoiceValue === "ROCK" || fourthUserChoice === "SCISSORS" && fourthComputerChoiceValue === "SCISSORS" || fourthUserChoice === "PAPER" && fourthComputerChoiceValue === "PAPER") {
        return "This match ended in a tie";
    } else if (fourthUserChoice === "ROCK" && fourthComputerChoiceValue === "PAPER" || fourthUserChoice === "SCISSORS" && fourthComputerChoiceValue === "ROCK" || fourthUserChoice === "PAPER" && fourthComputerChoiceValue === "SCISSORS") {
        return "You lose this match";
    } else {
        return "You win this match";
    }

}

console.log(fourthEsit());

//point at the end of fourth match
function userPointFourthMatch() {
    if (fourthEsit() === "You win this match") {
        return userScoreThirdMatch+1;
    } else {
        return userScoreThirdMatch+0;
    }
}

function computerPointFourthMatch() {
    if (fourthEsit() === "You lose this match") {
        return computerScoreThirdMatch+1;
    } else {
        return computerScoreThirdMatch+0;
    }
}

let userScoreFourthMatch = parseInt(userPointFourthMatch());
let computerScoreFourthMatch = parseInt(computerPointFourthMatch());

let lastUserChoiceOfGame = prompt( "USER: "+userScoreFourthMatch+" - COMPUTER: "+computerScoreFourthMatch+"\n"+"\nLet's play the last match.\nRemember that you can use either the initial letters or the complete words");

//start last match

let userLastChoiceUpperCase = lastUserChoiceOfGame.toUpperCase();
let lastUserChoice;

// last user choise

function lastMatchUserChoice() {
    if (userLastChoiceUpperCase === "R" || userLastChoiceUpperCase === "ROCK") {
        return "ROCK";
    } else if (userLastChoiceUpperCase === "P" || userLastChoiceUpperCase === "PAPER") {
        return "PAPER";
    } else if (userLastChoiceUpperCase === "S" || userLastChoiceUpperCase === "SCISSORS") {
        return "SCISSORS";
    } else {
        alert("Not a valid choice");
    }
}

lastUserChoice = lastMatchUserChoice();

// last computer choice

const lastComputerChoiceOfGame = ["ROCK", "PAPER", "SCISSORS"];
const randomizeLastComputerChoice = Math.floor(Math.random()*lastComputerChoiceOfGame.length);

function lastComputerChoice() {
    if (randomizeLastComputerChoice === 0) {
        return "ROCK";
    } else if (randomizeLastComputerChoice === 1) {
        return "PAPER";
    } else {
        return "SCISSORS";
    } 
}

const lastComputerChoiceValue = lastComputerChoice();

// who win last match
function lastEsit() {
    if (lastUserChoice === "ROCK" && lastComputerChoiceValue === "ROCK" || lastUserChoice === "SCISSORS" && lastComputerChoiceValue === "SCISSORS" || lastUserChoice === "PAPER" && lastComputerChoiceValue === "PAPER") {
        return "This match ended in a tie";
    } else if (lastUserChoice === "ROCK" && lastComputerChoiceValue === "PAPER" || lastUserChoice === "SCISSORS" && lastComputerChoiceValue === "ROCK" || lastUserChoice === "PAPER" && lastComputerChoiceValue === "SCISSORS") {
        return "You lose this match";
    } else {
        return "You win this match";
    }

}

console.log(lastEsit());

//point at the end of last match

function userPointLastMatch() {
    if (lastEsit() === "You win this match") {
        return userScoreFourthMatch+1;
    } else {
        return userScoreFourthMatch+0;
    }
}

function computerPointLastMatch() {
    if (lastEsit() === "You lose this match") {
        return computerScoreFourthMatch+1;
    } else {
        return computerScoreFourthMatch+0;
    }
}

let userScoreLastMatch = parseInt(userPointLastMatch());
let computerScoreLastMatch = parseInt(computerPointLastMatch());

//who win the game

function esitGame() {
    if (userScoreLastMatch < computerScoreLastMatch) {
        return "You lose the game";
    } else if (userScoreLastMatch === computerScoreLastMatch) {
        return "The game ended in a tie";
    } else {
        return "You win the game";
    }
}

let final = alert( "USER: "+userScoreLastMatch+" - COMPUTER: "+computerScoreLastMatch+"\n"+esitGame());
