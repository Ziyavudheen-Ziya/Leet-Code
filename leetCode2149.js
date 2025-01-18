//Medium

let nums = [3, 1, -2, -5, 2, -4];

let n = nums.length;

let negative = [];
let positive = [];
let postiveIndex = 0;
let negativeIndex = 0;
let res = [];
for (let i = 0; i < nums.length; i++) {
  if (nums[i] >= 1) {
    positive.push(nums[i]);
  } else {
    negative.push(nums[i]);
  }
}

for (i = 0; i < n; i++) {
  if (i % 2 == 0) {
    res.push(positive[postiveIndex]);
    postiveIndex++;
  } else {
    res.push(negative[negativeIndex]);
    negativeIndex++;
  }
}
console.log(res);
