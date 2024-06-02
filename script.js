const choices = ["stone", "paper", "scissors"];
const humanOutput = document.querySelector("#human");
const computerOutput = document.querySelector("#computer");
const resultOutput = document.querySelector("#result");

document.querySelectorAll(".choice").forEach((choice) => {
  choice.addEventListener("click", () => {
    const humanChoice = choice.id;
    humanOutput.textContent = "Jouw keuze: " + humanChoice;
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    computerOutput.textContent = "Keuze van de computer: " + computerChoice;
    const result = determineWinner(humanChoice, computerChoice);
    resultOutput.textContent = "Resultaat: " + result;
  });
});

function determineWinner(player, computer) {
  if (player === computer) {
    return "Gelijkspel!";
  } else if (
    (player === "stone" && computer === "scissors") ||
    (player === "paper" && computer === "stone") ||
    (player === "scissors" && computer === "paper")
  ) {
    return "Je wint!";
  } else {
    return "Je verliest!";
  }
}
