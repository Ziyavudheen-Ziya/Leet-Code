let sentence = "Leetcode is cool"


let word1 = sentence[0];
let word2 = sentence[sentence.length - 1];

let arr = sentence.split(" ");
let lastValue = [];
let firstValue = [];
for (let i = 0; i < arr.length; i++) {
  let char = arr[i].split("");

  lastValue.push(char[char.length - 1]);
  firstValue.push(char[0]);
}

firstValue.splice(0, 1);

lastValue.splice(-1);

if (arr.length < 2) {
  let value = false;

  if (word1 === word2) {
    value = true;
  }

  console.log(value);
} else {
  let value = true;

  for (let i = 0; i < firstValue.length; i++) {
    if (firstValue[i] !== lastValue[i]) {
      value = false;
      break;
    }
  }

  if (value && word1 !== word2) {
    value = false;
  }
  console.log(value);
}
