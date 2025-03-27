let nums = [1, 1, 2, 3, 3, 4, 4, 8, 8];




let res = 0;
for (let i = 0; i < nums.length; i++) {
  if (nums.indexOf(nums[i]) === nums.lastIndexOf(nums[i])) {
    res = nums[i];
    break;
  }
}
console.log(res);
