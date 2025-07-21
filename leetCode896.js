let  nums = [1,2,2,3]

let decending = true;
let ascending = true;
let monotonic = null
for (let i = 1; i < nums.length; i++) {
  let valueCheck = nums[i - 1];
  if (valueCheck <= nums[i]) {
    ascending = true;
  } else {
    ascending = false;
    break;
  }
}

for (let i = 1; i < nums.length; i++) {
  let valueCheck = nums[i - 1];
  if (valueCheck >= nums[i]) {
    decending = true;
  } else {
    decending = false;
    break;
  }
}

// console.log(ascending);
// console.log(decending);


if(ascending||decending){

    monotonic = true
}else{

    monotonic = false
}

console.log(monotonic);
