let grid = [
  [0, 1, 1],
  [1, 0, 1],
  [0, 0, 1],
];

let rowOnes = [];
let rowZero = [];
for (let i = 0; i < grid.length; i++) {
  let grided = grid[i];
  let count1 = 0;
  let count0 = 0;
  for (let j = 0; j < grided.length; j++) {
    if (grided[j] === 1) {
      count1++;
    } else {
      count0++;
    }
  }
  rowOnes.push(count1);
  rowZero.push(count0);

  count1 = 0;
  count0 = 0;
}

// console.log(rowOnes);
// console.log(rowZero);

let columnOne = [];
let columnZero = [];

for (let i = 0; i < grid[0].length; i++) {
  let countOne = 0;
  let countZero = 0;

  for (let j = 0; j < grid.length; j++) {
    if (grid[j][i] == 1) {
      countOne++;
    } else {
      countZero++;
    }
  }

  columnOne.push(countOne);
  columnZero.push(countZero);

  countOne = 0;
  countZero = 0;
}



console.log(rowOnes);
console.log(rowZero);

console.log("====================");

console.log(columnOne);
console.log(columnZero);




let m = grid.length
let n  = grid[0].length

let diff = []
for(let i=0;i<m;i++){
diff[i] = []
     for(let j=0;j<n;j++){

        diff[i][j] = rowOnes[i]+columnOne[j] - rowZero[i]-columnZero[j]
     }
}

console.log(diff);
