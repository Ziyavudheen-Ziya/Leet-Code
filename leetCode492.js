let area = 122122


let w = parseInt(Math.sqrt(area)) 



while(!Number.isInteger(area/w))w--
let height = area/w
console.log(height);
console.log(w);


//Without using predefined findibg square of the root to find width


// let width = 0

// for(let i=1;i<=area;i++){

//      if(i*i==area){
         
//         width = i
//      }
// }

// console.log(width);