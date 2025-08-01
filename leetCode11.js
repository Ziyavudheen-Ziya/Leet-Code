let height = [1, 8, 6, 2, 5, 4, 8, 3, 7];

let i = 0;
let j = height.length - 1;
let area = 0;

while (i < j) {
  let h = Math.min(height[i], height[j]);
  let w = j - i;
  area = Math.max(area, h * w);

  if (height[i] < height[j]) {
    i++;
  } else {
    j--;
  }
}
console.log(area);


