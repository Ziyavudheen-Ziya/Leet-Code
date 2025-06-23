let paragraph =
"Bob hit a ball, the hit BALL flew far after it was hit.",
  banned = ["hit"];

let para = paragraph
  .replace(/[^a-zA-Z]/g, " ")
  .toLowerCase()
  .split(/\s+/)
  .filter(word=>word)


console.log(para);


let freq = {};
let largest = 0;
let res = "";

for (let i = 0; i < para.length; i++) {
  freq[para[i]] = (freq[para[i]] || 0) + 1;
}

for (let key in freq) {
  if (!banned.includes(key) && largest < freq[key]) {
    largest = freq[key];
    res = key;
  }
}

console.log(largest);
console.log(res);
