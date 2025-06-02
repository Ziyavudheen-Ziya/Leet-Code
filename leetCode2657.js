let A = [2,3,1], B = [3,1,2]

let result = new Array(A.length).fill(0);

let obj = {};
let length = A.length;
for (let i = 0; i < length; i++) {
  for (let j = 0; j <= i; j++) {
    for (let k = 0; k <= i; k++) {
      if (A[j] === B[k]) {
        result[i]++;
      }
    }
  }
}
console.log(result);
