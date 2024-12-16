let a = "a",
  b = "aa";

let subString = "";
let repeatTimes = 0;
while (subString.length < b.length) {
  subString += a;

  repeatTimes++;
}

if (subString.includes(b)) {
  console.log(repeatTimes);
} else {
  subString += a;
  repeatTimes++;

  if (subString.includes(b)) {
    console.log(repeatTimes);
  } else {
    console.log(-1);
  }
}
