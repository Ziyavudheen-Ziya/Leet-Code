let nums =
[1], k =1

let sortedArr = []
function MergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  let mid = Math.floor(arr.length / 2);
  let leftArr = arr.slice(0, mid);
  let rightArr = arr.slice(mid);

 return Merge(MergeSort(leftArr), MergeSort(rightArr));
 
}

function Merge(leftArr, rightArr) {
  let result = [];
  while (leftArr.length && rightArr.length) {
    if (leftArr[0] >= rightArr[0]) {
      result.push(leftArr.shift());
    } else {
      result.push(rightArr.shift());
    }
  }

  return [...result, ...leftArr, ...rightArr];
}

 sortedArr = MergeSort(nums)
console.log(sortedArr);

console.log(sortedArr[k-1]);



