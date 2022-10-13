let correctNumber = 0;

function getSecretNumber() {
  let rightNumber = document.getElementById("myNumber");
  correctNumber = rightNumber.value;
  rightNumber.value = "";
}

function check() {
  let guessNumber = document.getElementById("guess");

  if (guessNumber.value == correctNumber) {
    //document.getElementById("feedback").innerText("Hurray");
    alert("Hurray!");
  }

  if (guessNumber.value < correctNumber) {
    alert("Try higher");
  }

  if (guessNumber.value > correctNumber) {
    alert("Try lower");
  }
  //document.getElementById("feedback").innerText("Try again");
}
