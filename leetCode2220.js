let start = 10, goal = 7;
let c = 0;

let startBinary = start.toString(2);
let goalBinary = goal.toString(2);

const maxLength = Math.max(startBinary.length, goalBinary.length);
startBinary = startBinary.padStart(maxLength, "0");
goalBinary = goalBinary.padStart(maxLength, "0");

for (let i = 0; i < maxLength; i++) {
  if (startBinary[i] != goalBinary[i]) {
    c++;
  }
}

console.log(c);
