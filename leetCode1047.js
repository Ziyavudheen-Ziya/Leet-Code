let s = "abbaca"

let stack = []


for(let i=0;i<s.length;i++){
    
     if(stack.length && stack[stack.length-1]===s[i]){
         
          stack.pop()
     }else{
         
          stack.push(s[i])
     }
}


console.log(stack.join(''))