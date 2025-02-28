let arr = [100, 100, 100];
let sortedArr = [...arr].sort((a, b) => a - b);

let rank = 1;
let rankMap = new Map();

// Unefficient coode time limit exceeded
// let res = [];
// let r = [];
// let c = 0;
// for (let i = 0; i < sortedArr.length; i++) {
//   let exsisting = res.find((item) => item[1] === sortedArr[i]);
//   if (exsisting) {
//     res.push([exsisting[0], sortedArr[i]]);
//   } else {
//     c++;
//     res.push([c, sortedArr[i]]);
//   }
// }

// for (let i = 0; i < arr.length; i++) {
//   let value = res.find((item) => item[1] === arr[i]);
//   r.push(value[0]);
// }
// console.log(r);


for (let num of sortedArr) {
  if (!rankMap.has(num)) {
    rankMap.set(num, rank++);
  }
}

let res = arr.map((res) => {
  return rankMap.get(res);
});
console.log(res);
