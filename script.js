const choices = ["rock", "paper", "scissors"];
const icons = {
  rock: '<i class="fas fa-hand-rock"></i>',
  paper: '<i class="fas fa-hand-paper"></i>',
  scissors: '<i class="fas fa-hand-scissors"></i>'
};

let playerScore = 0;
let computerScore = 0;

const playerScoreSpan = document.getElementById("player-score");
const computerScoreSpan = document.getElementById("computer-score");
const resultText = document.getElementById("result-text");
const computerChoiceDisplay = document.getElementById("computer-choice");

document.querySelectorAll(".choice").forEach(button => {
  button.addEventListener("click", () => {
    const playerChoice = button.getAttribute("data-choice");
    const computerChoice = getRandomChoice();
    const result = getResult(playerChoice, computerChoice);
    updateUI(playerChoice, computerChoice, result);
  });
});

function getRandomChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function getResult(player, computer) {
  if (player === computer) return "draw";
  if (
    (player === "rock" && computer === "scissors") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissors" && computer === "paper")
  ) return "win";
  return "lose";
}

function updateUI(player, computer, result) {
  let message = "";
  if (result === "win") {
    playerScore++;
    message = "🎉 You win!";
  } else if (result === "lose") {
    computerScore++;
    message = "😢 You lose!";
  } else {
    message = "🤝 It's a draw!";
  }

  playerScoreSpan.textContent = playerScore;
  computerScoreSpan.textContent = computerScore;
  resultText.textContent = message;
  computerChoiceDisplay.innerHTML = `Computer chose ${icons[computer]} ${capitalize(computer)}`;
}

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}
