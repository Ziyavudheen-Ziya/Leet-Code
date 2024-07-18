let num = 14;
let c = 0;

while (num) {
  if (num < 0) {
      break;
  }

  if (num % 2 == 0) {
    num = num / 2;
    c++;
  } else {
    num = num - 1;
    c++;
  }
}

console.log(c);
