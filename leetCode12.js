let num = 749;

let romaInteger = [
  [1000, "M"],
  [900, "CM"],
  [500, "D"],
  [400, "CD"],
  [100, "C"],
  [90, "XC"],
  [50, "L"],
  [40, "XL"],
  [10, "X"],
  [9, "IX"],
  [5, "V"],
  [4, "IV"],
  [1, "I"],
];

let res = "";

for (const [val, sym] of romaInteger) {
  while (num >= val) {
    res += sym;
    num -= val;
  }
  console.log(num);
}

console.log(res);
