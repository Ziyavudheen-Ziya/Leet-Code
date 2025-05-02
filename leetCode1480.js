let nums = [1, 2, 3, 4];

let runningSUm = [];

for (let i = 0; i < nums.length; i++) {
  let sum = nums.slice(0, i + 1);
  runningSUm.push(sum.reduce((acc, curr) => (acc += curr), 0));
}

console.log(runningSUm);
