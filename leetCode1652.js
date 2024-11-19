let code = [2, 4, 9, 3],
  k = -2;

let res = [];
for (let i = 0; i < code.length; i++) {
  let sum = 0;
  if (k > 0) {
    for (let j = 1; j <= k; j++) {
      sum += code[(i + j) % code.length];
    }

    res.push(sum);
  } else if (k < 0) {
    for (let j = 1; j <= Math.abs(k); j++) {
      sum += code[(i - j + code.length) % code.length];
    }
    res.push(sum);
  } else {
    res.push(0);
  }
}
console.log(res);
