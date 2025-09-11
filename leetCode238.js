let nums = [1, 2, 3, 4];

let answer = [];
let prefix = new Array(nums.length).fill(1);
let suffix = new Array(nums.length).fill(1);
for (let i = 1; i < nums.length; i++) {
  prefix[i] = prefix[i - 1] * nums[i - 1];
}

for (let i = nums.length - 2; i >= 0; i--) {
  suffix[i] = suffix[i + 1] * nums[i + 1];
}

let n = nums.length;
for (let i = 0; i < n; i++) {
  answer[i] = prefix[i] * suffix[i];
}

console.log(answer);
