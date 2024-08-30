let strs = ["flower", "flow", "flight"];

let prefix = strs[0];

console.log(prefix);

for (let i = 1; i < strs.length; i++) {
  while (!strs[i].startsWith(prefix)) {
    prefix = prefix.substring(0, prefix.length - 1);

    if (prefix == "") return "";
  }
}

console.log(prefix);
