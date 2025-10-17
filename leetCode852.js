let arr = [0, 2, 1, 0];

// let peakIndex = Math.max(...arr);

// let peakREs = 0;
// console.log(peakIndex);

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === peakIndex) {
//     peakREs = i;
//     break;
//   }
// }

// console.log(peakREs);

// let peakIndex = arr.reduce(
//   (accu, curr, index) => {
//     if (curr > accu.largest) {
//       accu.largest = curr;
//       accu.indexValue = index;
//     }
//     return accu;
//   },
//   { largest: 0, indexValue: 0 }
// );

// console.log(peakIndex.indexValue);

let i = 0;
let j = arr.length - 1;

while (i < j) {
  let mIndex = i + Math.floor((j - i) / 2);

console.log(mIndex);


  if (arr[mIndex] < arr[mIndex + 1]) {
    i = mIndex + 1;
  } else {
    j = mIndex;
  }

  // i++;
  // j--;
}

// console.log(i);
// console.log(j);
