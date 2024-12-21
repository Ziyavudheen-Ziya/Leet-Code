let   s = "qtfttwq"

let obj = {}

for(let i=0;i<s.length;i++){

    obj[s[i]] = (obj[s[i]]||0)+1
}

let key = Object.keys(obj)
console.log(key.length);


