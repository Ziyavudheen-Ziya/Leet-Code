let nums = [10, 43, 43, 17, 36, 44, 35, 28];

let size = 0;

for (let i = 0; i < nums.length; i++) {
  for (let j = i + 1; j < nums.length; j++) {
    if (nums[i] > nums[j]) {
      nums.splice(j, 1);
      j--;
    }
  }
}

function Recursive(nums, i = 0) {
  function bactrack(nums, i, j = i + 1) {
    if (nums[i] > nums[j]) {
    }
  }

  bactrack(nums, i);
}

Recursive(nums);
console.log(nums);

console.log(nums.length);

let result = [];
let maxSoFar = -Infinity;

for (let num of nums) {
  if (num >= maxSoFar) {
    result.push(num);
    maxSoFar = num;
  }
}

console.log(result);
