"use strict";

// Code for guessing game

const submit = document.querySelector(".submit");
const tryAgain = document.querySelector(".again");

let score = 20;
let highScore = 0;
let randNum = Math.trunc(Math.random() * 20) + 1;
const msg = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".submit").addEventListener("click", function () {
  const userInput = Number(document.querySelector(".userInput").value);
  if (!userInput) {
    msg("Please enter a guessed a number between 1 to 20.");
  } else if (userInput === randNum) {
    msg("You have guessed the number correctly.");
    submit.classList.add("hidden");
    tryAgain.classList.remove("hidden");
    document.querySelector(".scores").style.backgroundColor = "#114232";
    document.querySelector(".main").style.backgroundColor = "#114232";
    document.querySelector(".box").style.backgroundColor = "#87A922";
  } else {
    if (score > 1) {
      document.querySelector(".message").textContent =
        userInput < randNum ? "TOO LOW! Try Higher" : "TOO HIGH! Try Lower";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      score = 0;
      document.querySelector(".score").textContent = score;
      msg("you have lost the game... Try again!");
      submit.classList.add("hidden");
      tryAgain.classList.remove("hidden");
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  randNum = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  msg("Greetings!! Guess Again.");
  document.querySelector(".score").textContent = score;
  document.querySelector(".userInput").value = "";
  submit.classList.remove("hidden");
  tryAgain.classList.add("hidden");
});
