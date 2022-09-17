let getComputerChoice = () => {
  let options = ["rock", "paper", "scissors"];
  let result = options[Math.floor(Math.random() * options.length)];
  return result;
};

let score = {
  player: 0,
  computer: 0,
};

let evaluate = (pChoice) => {
  const cChoice = getComputerChoice();
  if (pChoice === cChoice) {
    console.log("computer chose", cChoice);
    console.log("tie");
  } else if (pChoice === "rock" && cChoice === "paper") {
    console.log("computer chose", cChoice);
    console.log("computer win, player lose");
    score.computer = +1;
    console.log("Computer's score:", score.computer);
    console.log("player's score:", score.player);
  } else if (pChoice === "rock" && cChoice === "scissors") {
    console.log("computer chose", cChoice);
    console.log("player win, computer lose");
    score.player = +1;
    console.log("Computer's score:", score.computer);
    console.log("player's score:", score.player);
  } else if (pChoice === "paper" && cChoice === "rock") {
    console.log("computer chose", cChoice);
    console.log("player win, computer lose");
    score.player = +1;
    console.log("Computer's score:", score.computer);
    console.log("player's score:", score.player);
  } else if (pChoice === "paper" && cChoice === "scissors") {
    console.log("computer chose", cChoice);
    console.log("computer win, player lose");
    score.computer = +1;
    console.log("Computer's score:", score.computer);
    console.log("player's score:", score.player);
  } else if (pChoice === "scissors" && cChoice === "rock") {
    console.log("computer chose", cChoice);
    console.log("computer win, player lose");
    score.computer = +1;
    console.log("Computer's score:", score.computer);
    console.log("player's score:", score.player);
  } else if (pChoice === "scissors" && cChoice === "paper") {
    console.log("computer chose", cChoice);
    console.log("player win, computer lose");
    score.player = +1;
    console.log("Computer's score:", score.computer);
    console.log("player's score:", score.player);
  }
};
let playRound = (playerSelection, computerSelection) => {
  let pSelection = playerSelection.toLowerCase();
  switch (pSelection) {
    case "rock":
      console.log("player entered rock");
      evaluate("rock");
      break;
    case "paper":
      console.log("player entered paper");
      evaluate("paper");

      break;
    case "scissors":
      console.log("player entered scissors");
      evaluate("scissors");
      break;
      default:
        console.log("Your spelling is wrong check and try again");
  }
  setTimeout(() => {
    let pScoreElem = document.querySelector("#playerScore");
    let cScoreElem = document.querySelector("#computerScore");

    pScoreElem.innerText = score.player;
    cScoreElem.innerText = score.computer;
  }, 150);
  setTimeout(() => {
    playRound(prompt("Choose either ROCK,PAPER, or SCISSOR to play"), getComputerChoice());
  }, 1500);
};
let showHelp = () => {
  document.getElementById("overLay").classList.toggle("show");
}
// playRound(prompt("Choose either ROCK,PAPER, or SCISSOR to play"), getComputerChoice());


// var x = document.getElementById("myBtn");
// x.addEventListener("mouseover", myFunction);
// x.addEventListener("click", mySecondFunction);
// x.addEventListener("mouseout", myThirdFunction);

// function myFunction() {
//   document.getElementById("demo").innerHTML += "Moused over!<br>";
// }

// function mySecondFunction() {
//   document.getElementById("demo").innerHTML += "Clicked!<br>";
// }

// function myThirdFunction() {
//   document.getElementById("demo").innerHTML += "Moused out!<br>";
// }