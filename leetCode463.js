let grid =[[0,1]]

let up = 0;
let douwn = 0;
let center = 0;
let left = 0;
let right = 0;

for (let i = 0; i < grid.length; i++) {
  for (let j = 0; j < grid[i].length; j++) {
    if (grid[i][j] !== 1) continue;

    center += 4;

    if (i > 0 && grid[i - 1][j] === 1) {
      up++;
      center -= 2;
    }

    if (j > 0 && grid[i][j - 1] === 1) {
      left++;
      center -= 2;
    }
  }
}

console.log(
  "up",
  up,
  "down",
  douwn,
  "left",
  left,
  "right",
  right,
  "center",
  center
);
let sum = up + douwn + left + right + center;
console.log(center);
