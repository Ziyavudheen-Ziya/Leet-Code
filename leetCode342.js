


function powerOfFour(n){
 
    if(n<=0){

        return false
    }

    if(n==1){
        return true
    }

    if(n%4==0){

        return powerOfFour(n/4)
    }


   return false

}

let n = 1
console.log(powerOfFour(n));
