let nums = [1,1,1,1]
let c =0
for(let i=0;i<nums.length;i++){

      for(let j=i+1;j<nums.length;j++){

              if(nums[i]===nums[j]&&i<j){

                  c++;

                   
              }
      }
}

console.log(c);
