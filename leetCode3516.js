let x = 1,
  y = 5,
  z = 3;

let person1 = Math.abs(x - z);
let person2 = Math.abs(y - z);

if (person1 < person2) {
  console.log(1);
} else if (person2 < person1) {
  console.log(2);
} else {
  console.log(0);
}
