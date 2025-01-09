import { handleCellClick } from "./events.js";
import { scores } from "./game.js";

// Here we init the board with the size 3x3
export function initializeBoard() {
  const boardElement = document.getElementById("board");
  boardElement.innerHTML = ""; // Clean the current board

  for (let i = 0; i < 3; i++) {
    // Row
    for (let j = 0; j < 3; j++) {
      // Column
      const cell = document.createElement("div"); // Create a new cell
      cell.classList.add("cell"); // Set up the class cell
      cell.addEventListener("click", () => handleCellClick(cell, i, j)); // Add an event listener
      boardElement.appendChild(cell); // Add the cell to the board
    }
  }
}

// Update the cell content
export function updateCell(cell, symbol) {
  cell.textContent = symbol;
}

export function setPlayerNames(player1, player2) {
  const player1Name = document.getElementById("player1Name");
  const player2Name = document.getElementById("player2Name");
  player1Name.textContent = player1;
  player2Name.textContent = player2;
}

export function updateScores() {
  const player1ScoreElement = document.getElementById("player1Score");
  const player2ScoreElement = document.getElementById("player2Score");
  player1ScoreElement.textContent = scores["X"];
  player2ScoreElement.textContent = scores["O"];
}

// Restart the board UI
export function resetBoardUI() {
  const cells = document.querySelectorAll(".cell");
  cells.forEach((cell) => (cell.textContent = ""));
}
