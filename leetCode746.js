let cost =[10,15,20]
let arr = new Array(cost.length)
arr[0] = cost[0]
arr[1] = cost[1]
for(let i=2;i<cost.length;i++){
arr[i] = cost[i]+Math.min(arr[i-1],arr[i-2])
}
let  rs = Math.min(arr[arr.length-1],arr[arr.length-2])
console.log(rs);








