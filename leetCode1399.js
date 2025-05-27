let n = 2

let group = {};

for (let i = 1; i <= n; i++) {
  let value = i.toString();

  let arr = value.split("");

  let sum = arr.reduce((accu, curr) => (accu += Number(curr)), 0);

  if (!group[sum]) {
    group[sum] = [];
  }

  group[sum].push(i);
}

let res = [];

for (let key in group) {
  let size = Object.values(group[key]).length;
  res.push(size);
}

let max = Math.max(...res);
let c = 0;

for (let i = 0; i < res.length; i++) {
  if (res[i] === max) {
    c++;
  }
}

console.log(c);
