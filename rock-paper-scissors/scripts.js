const possibleGuess = ["frog", "snake", "slug"];
let computerChoice = Math.floor(Math.random() * possibleGuess.length);
computerChoice = possibleGuess[computerChoice];
let buttonSnake = document.querySelector("#snake");
let buttonFrog = document.querySelector("#frog");
let buttonSlug = document.querySelector("#slug");
let playerChoice = "";
let result = document.querySelector("#result");
let resetButton = document.querySelector("#reset");

let playButton = document.querySelector("#play");

function snake() {
  playerChoice = "snake";
}

function frog() {
  playerChoice = "frog";
}

function slug() {
  playerChoice = "slug";
}

function play(player, computer) {
  if (player === computer) {
    result.innerHTML = "Draw. Computer chose " + computerChoice;
    console.log("Draw. Computer chose" + computerChoice);
  } else if (computer === "frog" && player === "snake") {
    console.log("You win. Computer chose " + computerChoice);
    result.innerHTML = "You win. Computer chose " + computerChoice;
  } else if (computer === "slug" && player === "frog") {
    result.innerHTML = "You win.. Computer chose " + computerChoice;
    console.log("You win. Computer chose " + computerChoice);
  } else if (computer === "snake" && player === "slug") {
    result.innerHTML = "You win.. Computer chose " + computerChoice;
    console.log("You win. Computer chose " + computerChoice);
  } else if (computer === "frog" && player === "slug") {
    result.innerHTML = "You lose. Computer chose " + computerChoice;
    console.log("You lose. Computer chose " + computerChoice);
  } else if (computer === "slug" && player === "snake") {
    result.innerHTML = "You lose. Computer chose " + computerChoice;
    console.log("You lose. Computer chose " + computerChoice);
  } else if (computer === "snake" && player === "frog") {
    result.innerHTML = "You lose. Computer chose " + computerChoice;
    console.log("You lose. Computer chose " + computerChoice);
  }
}
function reset() {
  computerChoice = Math.floor(Math.random() * possibleGuess.length);
  computerChoice = possibleGuess[computerChoice];
}

buttonSlug.addEventListener("click", slug);
buttonFrog.addEventListener("click", frog);
buttonSnake.addEventListener("click", snake);
resetButton.addEventListener("click", reset);

playButton.addEventListener("click", function () {
  play(playerChoice, computerChoice);
}); //TODO: Not best practice, declare the function above and add the event afterwards