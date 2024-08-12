let haystack = "sadbutsad";
let needle = "sad";

let arr = haystack.split("");
let need = needle.split("");

let value = -1;
for (let i = 0; i <= arr.length - need.length; i++) {
  let match = true;

  for (j = 0; j < need.length; j++) {
    if (arr[i + j] != need[j]) {
      match = false;
      break;
    }
  }
  if (match) {
    value = i;
    break;
  }
}

console.log(value);
