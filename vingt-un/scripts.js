const deck = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "1", "2", "3"];

const hitButton = document.querySelector("#hit");
const stayButton = document.querySelector("#stay");
const resetButton = document.querySelector("#reset");
const display = document.querySelector("#display");
let randomPlayerPick = "";
let randomComputerPick = "";
let playerHand = new Array();
let playerCount = 0;
let computerCount = 0;
let canHit = true;

function drawCard() {
  let randomPlayerPick = Number(Math.floor(Math.random() * deck.length));
  playerHand.push(Number(deck[randomPlayerPick]));
  let randomComputerPick = Number(Math.floor(Math.random() * deck.length));
  playerCount = Number(playerCount) + Number(deck[randomPlayerPick]);

  if (computerCount < 16) {
    computerCount = Number(computerCount) + Number(deck[randomComputerPick]);
  } else if (computerCount > 21) {
    alert("Computer bust.");

    confirm("Play again?"); //doesn't  really matter if you confirm, game will reset anyway.
    reset();
  } else if (computerCount === 21) {
    alert("Computer wins. Computer had " + computerCount);
    confirm("Play again?");
    reset();
  }

  if (playerCount > 21) {
    alert("Player bust.");
    confirm("Play again?");

    reset();
  }
  console.log(playerCount + ", " + computerCount);
  display.innerHTML =
    "Drawn cards " + playerHand + ".\n" + " Total " + playerCount;
}

function stay() {
  if (playerCount === 21) {
    alert("You win! Computer had " + computerCount);
  } else if (playerCount > computerCount) {
    alert("You win! Computer had " + computerCount);
  } else if (playerCount > 21) {
    alert("Bust!");
  } else {
    alert("Computer wins. Computer had " + computerCount);
  }
  confirm("Play again?");
  reset();
}

function reset() {
  playerCount = 0;
  computerCount = 0;
  playerHand = [];
}

hitButton.addEventListener("click", drawCard);
stayButton.addEventListener("click", stay);
resetButton.addEventListener("click", reset);
