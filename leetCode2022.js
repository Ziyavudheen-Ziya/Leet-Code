let original = [1,2,3,4], m = 2, n = 2

let res = [];
let i = 0;
while (i < original.length) {
  
    res.push(original.splice(i,i+n))
}

console.log(res);
