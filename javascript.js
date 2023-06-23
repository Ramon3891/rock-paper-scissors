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



let userPointOfGame = 0;
let deathPointOfGame = 0;

playerPoint.textContent = userPointOfGame.toString();
deathPoint.textContent = deathPointOfGame.toString();



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
          deathPointOfGame+=1;
          deathPointOfGame != 5 ? (next.classList.remove("invisibleChoice"), next.classList.add("visibleNext")) : finishDeath();
          deathPoint.textContent = deathPointOfGame.toString();
          deathWin();
          return ++deathPointOfGame;
        } else if ((checkGame() === true &&  ((playerOutput() === "rock" && deathOutput === "scissorsDeath") || (playerOutput() === "paper" && deathOutput === "rockDeath") || (playerOutput() === "scissors" && deathOutput === "paperDeath"))) ){
          userPointOfGame+=1;
          userPointOfGame != 5 ? (next.classList.remove("invisibleChoice"), next.classList.add("visibleNext")) : finishUser();
          playerPoint.textContent = userPointOfGame.toString();
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

      function deathWin() {
        if (deathPointOfGame === 1) {
          pseudoPrompt.textContent="You lose, I win";
        } else if (deathPointOfGame === 2) {
          pseudoPrompt.textContent="You lose, again! You are a loser!";
        } else if (deathPointOfGame === 3) {
          pseudoPrompt.textContent="You don't seem to be in such good shape, I still won";
        } else if (deathPointOfGame === 4) {
          pseudoPrompt.textContent="I have a match point!";
        } else if (deathPointOfGame === 5) {
          pseudoPrompt.textContent="You lose the game! You know what this means?";
        } else {
          return false;
        }
      }


          function deathLose() {
        if (userPointOfGame === 1) {
          pseudoPrompt.textContent="Wow, you win a pointWow, you scored a point, I'm desperate";
        } else if (userPointOfGame === 2) {
          pseudoPrompt.textContent="You scored another point but the game is still long";
        } else if (userPointOfGame === 3) {
          pseudoPrompt.textContent="Oh, you are a lucky one, aren't you?";
        } else if (userPointOfGame === 4) {
          pseudoPrompt.textContent="Damn, you have a match point";
        } else if (userPointOfGame === 5) {
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

      function finish() {
        if (deathPointOfGame >= 5) {
            endGame.classList.remove("visibleNext");
            endGame.classList.add("invisibleChoice");
            game.classList.remove("gameVisible");
            game.classList.add("invisibleChoice");
            splashOut.classList.remove("invisibleChoice");
            splashOut.classList.add("splashOutDeath");
        } else if (userPointOfGame >= 5) {
            endGame.classList.remove("visibleNext");
            endGame.classList.add("invisibleChoice");
            game.classList.remove("gameVisible");
            game.classList.add("invisibleChoice");
            splashOut.classList.remove("invisibleChoice");
            splashOut.classList.add("splashOutUser");
        } else {
          return false;
        }
      }

   
      