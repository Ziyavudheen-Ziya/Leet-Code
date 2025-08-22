let nums = [-2, -1];

let max = nums[0],
  current = nums[0];

for (let i = 1; i < nums.length; i++) {
  current = Math.max(nums[i], current + nums[i]);
  max = Math.max(max, current);
}

console.log(max);
