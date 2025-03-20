let arr = ["a","b","a"]
,
  k = 3;

let obj = {};

for (let i = 0; i < arr.length; i++) {
  obj[arr[i]] = (obj[arr[i]] || 0) + 1;
}

let distingArray = []

for(let key in obj){

    if(obj[key]===1){
        distingArray.push(key)
    }
}

console.log(distingArray.length<k?"":distingArray[k-1]);

