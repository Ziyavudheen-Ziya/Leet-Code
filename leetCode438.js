let s = "cbaebabacd";
let p = "abc";

let arr = [];
let pLength = p.length;
let pSorted = p.split("").sort().join("");

for (let i = 0; i < s.length; i++) {
  let substring = s.substring(i, i + pLength);

  if (substring.split("").sort().join("") === pSorted) {
    arr.push(i);
  }
}

console.log(arr);
