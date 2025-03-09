let nums = [1, 5, 0, 2, -3];

let nedgativeNum = 0;
for (let i = 0; i < nums.length; i++) {
  if (nums[i] === 0) {
    console.log(0);
    break;
  }

  if (nums[i] < 0) {
    nedgativeNum++;
  }
}

if (nums.includes(0)) {
  console.log(0);
} else if (nedgativeNum % 2 == 0) {
  console.log(1);
} else {
  console.log(-1);
}
