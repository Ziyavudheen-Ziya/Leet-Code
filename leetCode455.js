let g = [1, 2, 3];
s = [1, 1];
let count = 0;

let i = 0;
let j = 0;
while (i < g.length && j < s.length) {
  if (s[j] >= g[i]) {
    count++;
    i++;
  }

  j++;
}

console.log(count);
