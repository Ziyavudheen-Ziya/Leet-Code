let order = "bcafg", s = "abcd"

let str = "";

let resstr = "";
for (let i = 0; i < order.length; i++) {
  for (let j = 0; j < s.length; j++) {
    if (s[j] === order[i]) {
      str += order[i];
    }
  }
}

for (let i = 0; i < s.length; i++) {
  if (!order.includes(s[i])) {
    resstr += s[i];
  }
}

let res = str + resstr;
console.log(res);


