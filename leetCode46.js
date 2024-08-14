let nums = [1, 2, 3];

let arr = [];
for (let i = 0; i < nums.length; i++) {
  for (let j = 0; j < nums.length; j++) {
    if (i === j) continue;
      

    if(nums[0]){

        arr.push([nums[i],nums[j],nums[j+1]])
    }else if(nums[nums.length-1] ){

          arr.push(nums[i],nums[j-1],nums[j-2])
    }
       
  }
}
console.log(arr);
