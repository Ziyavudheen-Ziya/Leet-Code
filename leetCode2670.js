let nums = [3, 2, 3, 4, 2];

let rs = [];

for (let i = 0; i < nums.length; i++) {
  let prefixSet = new Set(nums.slice(0, i + 1));
  let sufixSet = new Set(nums.slice(i + 1));

  let prefixSize = prefixSet.size;
  let sufixSize = sufixSet.size;

  rs.push(prefixSize - sufixSize);
}

console.log(rs);
