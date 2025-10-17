let arr = [0, 10, 5, 2];

let peakIndex = Math.max(...arr);

let peakREs = 0;
console.log(peakIndex);

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === peakIndex) {
    peakREs = i;
    break;
  }
}

console.log(peakREs);
