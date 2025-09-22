let A = [2, 3, 1],
  B = [3, 1, 2];

let result = new Array(A.length).fill(0);

let n = A.length;
let i = 0;
while (true) {
  let count = 0;
  let arrA = A.slice(0, i + 1);
  let arrB = B.slice(0, i + 1);

  for (let j = 0; j < arrA.length; j++) {
    if (arrB.includes(arrA[j])) {
      count++;
    }
  }
  result[i] = count;

  if (i < n - 1) {
    i++;
  } else {
    break;
  }
}

console.log(result);
