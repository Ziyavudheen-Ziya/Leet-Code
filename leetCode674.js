let  nums = [1,3,5,4,7]
let currentLength = 1
let c =1;


for(let i=1;i<nums.length;i++){

      if(nums[i]>nums[i-1]){

         currentLength ++;
      }else{

        // c = Math.max(c, currentLength);
    currentLength = 1;
      }

      c = Math.max(c, currentLength);
}
console.log(c);
