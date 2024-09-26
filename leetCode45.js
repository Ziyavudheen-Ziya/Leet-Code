let nums = [0]
let numLength = nums.length;
let maxReach = 0;

let result = false;
for (let i = 0; i < nums.length; i++) {
  if (i > maxReach) {
    result = false;
    break;
  }

  maxReach = Math.max(maxReach, i+ nums[i]);

  if (maxReach >= numLength-1) {
    result = true;
    break;
  }
}

console.log(result);
