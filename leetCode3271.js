let s =
"ant"
  k = 1;

let i = 0;

let alp = {
  a: 0,
  b: 1,
  c: 2,
  d: 3,
  e: 4,
  f: 5,
  g: 6,
  h: 7,
  i: 8,
  j: 9,
  k: 10,
  l: 11,
  m: 12,
  n: 13,
  o: 14,
  p: 15,
  q: 16,
  r: 17,
  s: 18,
  t: 19,
  u: 20,
  v: 21,
  w: 22,
  x: 23,
  y: 24,
  z: 25,
};

let result = [];

while (i < s.length) {
  let sub = s.substring(i, i+k).split("");
  let sum = 0;
  for (let j = 0; j < sub.length; j++) {
    if (Object.keys(alp).includes(sub[j])) {
      sub[j] = alp[sub[j]];
      sum += sub[j];
    }
  }

  let value = sum % 26;
  console.log(value);

  let key = Object.keys(alp).find((e) => alp[e] === value);
  result.push(key);

  i += k;

}

console.log(result.join(""));
