export let currentPlayer = "X"; 
export let moves = 0;
export let names = {X: "Player 1", O: "Player 2"};
export let scores = { X: 0, O: 0 };
export let board = [ 
  ["", "", ""],
  ["", "", ""],
  ["", "", ""]
];


// Function to switch the current player
export function switchPlayer() {
  currentPlayer = currentPlayer === "X" ? "O" : "X";
}

export function incrementMoves() {
  moves++;
}

// Function to check if there's a winner
export function checkWinner(row, col) {
  // Verify the row
  if (board[row].every(cell => cell === currentPlayer)) return true;

  // Verify the column
  if (board.every(row => row[col] === currentPlayer)) return true;

  // Verify the main diagonal
  if (row === col && board.every((_, i) => board[i][i] === currentPlayer)) return true;

  // Verify the secondary diagonal
  if (row + col === 2 && board.every((_, i) => board[i][2 - i] === currentPlayer)) return true;

  return false; // No hay ganador
}

// Function to reset the game state
export function resetGameState() {
  board = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
  ];
  moves = 0;
  currentPlayer = "X";
}
