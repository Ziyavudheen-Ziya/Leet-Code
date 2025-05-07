let nums = [0, 1, 4, 6, 7, 10],
  diff = 3;

let arathematicTriplets = 0;

for (let i = 0; i < nums.length; i++) {
  for (let j = i + 1; j < nums.length; j++) {
    for (let k = j + 1; k < nums.length; k++) {
      if (nums[j] - nums[i] == diff && nums[k] - nums[j] == diff) {
        console.log("tru");

        arathematicTriplets++;
      }
    }
  }
}

console.log(arathematicTriplets);