let score = [
    [10, 6, 9, 1],
    [7, 5, 11, 2],
    [4, 8, 3, 15],
  ],
  k = 2;

let res = score.sort((a, b) => {
  return b[k] - a[k];
});

console.log(res);

for (let i = 0; i < score.length; i++) {
  for (let j = i + 1; j < score.length; j++) {
    if (i !== j && score[i][k] < score[j][k]) {
      let temp = score[i];
      score[i] = score[j];
      score[j] = temp;
    }
  }
}
console.log(score);
