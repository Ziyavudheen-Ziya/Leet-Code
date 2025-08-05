let matrix = [
  [0, 1, 2, 0],
  [3, 4, 5, 2],
  [1, 3, 1, 5],
];
let zeroCcolums = new Set();

for (let i = 0; i < matrix.length; i++) {
  if (matrix[i].includes(0)) {
    matrix[i].filter((value, index) => {
      if (value == 0) {
        zeroCcolums.add(index);
      }
    });

    matrix[i] = Array(matrix[i].length).fill(0);
  }
}

for (let row of matrix) {
  for (let col of zeroCcolums) {
    row[col] = 0;
  }
}

console.log(matrix);
