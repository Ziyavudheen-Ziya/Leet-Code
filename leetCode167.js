let numbers = [2, 7, 11, 15],
  target = 9;

let res = [];

for (let i = 0; i < numbers.length; i++) {
  for (let j = i + 1; j < numbers.length; j++) {
    if (numbers[i] + numbers[j] === target) {
      res.push(i + 1, j + 1);
      break;
    }
  }

  if (res.length > 0) break;
}
console.log(res.sort((a, b) => a - b));
