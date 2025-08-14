let nums = [2, 3, 1, 0];

let count = 0;
function backtrack(arr, count, i = 0, totalSum = 0, prefixSum = 0) {
  if (i >= arr.length - 1) {
    return count;
  }

  if (i === 0) {
    totalSum = arr.reduce((acuu, curr) => (acuu += curr), 0);
  }

  prefixSum += nums[i];

  if (prefixSum >= totalSum - prefixSum) {
    count++;
  }

  return backtrack(arr, count, i + 1, totalSum, prefixSum);
}

console.log(backtrack(nums, count));
