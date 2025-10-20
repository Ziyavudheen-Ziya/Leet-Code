let s = "z",
  t = "abcde";

// let subSequnceCount = 0;
// let index = Infinity;
// for (let i = 0; i < t.length; i++) {
//   if (!s.includes(t[i])) {
//     index = i;
//     break;
//   }
// }
// console.log(index);

// let sliceT = t.slice(index);
// console.log(sliceT);

// let newS = s.concat(sliceT);
// let sequence = false;
// for (let i = 0; i < newS.length; i++) {
//   for (let j = 0; j < sliceT.length; j++) {
//     if (s[i] === s[j]) {
//       sequence = true;
//       break;
//     }
//   }
// }

// if (sequence) {
//   console.log(sliceT.length);
// } else {
//   console.log(0);
// }

let i = 0;
let j = 0;
while (i < s.length && j < t.length) {
  if (s[i] === t[j]) {
    j++;
  }

  i++;
}

console.log(j);

console.log(t.length - j);
