let list1 = ["happy", "sad", "good"];
let list2 = ["sad", "happy", "good"];

let res = [];

let minSum = Infinity;
for (let i = 0; i < list1.length; i++) {
  for (let j = 0; j < list2.length; j++) {
    if (list1[i] == list2[j]) {
      let min = i + j;

      if (min < minSum) {
        res = [list1[i]];
        minSum = min;
      } else if (min === minSum) {
        res.push(list1[i]);
      }
    }
  }
}

console.log(res);
