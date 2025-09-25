let s = "12345678910#11#12#13#14#15#16#17#18#19#20#21#22#23#24#25#26#";

let alp = {
  a: "1",
  b: "2",
  c: "3",
  d: "4",
  e: "5",
  f: "6",
  g: "7",
  h: "8",
  i: "9",
  j: "10#",
  k: "11#",
  l: "12#",
  m: "13#",
  n: "14#",
  o: "15#",
  p: "16#",
  q: "17#",
  r: "18#",
  s: "19#",
  t: "20#",
  u: "21#",
  v: "22#",
  w: "23#",
  x: "24#",
  y: "25#",
  z: "26#",
};

let res = [];

for (let i = 0; i < s.length; i++) {
  if (s[i] == "#") {
    res.pop();
    res.pop();
    let strVal = s.slice(i - 2, i + 1);

    let key = Object.keys(alp).find((v) => alp[v] === strVal);

    if (key) {
      res.push(key);
    }
  } else {
    let key = Object.keys(alp).find((v) => alp[v] === s[i]);

    res.push(key);
  }
}

console.log(res);
