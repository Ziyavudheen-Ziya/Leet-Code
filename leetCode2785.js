let s = "lEetcOde";
let vowels = "AEIOUaeiou";

let res = [];
let vowelsChar = [];
for (let i = 0; i < s.length; i++) {
  if (vowels.includes(s[i])) {
    vowelsChar.push(s.charCodeAt(i));
  }
}
vowelsChar.sort((a, b) => a - b);
let vowelIndex = 0;
for (let i = 0; i < s.length; i++) {
  if (vowels.includes(s[i])) {
    res.push(String.fromCharCode(vowelsChar[vowelIndex++]));
  } else {
    res.push(s[i]);
  }
}

console.log(res);
