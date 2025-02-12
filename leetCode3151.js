let nums = [2, 1, 4];

let isTrue = true;

for (let i = 0; i < nums.length - 1; i++) {
  if (
    (nums[i] % 2 == 0 && nums[i + 1] % 2 === 0) ||
    (nums[i] % 2 !== 0 && nums[i + 1] % 2 !== 0)
  ) {
    isTrue = false;
    break;
  }
}

console.log(isTrue);
