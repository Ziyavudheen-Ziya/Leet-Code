let nums = [1, 3, 2, 1, 3, 2, 2];

let formedPairs = 0;
let unFormedPairs = 0;

let obj = {};
let result = [];

for (let i = 0; i < nums.length; i++) {
  obj[nums[i]] = (obj[nums[i]] || 0) + 1;
}

for (let key in obj) {
  let pairs = Math.floor(obj[key] / 2);

  let unPairs = obj[key] % 2 !== 0;

  console.log(unPairs);

  formedPairs += pairs;
  unFormedPairs += unPairs;

  if (unPairs === 0) {
    delete obj[key];
  } else {
    obj[key] = unPairs;
  }
}

result.push(formedPairs, unFormedPairs);

console.log(result);
