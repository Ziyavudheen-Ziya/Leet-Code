let numBottles = 9,
 numExchange = 3;
let sum = numBottles;

while (numBottles >= numExchange) {
  let newBottles = Math.floor(numBottles / numExchange);
  let reamaingBottles = numBottles % numExchange;
  sum += newBottles;

  numBottles = newBottles + reamaingBottles;
}

console.log(sum);
