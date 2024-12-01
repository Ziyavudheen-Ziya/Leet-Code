let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

let res = [];

let length = matrix[0].length;
while (length > 0) {
  let i = 0;
  let r = [];
  while (i < matrix.length) {
    let mat = matrix[i].shift();

    r.push(mat);

    i++;
  }

  length--;

  res.push(r);
}

console.log(res);
