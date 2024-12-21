let arr = [8, 5, 3, 2, 6],
  size = 6;

let res = [];

for (let i = 0; i < arr.length; i += size) {
  res.push(arr.slice(i, i + size));
}

console.log(res);
