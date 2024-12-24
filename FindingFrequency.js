let arr = [
  1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6, 1000, 1000, 1000, 6, 9, 9, 9, 9, 9, 9, 9,
];

let c = 0;
let res = [];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === -1) continue;

  let current = arr[i];
  for (let j = 0; j < arr.length; j++) {
    if (current === arr[j]) {
      c++;

      arr[j] = -1;
    }
  }

  res.push(`${current}:${c}`);

  c = 0;
}
console.log(res);
