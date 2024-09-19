let ranges =[[1,10],[10,20]],
  left = 21, right = 21

let arr = [];
let arr1 = [];
let a = []
let j = 0;
let k = 0;
for (let i = left; i <= right; i++) {
  arr.push(i);
}

for (let i = 0; i < ranges.length; i++) {
  for (let j = 0; j < ranges[i].length; j++) {
    arr1.push(ranges[i][j]);
  }
}


for(let i=0;i<arr1.length;i++){

     if(arr.includes(arr1[i])){

        a.push(arr1[i])
     }
}

if(a.length===arr.length){

    console.log(true);
    
}else{
    console.log(false);
    
}

