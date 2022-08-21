let getComputerChoice = () => {
  let options = ["rock", "paper", "scissors"];
  let result = options[Math.floor(Math.random() * options.length)];
  return result;
};

let playRound = (playerSelection, computerSelection) => {
  let pSelection = playerSelection.toLowerCase();
  console.log(pSelection);

let evaluate=(pChoice) =>{

}

  switch (pSelection) {
    case "rock":
      evaluate("rock");
      break;
    case "paper":
      evaluate("paper");
      
      break;
    case "scissors":
      evaluate("scissors");
  }

  //  if (pSelection = "") {
  // console.log("try again you didn't input anything");
  // }
  // if ((pSelection = computerSelection)) {
  //   console.log("Tie!");
  // } else
  //  if ((pSelection = "rock") && (computerSelection = "scissors")) {
  //   console.log("Win! Rock beats scissors");
  // } else if ((pSelection = "scissors") && (computerSelection = "paper")) {
  //   console.log("Win! scissors beats paper");
  // } else if ((pSelection = "paper") && (computerSelection = "rock")) {
  //   console.log("Win! paper beats rock");
  // }
  // console.log("ai", computerSelection);
  // console.log("player", pSelection);
};

playRound(prompt("pSelect"), getComputerChoice());
