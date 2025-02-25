let mat = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
let sum = 0;
let sum2 = 0;
for (let i = 0; i < mat.length; i++) {
  let num = mat[i];
  for (let j = 0; j < num.length; j++) {
    if (i == j) {
      sum += num[j];
    } else if (i + j === num.length - 1) {
      sum2 += num[j];
    }
  }
}

console.log(sum);
console.log(sum2);

// function Mat(mat){

//     let sum = 0
//     for(let i=0;i<mat.length;i++){

//         if(Array.isArray(mat[i])){

//                Mat(mat[i],sum)
//         }else{

//             if(i+1==mat[i]){

//                 sum+=mat[i]
//             }

//         }
//     }

//     return sum
// }

// console.log(Mat(mat));
