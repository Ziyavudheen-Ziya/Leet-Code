let nums = [3, 2, 4, 1].sort((a,b)=>a-b)

let arr = [];

arr.push([]);

for(let i=0;i<nums.length;i++){

      let currLength = arr.length


      for(let j=0;j<currLength;j++){

          let newSubSet = arr[j].concat(nums[i])

          arr.push(newSubSet)
      }
}

console.log(arr);

