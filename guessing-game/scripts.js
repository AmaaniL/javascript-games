const secretNumber = Math.round(Math.random() * 28);

function logSubmit(event) {
  let guess = document.getElementById("numberField").value;
  if (secretNumber == guess) {
    alert(
      "Awesome! You number " +
        guess +
        " was correct. You can be named many things, hungry not being one of them."
    );
  } else {
    alert(
      "Bummer... You guessed " +
        guess +
        " and the secret number was " +
        secretNumber +
        "."
    );
  }

}

document.addEventListener("submit", logSubmit);
// number guessed by user
