let n = 5;

let arr = [];
let res = [];
let c = 0;
for (i = 0; i <= n; i++) {
  arr.push(i.toString(2));
}

for (let i = 0; i < arr.length; i++) {
  let value = arr[i];
  let nums = value.split("");

  c = 0;

  for (let j = 0; j < nums.length; j++) {
    if (nums[j] == "1") {
      c++;
    }
  }

  res.push(c);
}

console.log(res);
