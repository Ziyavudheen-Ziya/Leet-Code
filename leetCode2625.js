let arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]];
let n = 0;

let res = [];

let currentDepth = 0;

while (currentDepth < n) {
  res = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      for (let j = 0; j < arr[i].length; j++) {
        res.push(arr[i][j]);
      }
    } else {
      res.push(arr[i]);
    }
  }
  arr = res;
  currentDepth++;
}
console.log(arr);



// function flat(arr, rs, n, j = 0) {
//   for (let i = 0; i < arr.length; i++) {
//     if (Array.isArray(arr[i])) {
//       if (j < n) {
//         rs.push(...flat(arr[i], n, j + 1));
//       }
//     } else {
//       rs.push(arr[i]);
//     }
//   }
//   return rs;
// }

// console.log(flat(arr, [], n));
