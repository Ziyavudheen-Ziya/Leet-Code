let arr = [2, 2, 2, 2, 5, 5, 5, 8],
  k = 3,
  threshold = 4;

let count = 0;
for (let i = 0; i < arr.length ; i++) {
  let sum = 0;

  for (let j = i; j < i + k; j++) {
    sum += arr[j];
  }

  let avg = sum / k;
  if (avg >= threshold) {
    count++;
  }
}
console.log(count);
