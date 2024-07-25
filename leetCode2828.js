let words = ["afqcpzsx", "icenu"];
let s = "yi".split("");
let arr = [];

for (i = 0; i < words.length; i++) {
  let str = words[i];

  for (j = 0; j < 1; j++) {
    arr += str[0];
  }
}

if (s === arr) {
  console.log(true);
} else {
  console.log(false);
}
