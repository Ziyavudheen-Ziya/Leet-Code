let words = ["abdfs","cccd","a","qwwewm"]

let res = [];
let key1 = "qwertyuiop";
let key2 = "asdfghjkl";
let key3 = "zxcvbnm";

for (let i = 0; i < words.length; i++) {
  let word = words[i]
  let w = "";
  let r = ""
  let k = ""
   
  for (let j = 0; j < word.length; j++) {
    for (let m = 0; m < key1.length; m++) {
        let char =word[j].toLowerCase()
      if (key1[m] === char) {
        w += word[j];
      }
    }
  }
   
  
  for (let j = 0; j < word.length; j++) {
    for (let m = 0; m < key2.length; m++) {
        let char =word[j].toLowerCase()
      if (key2[m] === char) {
        r += word[j];
      }
    }
  }

  for (let j = 0; j < word.length; j++) {
    for (let m = 0; m < key3.length; m++) {
        let char =word[j].toLowerCase()
      if (key3[m] === char) {
        k += word[j];
      }
    }
  }

  if (word === w) {
    res.push(w);
  }
  if (word === r) {
    res.push(r);
  }
  if (word === k) {
    res.push(k);
  }
}

console.log(res);
