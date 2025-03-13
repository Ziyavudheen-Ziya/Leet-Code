let s = "dart",
  k = 3;

function cyclicRotation(s, k) {
  k = k % s.length;
  return s.slice(k) + s.slice(0, k);
}

console.log(cyclicRotation(s, k));
