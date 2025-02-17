let nums = [1, 1, 1, 1].sort((a, b) => a - b);

let nums1 = [];
let nums2 = [];

let i = 0;

let isValue1 = true;
let isValue2 = true;
while (nums.length) {
  let value = nums.shift();
  let value2 = nums.shift();
  if (!nums1.includes(value)) {
    nums1.push(value);
    console.log(nums1);
  } else {
    isValue1 = false;
  }

  if (!nums2.includes(value2)) {
    nums2.push(value2);
    console.log(nums2);
  } else {
    isValue2 = false;
  }
}

console.log(isValue1 && isValue2);
