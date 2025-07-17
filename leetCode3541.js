let s = "bx"

let vowels = ["a", "e", "i", "o", "u"];

let fre = {};
let vowelFre = {};
for (let i = 0; i < s.length; i++) {
  if (vowels.includes(s[i])) {
    vowelFre[s[i]] = (vowelFre[s[i]] || 0) + 1;
  } else {
    fre[s[i]] = (fre[s[i]] || 0) + 1;
  }
}

if (Object.values(fre).length != 0 && Object.values(vowelFre).length !== 0) {
  let sum =
    Math.max(...Object.values(fre)) + Math.max(...Object.values(vowelFre));
  console.log(sum);
} else if (Object.values(fre).length === 0) {
  console.log(Math.max(...Object.values(vowelFre)));
} else if(Object.values(vowelFre).length===0){
  console.log(Math.max(...Object.values(fre)));
}
