let numsRow = 5;

let trinagle = [];

for (let i = 0; i < numsRow; i++) {
  let row = new Array(i + 1).fill(1);

  for (let j = 1; j < i; j++) {
    row[j] = trinagle[i - 1][j - 1] + trinagle[i - 1][j];
  }

  trinagle.push(row);
}

console.log(trinagle);
