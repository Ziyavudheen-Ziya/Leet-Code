let arr = [2, 1];

if (arr.length < 3) {
  console.log(false);
} else {
  let i = 0;
  let n = arr.length;

  while (i + 1 < n && arr[i] < arr[i + 1]) {
    i++;
  }

    if(i==0 || i===n-1)console.log(false);

  while (i + 1 < n && arr[i] > arr[i + 1]) {
    i++;
  }

  console.log(i === n - 1);
}
