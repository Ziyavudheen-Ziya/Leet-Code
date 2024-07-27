let arr = [1, 2, 2, 6, 6, 6, 6, 7, 10];
let obj = {};
let maxCount = 0;
let key = 0;

for (i = 0; i < arr.length; i++) {
  if (!obj[arr[i]]) {
    obj[arr[i]] = 0;
  }

  obj[arr[i]]++;
}
console.log(obj);
let l = 0;
for (let k in obj) {
  if (obj[k] > maxCount) {
    maxCount = obj[k];

    key = k;
  }
}

console.log(key);
