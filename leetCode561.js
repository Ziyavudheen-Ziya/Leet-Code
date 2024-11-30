let nums = [1,4,3,2].sort((a,b)=>a-b)

let sum = 0
for(let i=0;i<nums.length;i+=2){

    let val = nums[i]
    let val2 = nums[i+1]

    let minVal = Math.min(val,val2)
    
    sum+=minVal
}

console.log(sum);
