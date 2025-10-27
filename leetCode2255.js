let words =
["e","lnw","l","lnw","vq","jk"],
  s =
"lnw";

function Recursive(words, s, i = 0, prefixCount = 0) {
  if (i === s.length) {
    return prefixCount;
  }

  let prefix = s.slice(0, i + 1);

  let tempCount = 0;

  for (let j = 0; j < words.length; j++) {
    if (words[j] === prefix) {
      tempCount++;
    }
  }

  prefixCount += tempCount;

  return Recursive(words, s, i + 1, prefixCount);
}

console.log(Recursive(words, s));

// let prefixCount = 0;
// let prefixWords = [];
// let strWords = [];

// for (let i = 0; i < words.length; i++) {
//   let tempCount = 0;
//   let str = s.slice(0, i + 1);

//   for (let j = i; j < words.length; j++) {
//     if (str === words[j]) {
//       console.log(words[j]);

//       tempCount++;
//       console.log();
//     }
//   }

//   if (!prefixWords.includes(str) && !strWords.includes(str)) {
//     strWords.push(str);
//     prefixCount += tempCount;
//   }
// }

// console.log(prefixCount);
