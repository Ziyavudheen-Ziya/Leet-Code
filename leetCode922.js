let nums = [4, 2, 5, 7];
let res = [];

let length = nums.length;
let i = 0;
let odd = nums.filter((curr) => curr % 2 != 0);
let even = nums.filter((curr) => curr % 2 == 0);

while (i < length) {
  if (i % 2 !== 0) {
    let value = odd.shift();
    res.push(value);
  } else {
    let value = even.shift();

    res.push(value);
  }
  i++;
}

console.log(res);
