let strs = ["eat", "tea", "tan", "ate", "nat", "bat"];

let obj = {};

for (let i = 0; i < strs.length; i++) {
  let v1 = strs[i].split("").sort().join("");

  if (!obj[v1]) {
    obj[v1] = [];
  }

  obj[v1].push(strs[i]);
}

let res = Object.values(obj);

console.log(res);

let res1 = res.sort((a, b) => a.length - b.length);

console.log(res1);
