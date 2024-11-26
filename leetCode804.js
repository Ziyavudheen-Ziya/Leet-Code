let alph = [
  "a:.-",
  "b:-...",
  "c:-.-.",
  "d:-..",
  "e:.",
  "f:..-.",
  "g:--.",
  "h:....",
  "i:..",
  "j:.---",
  "k:-.-",
  "l:.-..",
  "m:--",
  "n:-.",
  "o:---",
  "p:.--.",
  "q:--.-",
  "r:.-.",
  "s:...",
  "t:-",
  "u:..-",
  "v:...-",
  "w:.--",
  "x:-..-",
  "y:-.--",
  "z:--..",
];

let obj = {};
let count = 0

alph.forEach((item) => {
  let [letter, morse] = item.split(":");
  obj[letter] = morse;
});

let words = ["gin","zen","gig","msg"]
let res = new Set();

let i = 0;
while (i < words.length) {
  let str = words[i];
  let strs = "";
  for (let j = 0; j < str.length; j++) {
    for (let key in obj) {
      if (key === str[j]) {
        strs += obj[key];
      }
    }
  }

 res.add(strs)
  
  i++;
}

console.log(res.size);



