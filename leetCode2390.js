//MEDIUM

let s = "leet**cod*e".split("");

let stack = [];

for (let i = 0; i < s.length; i++) {
  if (s[i] === "*") {
    stack.pop();
  } else {
    stack.push(s[i]);
  }
}
console.log(stack.join(""));
