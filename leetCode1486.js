let n = 4,
  start = 3;

let nums = [];

for (let i = 0; i < n; i++) {
  nums[i] = start + 2 * i;
}

let res = nums.reduce((accu, curr) => accu ^ curr, 0);

console.log(res);
