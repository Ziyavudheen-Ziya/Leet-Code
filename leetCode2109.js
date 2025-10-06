let s = "LeetcodeHelpsMeLearn",
  spaces = [8, 13, 15];

// for (let i = spaces.length - 1; i >= 0; i--) {
//   let index = spaces[i];
//   let str = " ";
//   s = s.slice(0, index) + str + s.slice(index);
// }

// console.log(s);


let j = 0
let res = []
for(let i=0;i<s.length;i++){

   if(j<s.length && i===spaces[j]){

       res.push(" ")
       res.push(s[i])
      j++;
   }else{
    res.push(s[i])
   }
}

console.log(res.join(''));
