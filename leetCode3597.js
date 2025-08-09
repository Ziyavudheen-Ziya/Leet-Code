let s = "abbccccd"


let seenSeg = new Set()
let segment = []
let current = ""

for(let i=0;i<s.length;i++ ){

  current+=s[i]
  
  if(!seenSeg.has(current)){

      segment.push(current)
      seenSeg.add(current)
      current = ""
  }
}

console.log(segment);
