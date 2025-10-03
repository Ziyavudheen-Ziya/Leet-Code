let board = [
  ["8", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];
let result = true;

let length = board.length;

let row = 0;

let column = 0;

let newSetCol = new Set();
for (let i = 0; i < board.length; i++) {
  newSetCol.clear();
  for (let j = 0; j < board.length; j++) {
    let cell = board[i][j];

    if (cell === ".") continue;

    if (newSetCol.has(cell)) {
      result = false;
      break;
    }

    newSetCol.add(cell);
  }
}

let newSetRow = new Set();

for (let i = 0; i < board.length; i++) {
  newSetRow.clear();

  for (let j = 0; j < board.length; j++) {
    let cell = board[j][i];

    if (cell === ".") continue;

    if (newSetRow.has(cell)) {
      result = false;
      break;
    }

    newSetRow.add(cell);
  }
}

for (let boxRow = 0; boxRow < 9; boxRow += 3) {
  for (let boxCol = 0; boxCol < 9; boxCol += 3) {
    let seen = new Set();

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        let cell = board[boxRow + i][boxCol + j];
        if (cell === ".") continue;

        if (seen.has(cell)) {
          result = false;
          break;
        }
        seen.add(cell);
      }
    }
  }
}

console.log(newSetRow);

console.log(result);
