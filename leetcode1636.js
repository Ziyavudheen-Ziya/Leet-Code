nums = [1,1,2,2,2,3]
let fre = {}
let arr = []
for(i=0;i<nums.length;i++){
     if(!fre[nums[i]]){
          fre[nums[i]]=0
     }
      fre[nums[i]]++;
}

let rs = nums.sort((a,b)=>fre[a]===fre[b]?b-a:fre[a]-fre[b])

console.log(rs);
