let nums = [-3, 4, 3, 2],
  pivot = 2;

let i = 0;

let j = 0;

let result1 = [];
let result2 = [];
while (i < nums.length) {
  if (nums[i] < pivot) {
    result1.push(nums[i]);
  } else if (nums[i] > pivot) {
    result2.push(nums[i]);
  }

  i++;
}

while (j < nums.length) {
  if (nums[j] === pivot) {
    result1.push(nums[j]);
  }
  j++;
}

let result = result1.concat(result2);

console.log(result);
