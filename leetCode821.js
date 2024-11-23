let s = "loveleetcode",
  c = "e";

let index = [];
let res = [];

for (let i = 0; i < s.length; i++) {
  if (s[i] == c) {
    index.push(i);
  }
}

for (let i = 0; i < s.length; i++) {
  let less = Infinity;

  for (let j = 0; j < index.length; j++) {
    let val = Math.abs(i - index[j]);

    if (val < less) {
      less = val;
    }
  }

  res.push(less);
}

console.log(res);
