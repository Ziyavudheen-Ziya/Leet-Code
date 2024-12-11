let sentence = "I speak Goat Latin".split(" ");

let vowel = "aeiouAEIOU";

let str = "";
let m = 0;
while (m < sentence.length) {
  let char = sentence[m];

  let character = "";
  if (vowel.includes(char[0])) {
    character = char;
    str += `${character}ma${"a".repeat(m + 1)} `;
  } else if (!vowel.includes(char[0])) {
    character = char.slice(1);
    str += `${character}${char[0]}ma${"a".repeat(m + 1)} `;
  }

  m++;
}
console.log(str);

console.log(str.trim());
