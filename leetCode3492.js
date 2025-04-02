let n = 1,
  w = 4,
  maxWeight = 15;

let carGo = n * n;
let totalWeight = 0;
let alloWDec = 0;

for (let i = 0; i < carGo; i++) {
  if (totalWeight + w > maxWeight) break;
  totalWeight += w;

  alloWDec++;
}

console.log(alloWDec);
