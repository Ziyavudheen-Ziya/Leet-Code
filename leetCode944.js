let strs = ["zyx", "wvu", "tsr"];

let n = strs.length;
let m = strs[0].length;
let deleted = 0;

for (let i = 0; i < m; i++) {
  for (let j = 1; j < n; j++) {
    if (strs[j][i] < strs[j - 1][i]) {
      deleted++;
      break;
    }
  }
}
console.log(deleted);
