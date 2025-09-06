let num = [1, 2, 0, 0],
  k = 34;

// let toSrt = num.join('')
// let toNum = Number(toSrt)
// toNum+=k
// let newArr = String(toNum).split('').map((val)=>Number(val))
// console.log(newArr);

let res = [];
let i = num.length - 1;

while (i >= 0 || k > 0) {
  if (i >= 0) {
    k += num[i];
    i--;
  }

  res.push(k % 10);
  k = Math.floor(k / 10);
}

console.log(res.reverse());
