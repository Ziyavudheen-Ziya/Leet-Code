let s = "LLLLRRRR";

let c = 0;
let balancedCount = 0;

for (let i = 0; i < s.length; i++) {
  if (s[i] === "R") {
    c++;
  }

  if (s[i] === "L") {
    c--;
  }
  if (c === 0) {
    balancedCount++;
  }
}
console.log(balancedCount);
