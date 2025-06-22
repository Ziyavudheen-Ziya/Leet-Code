let s = "aaa";

let palindromeCount = 0;

let palindrome = true;

for (let i = 0; i < s.length; i++) {
  for (let j = i; j < s.length; j++) {
    let subString = s.slice(i, j + 1);
    palindrome = true;

    let start = 0;
    let end = subString.length - 1;

    while (start < end) {
      if (subString[start] !== subString[end]) {
        palindrome = false;
        break;
      }
      start++;
      end--;
    }

    if (palindrome) {
      palindromeCount++;
    }
  }
}

console.log(palindromeCount);
