const inputSeconds = document.getElementById("seconds-input");
const startGameBtn = document.getElementById("start-game-btn");
const resetGameBtn = document.getElementById("reset-game-btn");
const player1Score = document.getElementById("player-a-score");
const player2Score = document.getElementById("player-l-score");
const result = document.getElementById("result");

let CountA = 0;
let CountL = 0;

let runningGame = false;

player1Score.innerText = 0;
player2Score.innerText = 0;

startGameBtn.addEventListener("click", function (event) {
  if (!inputSeconds.value) {
    return alert("please enter the seconds of the competition");
  }

  runningGame = true;
  let gameTime = inputSeconds.value * 1000;

  setTimeout(function () {
    runningGame = false;

    if (CountA > CountL) {
      result.innerText = `Player A wins, with a score of ${CountA}`;
    } else if (CountA < CountL) {
      result.innerText = `Player L wins, with a score of ${CountL}`;
    } else {
      result.innerText = `It's a draw, with a score of ${CountA}`;
    }
  }, gameTime);
});

resetGameBtn.addEventListener("click", function (event) {
  alert("your game has been reset");
  result.innerText = "";
  inputSeconds.value = "";
  CountL = 0;
  CountA = 0;

  player1Score.innerText = 0;
  player2Score.innerText = 0;
});

document.addEventListener("keypress", onKeypress);

function onKeypress(event) {
  if (!runningGame) {
    return;
  }

  if (event.key.toLowerCase() === "a") {
    player1Score.innerHTML = ++CountA;
  } else if (event.key.toLowerCase() === "l") {
    player2Score.innerHTML = ++CountL;
  }
}
