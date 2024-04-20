"using strict";

const players = [
  "Rohit Sharma",
  "Virat Kohli",
  "Yuvraj Singh",
  "MS Dhoni",
  "Shikhar Dhawan",
  "Hardik Pandya",
  "Shubman Gill",
  "Shreyas Iyer",
  "Jasprit Bumrah",
  "Ravindra Jadeja",
  "Kuldeep Yadav",
  "Ben Duckett",
  "Ben Stokes",
  "David Willey",
  "James Anderson",
  "David Malan",
  "Joe Root",
  "Jonny Bairstow",
  "Jos Buttler",
  "Harry Brook",
  "Tom Hartley",
  "Zak Crawley",
];

let playersCount = 0;
const shots = [1, 2, 3, 4, 6, "out"];
let playerScore = 0;
let score = 0;
let teamScore = [0, 0];
let game = true;
let x = 0;
let i = 0;
let strike = `.pl-${playersCount}`;

let message = document.querySelector(".message");
const play = document.querySelector(".play");
const currentScore = document.querySelector(".current-score");
const pScore = document.querySelector(".player-score");
const again = document.querySelector(".reset");

let team1Playing = true;

play.addEventListener("click", function () {
  const rand = Math.trunc(Math.random() * 6);
  let currentTeam = team1Playing ? 0 : 1;
  score = shots[rand];
  let currentPlaying = document.querySelector(`.team-${currentTeam}`);
  let remaining = document.querySelector(`.out-${currentTeam}`);
  strike = team1Playing ? `.pl-${playersCount}` : `.pl-2${playersCount}`;
  let cPlayer = document.querySelector(strike);
  let playerName = (document.querySelector(".current-player").textContent =
    players[i]);

  //-----------------------//
  if (game) {
    if (playersCount !== 11) {
      currentScore.textContent = score;
      if (score !== "out") {
        playerScore += score;
        teamScore[currentTeam] += score;
        if (teamScore[0] < teamScore[1]) {
          play.classList.add("hidden");
          again.classList.remove("hidden");
          document.querySelector(".current-player").textContent = "ENGLAND";
          message.textContent = `ENGLAND Won the match by ${
            11 - playersCount
          } Wickets`;
          document.querySelector(".cup-img").classList.remove("hidden");
          document.querySelector(".f-score").classList.add("hidden");
          playersCount = 11;
          game = false;
        }
        currentPlaying.textContent = teamScore[currentTeam];
        pScore.textContent = playerScore;
        cPlayer.textContent = playerScore;
        console.log(playersCount);
      } else {
        playerScore = 0;
        playersCount += 1;
        i += 1;
        pScore.textContent = playerScore;
        remaining.textContent = playersCount;
      }
    } else {
      playersCount = 0;
      x += 1;
      team1Playing = false;
      if (teamScore[0] < teamScore[1] && x === 2) {
        game = false;
        play.classList.add("hidden");
        again.classList.remove("hidden");
        document.querySelector(".cup-img").classList.remove("hidden");
        document.querySelector(".f-score").classList.add("hidden");
        document.querySelector(".current-player").textContent = "ENGLAND";
        message.textContent = `ENGLAND Won the match by ${
          11 - playersCount
        } Wickets`;
      } else if (teamScore[0] > teamScore[1] && x === 2) {
        document.querySelector(".current-player").textContent = "INDIA";
        message.textContent = `INDIA Won the match by ${
          teamScore[0] - teamScore[1]
        } runs`;
        game = false;
        document.querySelector(".cup-img").classList.remove("hidden");
        document.querySelector(".f-score").classList.add("hidden");
        play.classList.add("hidden");
        again.classList.remove("hidden");
      }
    }
  }
});

again.addEventListener("click", function () {
  message.textContent = "Please refresh this page to play again.";
});
