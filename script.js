

const icons = {
  rock: '<i class="fas fa-hand-rock"></i>',
  paper: '<i class="fas fa-hand-paper"></i>',
  scissors: '<i class="fas fa-hand-scissors"></i>'
};

let player1Score = 0;
let player2Score = 0;
let turn = 1;
let player1Choice = '';
let player2Choice = '';

const player1ScoreSpan = document.getElementById("player1-score");
const player2ScoreSpan = document.getElementById("player2-score");
const resultText = document.getElementById("result-text");
const chosenText = document.getElementById("chosen-text");
const turnIndicator = document.getElementById("turn-indicator");

document.querySelectorAll(".choice").forEach(button => {
  button.addEventListener("click", () => {
    const choice = button.getAttribute("data-choice");

    if (turn === 1) {
      player1Choice = choice;
      turn = 2;
      turnIndicator.textContent = "Player 2's Turn";
      resultText.textContent = "Waiting for Player 2...";
    } else if (turn === 2) {
      player2Choice = choice;
      determineWinner();
      turn = 1;
      turnIndicator.textContent = "Player 1's Turn";
    }
  });
});

function determineWinner() {
  if (player1Choice === player2Choice) {
    resultText.textContent = "🤝 It's a draw!";
  } else if (
    (player1Choice === "rock" && player2Choice === "scissors") ||
    (player1Choice === "paper" && player2Choice === "rock") ||
    (player1Choice === "scissors" && player2Choice === "paper")
  ) {
    player1Score++;
    resultText.textContent = "🎉 Player 1 wins!";
  } else {
    player2Score++;
    resultText.textContent = "🎉 Player 2 wins!";
  }

  player1ScoreSpan.textContent = player1Score;
  player2ScoreSpan.textContent = player2Score;

  chosenText.innerHTML = `
    Player 1 chose ${icons[player1Choice]} ${capitalize(player1Choice)}<br>
    Player 2 chose ${icons[player2Choice]} ${capitalize(player2Choice)}
  `;
}

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}
