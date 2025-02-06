let nums = [5, 2, 3, 1];

function merge(arr) {
  if (arr.length < 2) {
    return arr;
  }
  let mid = Math.floor(arr.length / 2);
  let leftArr = arr.slice(0, mid);
  let rightArr = arr.slice(mid);

  return mergeSort(merge(leftArr), merge(rightArr));
}

function mergeSort(leftArr, rightArr) {
  let sortedArr = [];

  while (leftArr.length && rightArr.length) {
    if (leftArr[0] <= rightArr[0]) {
      sortedArr.push(leftArr.shift());
    } else {
      sortedArr.push(rightArr.shift());
    }
  }

  return [...sortedArr, ...leftArr, ...rightArr];
}

let arr = [4, 5, 3, 1, 2];
console.log(merge(arr));
