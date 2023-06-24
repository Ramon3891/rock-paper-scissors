let splash = document.getElementById("splash");

function audioStatus() { //from muted to unmuted
    let symbol = document.getElementById("audioSymbol");
    let audioElement = document.getElementById("funeral");
  
    if (symbol.textContent === "🔇") {
      symbol.textContent = "🔊";
      audioElement.muted = false;
    } else {
      symbol.textContent = "🔇";
      audioElement.muted = true;
    }
  
  }

  const presentation = document.createElement("p");
  presentation.style.color = "white";
  presentation.style.fontSize = "27px";
  presentation.style.whiteSpace = "pre-wrap"; // Utilizzo della proprietà whiteSpace
  presentation.style.overflowWrap = "break-word";
  presentation.style.lineHeight = "40px";
  let textForPresentation = `Well, dude, you're dead! It would happen sooner or later, it just happened, but...
But I want to give you a chance to postpone your death.
Are you happy?
Usually, I do this thing by playing chess, but you'll never win a chess game against me, so let's try something more luck-oriented.
What do you think about a "Rock-Paper-Scissors" game?
Do you want to give it a try?`;
  let splashContainer = document.getElementById("splashContainer");
  splashContainer.appendChild(presentation);

  splashContainer.insertBefore(presentation, buttonContainer);


  let typeWriter = textForPresentation.split("");
  let i = 0;
  
  function typeWriterOn() {
    if (i < typeWriter.length) {
      presentation.textContent += typeWriter[i];
      i++;
    }
  }
  
  setInterval(typeWriterOn, 50);


  function readRules() {
    presentation.remove()
    let explainRules = document.getElementById("explainRules");
    explainRules.remove()

    const rulesExplained = document.createElement("p");
    rulesExplained.style.color = "white";
    rulesExplained.style.fontSize = "23px";
    rulesExplained.style.whiteSpace = "pre-wrap";
    rulesExplained.style.overflowWrap = "break-word";
    rulesExplained.style.lineHeight = "32px";
    rulesExplained.textContent = `The rules of "Rock-Paper-Scissors" are very simple:
You have to choose between rock, paper, and scissors. Then:
- If you are playing rock, you win if your opponent chooses scissors (rock breaks scissors).
- If you are playing scissors, you win if your opponent chooses paper (scissors cut paper).
- If you are playing paper, you win if your opponent chooses rock (paper wraps rock).
- If you and your opponent are playing the same move, the match ends in a tie.
- Otherwise, you lose and, if you lose, you die.
Ps: The winner is the first person to reach 5 points.`;
let splashContainer = document.getElementById("splashContainer");
splashContainer.appendChild(rulesExplained);

splashContainer.insertBefore(rulesExplained, buttonContainer);
}

function runGame() {
  document.getElementById("splash").classList.add("invisibleChoice");
  document.getElementById("game").classList.remove("gameInvisible");
  document.getElementById("game").classList.add("gameVisible");
}


let playerRock = document.getElementById("playerRock");
let playerPaper = document.getElementById("playerPaper");
let playerScissors = document.getElementById("playerScissors");
let rockSymbol = document.getElementById("rockSymbol");
let paperSymbol = document.getElementById("paperSymbol");
let scissorsSymbol = document.getElementById("scissorsSymbol");
let rockOnCloth = document.getElementById("rockOnCloth");
let paperOnCloth = document.getElementById("paperOnCloth");
let scissorsOnCloth = document.getElementById("scissorsOnCloth");
let deathPlayRock = document.getElementById("deathPlayRock");
let deathPlayPaper = document.getElementById("deathPlayPaper");
let deathPlayScissors = document.getElementById("deathPlayScissors");
let playerPoint = document.getElementById("playerPoint");
let deathPoint = document.getElementById("deathPoint");
let pseudoPrompt = document.getElementById("pseudoPrompt");
let next = document.getElementById("next");
let endGame = document.getElementById("finish");
let center = document.getElementById("center");
let clothPlayer = document.getElementById("clothPlayer");
let palyerField = document.getElementById("palyerField");
let deathField = document.getElementById("deathField");
let game = document.getElementById("game");
let splashOut = document.getElementById("splashOut");
let deathSplash = document.getElementById("deathSplash");
let coffin = document.getElementById("coffin");
let coffinDeath = document.getElementById("coffinDeath");
let userCelebrate = document.getElementById("userCelebrate");


let userPointOfGame = 0;
let deathPointOfGame = 0;

playerPoint.textContent = userPointOfGame.toString();
deathPoint.textContent = deathPointOfGame.toString();
pseudoPrompt.textContent="let's start the game";


   function changeRock() {
    rockSymbol.classList.add("dissolve");
          rockOnCloth.classList.remove("invisibleChoice");
          rockOnCloth.classList.add("visibleChoice");
          playerOutput();
   }

   function changePaper() {
    paperSymbol.classList.add("dissolve");
        paperOnCloth.classList.remove("invisibleChoice");
        paperOnCloth.classList.add("visibleChoice");
        playerOutput();
   }

   function changeScissors() {
    scissorsSymbol.classList.add("dissolve");
        scissorsOnCloth.classList.remove("invisibleChoice");
        scissorsOnCloth.classList.add("visibleChoice");
        playerOutput();
   }

   

      function playerOutput() {
        let conditionPaper = paperOnCloth.className;
        let conditionSissors = scissorsOnCloth.className;
        let conditionRock = rockOnCloth.className;
        if (conditionRock === "visibleChoice") {
          return "rock";
        } else if (conditionPaper === "visibleChoice") {
        return "paper";
        } else if (conditionSissors === "visibleChoice") {
        return "scissors";
        } else {
          return false;
        }
      }

       

     

function checkGame () {
  if (deathPointOfGame<5 && userPointOfGame<5) {
    return true;
  } else if (deathPointOfGame === 5) {
    return "death";
  } else if (userPointOfGame === 5) {
    return "user";
  } else {
    return false;
  }
}

// first computer choice


function deathChoice() {
  const options = ["rockDeath", "paperDeath", "scissorsDeath"];
  const randomIndex = Math.floor(Math.random() * options.length);
  const chosenOption = options[randomIndex];

  if (chosenOption === "rockDeath") {
    deathPlayRock.classList.remove("invisibleChoice");
    deathPlayRock.classList.add("visibleChoice");
  } else if (chosenOption === "paperDeath") {
    deathPlayPaper.classList.remove("invisibleChoice");
    deathPlayPaper.classList.add("visibleChoice");
  } else {
    deathPlayScissors.classList.remove("invisibleChoice");
    deathPlayScissors.classList.add("visibleChoice");
  }
  
  return chosenOption;
}

function playGame () {
  let deathOutput = deathChoice();
  if ( (checkGame() === true && ((playerOutput() === "rock" && deathOutput === "paperDeath") || (playerOutput() === "paper" && deathOutput === "scissorsDeath") || (playerOutput() === "scissors" && deathOutput === "rockDeath"))) ){
    let internalPointDeath = deathPointOfGame + 1;
    internalPointDeath != 5 ? (next.classList.remove("invisibleChoice"), next.classList.add("visibleNext")) : finishDeath();
    deathPoint.textContent = internalPointDeath;
    deathWin();
    return ++deathPointOfGame;
  } else if ((checkGame() === true &&  ((playerOutput() === "rock" && deathOutput === "scissorsDeath") || (playerOutput() === "paper" && deathOutput === "rockDeath") || (playerOutput() === "scissors" && deathOutput === "paperDeath"))) ){
    let internalPointUser = userPointOfGame + 1;
    internalPointUser != 5 ? (next.classList.remove("invisibleChoice"), next.classList.add("visibleNext")) : finishUser();
    playerPoint.textContent = internalPointUser;
    deathLose();
    return ++userPointOfGame;
  } else if ((checkGame() === true && ((playerOutput() === "rock" && deathOutput === "rockDeath") || (playerOutput() === "paper" && deathOutput === "paperDeath") || (playerOutput() === "scissors" && deathOutput === "scissorsDeath"))) ){
    pseudoPrompt.textContent="match in tie";
    next.classList.remove("invisibleChoice");
    next.classList.add("visibleNext");
    return "match in tie";
  } else if (checkGame() === "death") {
    finishDeath();
  } else if (checkGame() === "user") {
    finishUser();
  } else {
    return false;
  }
}



        
      function reset () {
        rockSymbol.classList.remove("dissolve");
        rockOnCloth.classList.remove("visibleChoice");
        paperSymbol.classList.remove("dissolve");
        paperOnCloth.classList.remove("visibleChoice");
        scissorsSymbol.classList.remove("dissolve");
        scissorsOnCloth.classList.remove("visibleChoice");
        deathPlayRock.classList.remove("visibleChoice");
        deathPlayPaper.classList.remove("visibleChoice");
        next.classList.remove("visibleNext");
        next.classList.add("invisibleChoice");
        rockOnCloth.classList.add("invisibleChoice");
        paperOnCloth.classList.add("invisibleChoice");
        scissorsOnCloth.classList.add("invisibleChoice");
        deathPlayRock.classList.add("invisibleChoice");
        deathPlayPaper.classList.add("invisibleChoice");
        deathPlayScissors.classList.add("invisibleChoice");
        deathPlayScissors.classList.remove("visibleChoice");
        pseudoPrompt.textContent=("Make your choice");
    }

<<<<<<< HEAD
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
=======
    function deathWin() {
      let internalPointDeathCaseWin = deathPointOfGame + 1;
      if (internalPointDeathCaseWin === 1) {
        pseudoPrompt.textContent="You lose, I win";
      } else if (internalPointDeathCaseWin === 2) {
        pseudoPrompt.textContent="You lose, again! You are a loser!";
      } else if (internalPointDeathCaseWin === 3) {
        pseudoPrompt.textContent="You don't seem to be in such good shape, I still won";
      } else if (internalPointDeathCaseWin === 4) {
        pseudoPrompt.textContent="I have a match point!";
      } else if (internalPointDeathCaseWin === 5) {
        pseudoPrompt.textContent="You lose the game! You know what this means?";
      } else {
        return false;
      }
>>>>>>> rps-ui
    }


        function deathLose() {
          let internalPointUserCaseWin = userPointOfGame + 1;
      if (internalPointUserCaseWin === 1) {
        pseudoPrompt.textContent="Wow, you scored a point, I'm desperate";
      } else if (internalPointUserCaseWin === 2) {
        pseudoPrompt.textContent="You scored another point but the game is still long";
      } else if (internalPointUserCaseWin === 3) {
        pseudoPrompt.textContent="Oh, you are a lucky one, aren't you?";
      } else if (internalPointUserCaseWin === 4) {
        pseudoPrompt.textContent="Damn, you have a match point";
      } else if (internalPointUserCaseWin === 5) {
        pseudoPrompt.textContent="You won, I don't know how you did it, but you won";
        } else  {
        return false;
        }
      }

          function finishDeath() {
            endGame.classList.remove("invisibleChoice");
            endGame.classList.add("visibleNext");
            palyerField.classList.remove("fixedCenter");
            palyerField.classList.add("invisibleChoice");
          clothPlayer.classList.remove("playerSide");
          clothPlayer.classList.add("invisibleChoice");
          next.classList.remove("visibleNext");
          next.classList.add("invisibleChoice");
      }


<<<<<<< HEAD
let thirdUserChoiceOfGame = prompt( "USER: "+userScoreSecondMatch+" - COMPUTER: "+computerScoreSecondMatch+"\n"+"\nLet's play another match.\nRemember that you can use either the initial letters or the complete words");
=======
      function finishUser() {
            endGame.classList.remove("invisibleChoice");
            endGame.classList.add("visibleNext");
            deathField.classList.remove("deathDivImg");
            deathField.classList.add("invisibleChoice");
            clothDeath.classList.remove("playerSide");
            clothDeath.classList.add("invisibleChoice");
            next.classList.remove("visibleNext");
          next.classList.add("invisibleChoice");
      }
>>>>>>> rps-ui

      function finish() {
        if (deathPointOfGame >= 5) {
            endGame.classList.remove("visibleNext");
            endGame.classList.add("invisibleChoice");
            game.classList.remove("gameVisible");
            game.classList.add("invisibleChoice");
            splashOut.classList.remove("invisibleChoice");
            splashOut.classList.add("splashOutDeath");
            deathSplash.classList.remove("invisibleChoice");
            deathSplash.classList.add("ripImg");
            coffin.classList.remove("invisibleChoice");
            coffin.classList.add("deathDance");
            coffinDeath.classList.remove("invisibleChoice");
            coffinDeath.classList.add("deathToSplashOut");
        } else if (userPointOfGame >= 5) {
            endGame.classList.remove("visibleNext");
            endGame.classList.add("invisibleChoice");
            game.classList.remove("gameVisible");
            game.classList.add("invisibleChoice");
            splashOut.classList.remove("invisibleChoice");
            splashOut.classList.add("splashOutUser");
            userCelebrate.classList.remove("invisibleChoice");
            userCelebrate.classList.add("firework");
        } else {
          return false;
        }
      }

<<<<<<< HEAD
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
=======
   
      
>>>>>>> rps-ui
