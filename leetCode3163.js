let word = "aaaaaaaaaaaaaabb"


let subString = []

let obj = {}

for(let i=0;i<word.length;i++){

     let count = 0

     for(let j=0;j<word.length;j++){

        if(word[i]===word[j]){
            count++;
            if(count>=9){

                subString.push(`9${word[i]}`)
            }else{

                subString.push(`${count}${word[i]}`)
            }
        }
     }
     count = 0
}

console.log(subString);



