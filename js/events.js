import {
  updateCell,
  resetBoardUI,
  setPlayerNames,
  updateScores,
} from "./ui.js";
import {
  currentPlayer,
  scores,
  names,
  board,
  moves,
  incrementMoves,
  checkWinner,
  switchPlayer,
  resetGameState,
} from "./game.js";

const newGameButton = document.getElementById("newGame");
newGameButton.addEventListener("click", () => {
  resetGame();
  names.X = document.getElementById("player1").value;
  names.O = document.getElementById("player2").value;
  scores.X = 0;
  scores.O = 0;
  setPlayerNames(names.X, names.O);
  updateScores();
});

const endGameButton = document.getElementById("endGame");
endGameButton.addEventListener("click", () => {
  if (scores.X > scores.O) {
    alert(`¡THE WINNER IS ${names.X} WITH ${scores.X} POINTS!`);
  } else if (scores.O > scores.X) {
    alert(`¡THE WINNER IS ${names.O} WITH ${scores.O} POINTS!`);
  } else {
    alert(`¡IT'S A TIE!`);
  }
  resetGame();
  scores.X = 0;
  scores.O = 0;
  names.X = "Player 1";
  names.O = "Player 2";
  setPlayerNames(names.X, names.O);
  updateScores();
});

export function handleCellClick(cell, row, col) {
  // If the cell it's already taken, show an alert
  if (cell.textContent !== "") {
    alert("¡Esa celda ya está ocupada! Elige otra.");
    return;
  }

  // update the cell
  updateCell(cell, currentPlayer); // updates the cell in DOM
  board[row][col] = currentPlayer; // update the board
  incrementMoves();

  // Check if there's a winner
  if (checkWinner(row, col)) {
    alert(`¡El jugador ${currentPlayer} ha ganado!`);
    scores[currentPlayer]++;
    updateScores();
    resetGame();
    return;
  }

  // See if there's a tie
  if (moves === 9) {
    alert("¡Es un empate!");
    resetGame();
    return;
  }

  // Switches the turn
  switchPlayer();
}

// Restart the game
function resetGame() {
  resetGameState(); // Restart the game state
  resetBoardUI(); // Restart the UI
}
