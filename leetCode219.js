let  nums = [1,2,3,1,2,3], k = 2

let value = false;
let res = 0
for(i=0;i<nums.length;i++){

    for(j=i+1;j<nums.length;j++){

         if(nums[i]===nums[j] &&  Math.abs(i-j)<=k){
               
            res = Math.abs(i-j)<=k
             
              value = true
              break;
              
         }
    }

//     if(value)break
}

console.log(value);
console.log(res);

