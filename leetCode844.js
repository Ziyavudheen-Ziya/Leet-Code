
let s = "ab#c", t = "ad#c"
function stack(str){
    const stack = []

    for(let char of str){

         if(char === '#'){

             stack.pop();
         }else{

            stack.push(char);
            
         }
    }
    return stack.join("")
}


function checkingBackSpace(s,t){

    const checkedS = stack(s)
    const checkedT = stack(t)

   return checkedS===checkedT
     
}

console.log(checkingBackSpace(s,t));

