let nums = [5, 7, 1, 8];

let isNonDecresing = true;
let modified = false;
for (let i = 0; i < nums.length - 1; i++) {
  if (nums[i] > nums[i + 1]) {
    if (modified) {
      isNonDecresing = false;
      break;
    }

    modified = true;

    if (i === 0 || nums[i - 1] <= nums[i + 1]) {
      nums[i] = nums[i + 1];
    } else {
      nums[i + 1] = nums[i];
    }
  }
}

console.log(nums);

for (let i = 0; i < nums.length - 1; i++) {
  if (nums[i] > nums[i + 1]) {
    isNonDecresing = false;
    break;
  }
}

console.log(isNonDecresing);
