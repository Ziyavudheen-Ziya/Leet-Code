let nums = [7,1,5,4,3,4,6,0,9,5,8,2]

let obj = {}
for(let i=0;i<nums.length;i++){
 
     obj[nums[i]] = (obj[nums[i]]||0)+1

}

let arr = []

for(let key in obj){

     if(obj[key]>=2){

          arr.push(Number(key))
     }
}

console.log(arr);
