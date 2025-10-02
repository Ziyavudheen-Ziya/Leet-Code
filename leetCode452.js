let points = [
  [10, 16],
  [2, 8],
  [1, 6],
  [7, 12],
].sort((a, b) => a[1] - b[1]);

let count = 0;

let arrow = 1;
let arrowPos = points[0][1];
for (let i = 1; i < points.length; i++) {
  let [start, end] = points[i];

  if (start > arrowPos) {
    arrow++;
    arrowPos = end;
  }
}
console.log(points);

// console.log(count);
