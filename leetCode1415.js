let n = 3, k = 9

function genearteString() {
  let result = [];

  let alpha = ["a", "b", "c"];
  let newSet = new Set();

  function backtrack(current) {
    if (current.length === n) {
      let str = current.join("");
      if (!newSet.has(str)) {
        newSet.add(str);
        result.push(str);
      }
      return;
    }

    for (let char of alpha) {
        if(current[current.length-1]!==char){
          current.push(char);     
           backtrack(current)
            current.pop();


        }
      

    }
  }

  backtrack([]);

  return result;
}

let r = genearteString()

if(r[k-1]==undefined){
    console.log("");
    
}else{
    console.log(r[k-1]);
    
}
console.log(r[k-1]);
