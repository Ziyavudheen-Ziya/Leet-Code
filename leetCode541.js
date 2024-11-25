let s = "abcdefg".split("");
let k =2
let result = []

while(s.length>0){

  let reversePart = s.splice(0,k).reverse().join('')

  result.push(reversePart)

  let remainigPart = s.splice(0,k).join('')
    result.push(remainigPart)

    
  
}



console.log(result.join(''));
