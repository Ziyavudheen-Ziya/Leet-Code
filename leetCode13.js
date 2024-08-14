let obj = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

let s = "LVIII".split("");

let sum = 0;
let i = 0;

while (i < s.length) {
  let curr = obj[s[i]];
  let next = obj[s[i + 1]];

  if (next && curr < next) {
    sum += next - curr;

    i += 2;
  } else {
    sum += curr;
    i++;
  }
}

console.log(sum);
