const choices = ["stone", "paper", "scissors"];
const humanOutput = document.querySelector("#human");
const computerOutput = document.querySelector("#computer");
const resultOutput = document.querySelector("#result");
const highscoreOutput = document.querySelector("#highscore");
const streakOutput = document.querySelector("#streak");
const countdownElement = document.querySelector("#countdown");
const winSound = document.querySelector("#winSound");
const loseSound = document.querySelector("#loseSound");
const drawSound = document.querySelector("#drawSound");

let highscore = 0;
let streak = 0;

document.querySelectorAll(".choice").forEach((choice) => {
  choice.addEventListener("click", () => {
    const humanChoice = choice.id;
    humanOutput.innerHTML = `<span class="label">Your choice:</span> ${humanChoice}`;
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    computerOutput.innerHTML = `<span class="label">Computer's choice:</span> ${computerChoice}`;

    resultOutput.classList.add("hidden");
    countdown(3, () => {
      const result = determineWinner(humanChoice, computerChoice);
      resultOutput.innerHTML = `<span class="label">Result:</span> <span class="result-text">${result}</span>`;
      resultOutput.classList.remove("hidden");

      if (result === "You win!") {
        winSound.play();
        streak++;
        if (streak > highscore) {
          highscore = streak;
          highscoreOutput.textContent = highscore;
        }
      } else if (result === "You lose!") {
        loseSound.play();
        streak = 0;
      } else {
        drawSound.play();
      }
      streakOutput.textContent = streak;
    });
  });
});

function determineWinner(player, computer) {
  if (player === computer) {
    return "It's a draw!";
  } else if (
    (player === "stone" && computer === "scissors") ||
    (player === "paper" && computer === "stone") ||
    (player === "scissors" && computer === "paper")
  ) {
    return "You win!";
  } else {
    return "You lose!";
  }
}

function countdown(seconds, callback) {
  countdownElement.textContent = seconds;
  const interval = setInterval(() => {
    seconds--;
    if (seconds > 0) {
      countdownElement.textContent = seconds;
    } else {
      clearInterval(interval);
      countdownElement.textContent = "";
      callback();
    }
  }, 1000);
}
