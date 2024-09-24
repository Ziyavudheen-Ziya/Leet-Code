let nums = [3, 1, 5, 4, 2],
  k = 2;

let c = 0;
let collected = new Set();

for (let i = nums.length - 1; i >= 0; i--) {
  c++;
  collected.add(nums[i]);
  let allCollected = true;

  for (let j = 1; j <= k; j++) {
    if (!collected.has(j)) {
      allCollected = false;
      break;
    }
  }

  if (allCollected) {
    console.log(c);
  }
}

