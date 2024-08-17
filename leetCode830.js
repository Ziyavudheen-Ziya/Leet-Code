let s = "abcdddeeeeaabbbcd";

let res = [];
let c = 0;

let inArr = [];
for (let i = 0; i < s.length; i++) {
  if (c == 0) {
    inArr = [i];
  }
  if (s[i] == s[i + 1]) {
    c++;
  } else {
    if (c >= 2) {
      inArr.push(i);
      res.push(inArr);
    }
    c = 0;
  }
}
console.log(res);
