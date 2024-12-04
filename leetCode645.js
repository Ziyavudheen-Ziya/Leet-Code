let nums = [2, 2];

let map = new Set();
let duplicate = -1;
let missing = -1;
let lenght = nums.length;
let res = [];
for (let i = 0; i < nums.length; i++) {
  if (map.has(nums[i])) {
    duplicate = nums[i];
    res.push(duplicate);
  } else {
    map.add(nums[i]);
  }
}

for (let j = 1; j <= lenght; j++) {
  if (!map.has(j)) {
    missing = j;
    res.push(missing);
  }
}
console.log(res);
