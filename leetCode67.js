
let a = "11", b = "1"

let aDeciimal = BigInt("0b"+ a);
let bDecimal = BigInt("0b"+ b);
let sum = aDeciimal + bDecimal;

console.log(sum.toString(2));

console.log(sum);
