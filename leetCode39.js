let candidates = [2, 3, 5],
  target = 8;

let res = [];

function CombinationSum(arr, target) {
  function backtrack(start, path, target) {
    if (target === 0) {
      res.push([...path]);
      return true;
    }

    if (target < 0) {
      return false;
    }

    for (let i = start; i < arr.length; i++) {
      path.push(arr[i]);

      backtrack(i, path, target - arr[i]);
      path.pop();
    }
  }

  backtrack(0, [], target);
}

CombinationSum(candidates, target);

console.log(res);
