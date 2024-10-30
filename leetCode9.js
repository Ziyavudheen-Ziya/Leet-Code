let  x = 10
let str = x.toString()

let i =0
let j = str.length-1
let isPalindrome = true
while(i<=j){


    if(str[i]!==str[j]){
   
        isPalindrome = false
         
    }
    i++;
    j--;
}

console.log(isPalindrome);



