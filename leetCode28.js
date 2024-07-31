let nums = [1, 15, 6, 3];
let arr = nums.toString().split("");
let arr1 = [];
let sum = 0;
let sum2 = 0;

for (i = 0; i < nums.length; i++) {
  sum += nums[i];
}

console.log(sum);

for (i = 0; i < arr.length; i++) {
  if (/[0-9]/.test(arr[i])) {
    sum2 += parseFloat(arr[i]);
  }
}

console.log(sum2);

console.log(sum - sum2);
