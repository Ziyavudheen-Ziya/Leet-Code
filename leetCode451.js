let s = "tree";
let obj = {};

for (let i = 0; i < s.length; i++) {
  obj[s[i]] = (obj[s[i]] || 0) + 1;
}

let res = Object.entries(obj);

res.sort((a, b) => b[1] - a[1]);
let str = "";

for (let i = 0; i < res.length; i++) {
  let char = res[i][0];
  let val = res[i][1];
  for (let j = 0; j < val; j++) {
    str += char;
  }
}
console.log(str);
