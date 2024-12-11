let arr = [3,2,19,55,12]


let l = 0
let sl = 0
let tl = 0

for(let i=0;i<arr.length;i++){

    if(l<arr[i]){
        sl = l
        l = arr[i]

    }else if(sl<l && sl<arr[i]){
        
        tl = sl
        sl = arr[i]
    }else if(tl<sl && tl<arr[i]){

         tl= arr[i]
    }
}

console.log(tl);
