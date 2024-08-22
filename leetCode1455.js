let sentence = "this problem is an easy problem".split(" ");
let searchWord = "pro";
let index = -1;

for (i = 0; i < sentence.length; i++) {
  if (sentence[i].startsWith(searchWord)) {
    index = i + 1;

    break;
  }
}

console.log(index);
