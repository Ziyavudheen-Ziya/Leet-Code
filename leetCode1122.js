let arr1 = [2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19],
  arr2 = [2, 1, 4, 3, 9, 6];

let toAscending = [];
let sortedArr = [];
let restOfValues = [];

for (let i = 0; i < arr2.length; i++) {
  let value = arr2[i];

  for (let i = 0; i < arr1.length; i++) {
    if (value === arr1[i]) {
      sortedArr.push(arr1[i]);
    }
  }
}

for (let i = 0; i < arr1.length; i++) {
  if (!sortedArr.includes(arr1[i])) {
    toAscending.push(arr1[i]);
  }
}

toAscending.sort((a, b) => a - b);

let rs = sortedArr.concat(toAscending);

console.log(rs);
