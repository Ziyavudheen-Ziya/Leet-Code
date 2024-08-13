let left = 66,
  right = 708;
let arr = [];
for (i = left; i <= right; i++) {
  if (i <= 9) {
    if (i % i == 0) {
      arr.push(i);
    }
  } else {
    let str = (i + "").split("");

    let j = 0;
    while (j < str.length) {
      if (i % Number(str[j]) != 0) {
        break;
      }
      j++;
    }

    if (j == str.length) arr.push(i);
  }
}

console.log(arr);
