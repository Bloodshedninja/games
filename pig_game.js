"use strict";

const dice = document.querySelector(".dice");
const player0 = document.querySelector(".player--0");
const player1 = document.querySelector(".player--1");
let scoreAll, activePlayer, playing, currentScore;

const init = function () {
  scoreAll = [0, 0];
  activePlayer = 0;
  playing = true;
  currentScore = 0;

  player0.classList.remove("winner");
  player1.classList.remove("winner");
  player0.classList.add("active");
  player1.classList.remove("active");

  document.querySelector(".current--0").textContent = 0;
  document.querySelector(".current--1").textContent = 0;
  document.querySelector(".score--0").textContent = 0;
  document.querySelector(".score--1").textContent = 0;
};

init();

const switchPlayer = function () {
  currentScore = 0;
  player0.classList.toggle("active");
  player1.classList.toggle("active");
  document.querySelector(`.current--${activePlayer}`).textContent =
    currentScore;
  activePlayer = activePlayer === 0 ? 1 : 0;
};

document.querySelector(".roll").addEventListener("click", function () {
  if (playing) {
    let randRoll = Math.trunc(Math.random() * 6) + 1;
    dice.classList.remove("hidden");
    dice.src = `dice${randRoll}.png`;

    if (randRoll !== 1) {
      currentScore += randRoll;
      document.querySelector(`.current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

document.querySelector(".hold").addEventListener("click", function () {
  if (playing) {
    scoreAll[activePlayer] += currentScore;
    document.querySelector(`.score--${activePlayer}`).textContent =
      scoreAll[activePlayer];

    if (scoreAll[activePlayer] >= 100) {
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("active");

      dice.classList.add("hidden");
      playing = false;
    } else {
      switchPlayer();
    }
  }
});

document.querySelector(".new--game").addEventListener("click", init);

//Practice DATA STRUCTURE

const hotel = {
  locations: ["india", "china", "japan", "america"],
  indianDish: ["roti", "sabj", "rice"],
  managers: ["ram", "shyam", "mohit", "rohit"],
};

const [employee, , srEmployee] = hotel.managers;

console.log(employee, srEmployee);

hotel.locations.push("Mexico");
console.log(hotel.locations);

hotel.indianDish.pop("sabj");
hotel.indianDish.push("curry", "paav bhaaji");

console.log(hotel.indianDish);

let x = hotel;
console.log(x);
