let candidates = [2, 3, 5],
  target = 8;

let res = [];

function CombinationSum(arr, target) {
  let newSet = new Set();
  function backtrack(sum, sumOf) {
    if (sumOf === target) {
      let key = sum
        .slice()
        .sort((a, b) => a - b)
        .join(",");

      if (!newSet.has(key)) {
        newSet.add(key);
        res.push([...sum]);
      }
      return;
    }

    if (sumOf > target) {
      return;
    }

    for (let v of arr) {
      sum.push(v);

      backtrack(sum, sumOf + v);
      sum.pop();
    }
  }

  backtrack([], 0);
}

CombinationSum(candidates, target);

console.log(res);
