let numsRow = 5;

let trinagle = [];

for (let i = 0; i < numsRow; i++) {
  let path = [];

  for (let j = 0; j <= i; j++) {
    if (j == 0 || j == i) {
      path.push(1);
    } else {
      path.push(trinagle[i - 1][j - 1] + trinagle[i - 1][j]);
    }
  }

  trinagle.push(path);
}
console.log(trinagle);
