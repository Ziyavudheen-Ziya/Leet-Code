let s = "abcdefg".split("");

let k = 2;
let str = [];
let arr = [];

let i = 0;

for (let i = 0; i < s.length; i++) {
  if (i < k) {
    str.push(s[i]);
  } else {
    arr.push(s[i]);
  }
}

let res = str.reverse().concat(arr);

console.log(res.join(""));
