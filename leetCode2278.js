let s = "kue", letter = "e"

let count = 0;
for (let i = 0; i < s.length; i++) {
  if (letter.includes(s[i]) ) {
    count++;
  }
}

let res = Math.floor(count/s.length * 100)
console.log(res);
