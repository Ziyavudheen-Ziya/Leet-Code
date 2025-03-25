let word = "aaaaaaaaaaaaaabb"


let compressed = "";
let count = 1;
for (let i = 1; i <= word.length; i++) {
  if (word[i] === word[i - 1]) {
    count++;
  } else {
    while (count > 9) {
      compressed += "9" + word[i - 1];
      count -= 9;
    }
    compressed += count + word[i - 1];
    count = 1;
  }
}
console.log(compressed);
