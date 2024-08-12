let left = 6,
  right = 10;
let arr = [];

let c = 0;
let prime = 0;

for (i = left; i <= right; i++) {
  let binary = i.toString(2);
  let nums = binary.split("");

  let countOnes = nums.filter((num) => num == "1").length;
  c = countOnes;

  arr.push(c);
}


for (i = 0; i < arr.length; i++) {
  let num = arr[i];
  let isPrime = true;

  if (num < 2) {
    isPrime = false;
  } else {
    for (let j = 2; j < num; j++) {
      if (num % j == 0) {
        isPrime = false;
        break;
      }
    }
  }

  if (isPrime) {
    prime++;
  }
}
console.log(prime);
