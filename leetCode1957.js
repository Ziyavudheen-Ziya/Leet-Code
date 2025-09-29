let s =
"leeetcode".split("");
let result = [];
for (let i = 0; i < s.length;) {
  let c = 0;
  let j = i;
  while (j < s.length && s[i] === s[j]) {
    c++;
    j++;
  }

  let keep = Math.min(2, c);

  for (let k = 0; k < keep; k++) {
    result.push(s[i]);
  }
  i = j;
}

console.log(result.join(""));

// let stack = [];
// for (let char of s) {
//   if (stack.length && stack[stack.length - 1][0] === char) {
//     stack[stack.length - 1][1]++;

//     if (stack[stack.length - 1][1] > 2) {
//       stack[stack.length - 1][1] = 2;
//     }
//   } else {
//     stack.push([char, 1]);
//   }
// }

// let result = stack.map(([ch, cnt]) => ch.repeat(cnt)).join("");

// console.log(result);
