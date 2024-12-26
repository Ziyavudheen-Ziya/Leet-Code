let s = "ssssss".split("");

let res = [];

let sub = [];

let c = 0;
for (let i = 0; i < s.length; i++) {
  if (!sub.includes(s[i])) {
    sub.push(s[i]);
  } else {
    res.push(sub.join(""));
    sub = [s[i]];
  }
}

if (sub.length > 0) {
  res.push(sub.join(""));
}

console.log(res.length);
