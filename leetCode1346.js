let arr = [10, 2, 5, 3];
let found = false;

for (i = 0; i < arr.length; i++) {
  for (j = 0; j < arr.length; j++) {
    if (i != j && arr[i] === 2 * arr[j]) {
      found = true;
      break;
    }
  }
}

console.log(found);


