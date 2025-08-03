let s = "leafbcaef";

let palindrome = false;
let reversed = s.split("").reverse().join("");
for (let i = 0; i < s.length - 1; i++) {
  let sub = s.substring(i, i + 2);

  if (reversed.includes(sub)) {
    palindrome = true;
    break;
  }
}

console.log(palindrome);
