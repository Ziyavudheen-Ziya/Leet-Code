let nums = [12,345,2,6,7896];
let arr = [];
let c = 0;
for (let i = 0; i < nums.length; i++) {
  arr.push([nums[i]]);
}

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    let val = arr[i][j].toString();
     if (val.length % 2 == 0) {
      c++;
    }
  }
}
console.log(c);
