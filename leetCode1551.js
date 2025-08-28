
let n = 3


let arr = [];

for (let i = 0; i < n; i++) {
  arr[i] = 2 * i + 1;
}

function Recusrsive(arr, n, i = 0, j = arr.length - 1, c = 0) {
  if (i >= j) {
    return c;
  }
  let x = arr[i];
  let y = arr[j];

  if (x < n && y > n) {
    c++;
    arr[i]++;
    arr[j]--;
    return Recusrsive(arr, n, i, j, c);
  }

  return Recusrsive(arr, n, i + 1, j - 1, c);
}

console.log(Recusrsive(arr, n));


///All test case for pass
function minOperations(n) {
  return Math.floor(n * n / 4);
}

console.log(minOperations(8401)); 
