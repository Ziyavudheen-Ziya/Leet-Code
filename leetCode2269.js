let num = 240
let  k = 2;

let arr = num.toString();
let c = 0;
for (i = 0; i <= arr.length - k; i++) {
  let subNum = arr.substring(i, i + k);

  let Num = subNum;

  if (Num !== 0 && num % Num == 0) {
    c++;
  }
}

console.log(c);
