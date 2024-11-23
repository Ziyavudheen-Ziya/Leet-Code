let str1 = "ABABAB", str2 = "ABAB"

let i =0
let j =0
let res = ''
let substring  = ''
let lengthstr = str1.length - str2.length

while(i<str1.length && j<str2.length){
    
    substring = str1.substring(0,lengthstr)
     
 if(str1 === str1.repeat(str1.length/substring) && str2 === str2.repeat(str2.length/substring)){
      
    res += substring
     
 }

    i++;
    j++;
}

 console.log(res)