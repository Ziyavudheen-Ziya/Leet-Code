let x = 0;
let y = 0;

let arr = "UD".split("");

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === "U") {
    x++;
  } else if (arr[i] === "D") {
    x--;
  } else if (arr[i] == "L") {
    y--;
  } else if (arr[i] == "R") {
    y++;
  }
}

console.log(x == 0 && y == 0);
