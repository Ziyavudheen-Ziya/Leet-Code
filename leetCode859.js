let s = "ab".split(""),
  goal = "ba";

let strEqual = false;
for (let i = 0; i < s.length; i++) {
  for (let j = 0; j < s.length; j++) {
    let swapped = false;

    if (i != j) {
      let temp = s[i];
      s[i] = s[j];
      s[j] = temp;
      if (s.join("") === goal) {
        strEqual = true;
        break;
      }
      swapped = true;
    }

    if (swapped && s.join("") !== goal) {
      let temp = s[i];
      s[i] = s[j];
      s[j] = temp;
    }
  }

  if (strEqual) {
    break;
  }
}
console.log(strEqual);
