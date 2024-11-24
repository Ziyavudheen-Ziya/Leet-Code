

function pivotFind(arr){


let totalSum = arr.reduce((acc,num)=>acc+num,0)
let leftsum = 0



for(let i=0;i<arr.length;i++){


let rightSum = totalSum-leftsum-arr[i]


if(leftsum===rightSum){
    return i
}

leftsum+=arr[i]

  

    
}
return -1  

}


let  nums = [1,7,3,6,5,6]
console.log(  pivotFind(nums));
