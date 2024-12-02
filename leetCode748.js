let licensePlate = "1s3 PSt".replace(" ", "").toLowerCase().split("");
let words = ["step", "steps", "stripe", "stepple"];

let str = "";
let res = [];
let obj = {};
for (let i = 0; i < licensePlate.length; i++) {
  if (/[A-Za-z]/.test(licensePlate[i])) {
    str += licensePlate[i];
  }
}

for (let j = 0; j < str.length; j++) {
  obj[str[j]] = (obj[str[j]] || 0) + 1;
}

for (let i = 0; i < words.length; i++) {
  let val = words[i];

  let isValid = true;

  let wordObj = {};

  for (let j = 0; j < val.length; j++) {
    val[j].toLowerCase();
    wordObj[val[j]] = (wordObj[val[j]] || 0) + 1;
  }

  for (let key in obj) {
    if (!wordObj[key] || wordObj[key] < obj[key]) {
      isValid = false;
      break;
    }
  }

  if (isValid) {
    res.push(val);
  }
}

let result = res.sort((a, b) => a.length - b.length);
console.log(result[0]);
