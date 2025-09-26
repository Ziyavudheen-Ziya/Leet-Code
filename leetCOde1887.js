let nums = [1, 1, 2, 2, 3].sort((a, b) => a - b);

let count = 0;
let operation = 0;
let minVal = nums[0];
for (let i = 1; i < nums.length; i++) {
  if (nums[i] !== nums[i - 1]) {
    count++;
  }

  operation += count;
}
console.log(operation);

// let count = 0;

// function Resursive(nums){
//   let minVal = Math.min(...nums);
//   let check = nums.every((v) => v === minVal);
//   if (check) {
//     return count
//   }

//   let max = -Infinity;
//   let maxSecond = -Infinity;
//   let maxIndex = 0;

//   for (let i = 0; i < nums.length; i++) {
//     if (max < nums[i]) {
//       maxSecond = max;
//       max = nums[i];
//       maxIndex = i;
//     } else if (nums[i] > maxSecond && nums[i] < max) {
//       maxSecond = nums[i];
//     }
//   }

//   nums[maxIndex] = maxSecond;
//   count++;
//   return Resursive(nums)
// }
// Resursive(nums)
// console.log(count);
