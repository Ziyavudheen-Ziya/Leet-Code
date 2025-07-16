let n = 4;

let result = [1];

while (result.length < n) {
  let temp = [];

  for (let num of result) {
    let odd = 2 * num - 1;
    if (odd <= n) temp.push(odd);
    console.log("odd", odd);
  }

  for (let num of result) {
    let even = 2 * num;
    if (even <= n) temp.push(even);
    console.log(even);
  }

  result = temp;
}

console.log(result);
