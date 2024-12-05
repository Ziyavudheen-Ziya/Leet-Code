let s = "abcde",
  goal = "cdeab";

let rotateStr = false;

if (s.length !== goal.length) {
  console.log(false);
}

for (let i = 0; i < s.length; i++) {
  let val = s[0];
  s = s.slice(1) + val;

  if (s === goal) {
    rotateStr = true;
    break;
  }
}
console.log(rotateStr);


