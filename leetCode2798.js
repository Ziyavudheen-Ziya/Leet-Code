let hours = [0,1,2,3,4]
let target = 2
let c= 0

let res = hours.filter((value)=>{

     if(target<=value){

         c++;
     }
})

console.log(c);

