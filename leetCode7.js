let x = 1534236469;

if (x >= -2147483648 && x <= 2147483647) {
  let isNegative = x <= 0;
  let n = Math.abs(x);

  if (/[0-9]/.test(n)) {
    let rs = Number(n.toString().split("").reverse().join(""));

    let reverseNNumber = Number(rs);

    if (isNegative) {
      reverseNNumber = -reverseNNumber;
    }

    console.log(reverseNNumber);
  }
} else {
  console.log(0);
}
