let fruits = [3, 6, 1],
  baskets = [6, 4, 7];

let notCount = 0;
let used = new Set();
for (let i = 0; i < fruits.length; i++) {
  let stored = false;

  for (let j = 0; j < baskets.length; j++) {
    if (!used.has(j) && fruits[i] <= baskets[j]) {
      stored = true;
      used.add(j);
      break;
    }
  }

  if (!stored) {
    notCount++;
  }
}
console.log(notCount);
