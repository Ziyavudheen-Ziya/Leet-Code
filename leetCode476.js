

let binary = num.toString(2);

let s = binary.split("");

for (let i = 0; i < s.length; i++) {
  if (s[i] == "0") {
    s[i] = 1;
  } else if (s[i] == "1") {
    s[i] = 0;
  }
}

let r = s.join("");

let decimalValue = parseInt(r, 2);

console.log(decimalValue);
