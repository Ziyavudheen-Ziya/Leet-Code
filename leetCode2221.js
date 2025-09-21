let nums = [1, 2, 3, 4, 5];


let n = nums.length - 1;
for (let i = 0; i < n; i++) {
  let newA = [];
  for (let j = 0; j < nums.length - 1; j++) {
    let v = (nums[j] + nums[j + 1]) % 10;
    newA.push(v);
  }

  nums = newA;
}

console.log(nums);

