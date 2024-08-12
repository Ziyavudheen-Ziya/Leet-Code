let s = "abc".split("");

let i =0

while(i<s.length){
  if (/\d/.test(s[i])) {
    s.splice(i - 1, 2);
    i--;
  } else {
    i++;
   
  }
}

let str = s.join("")

console.log(str);

