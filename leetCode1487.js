let names = ["gta","gta(1)","gta","avalon"]
let nameCount = {}


for(let i=0;i<names.length;i++){

  
    let originalName = names[i]


    if(nameCount[originalName]){

         let count = nameCount[originalName]
          let newName = `${originalName}(${count})`


          while(nameCount[newName]){
            count++;
            newName = `${originalName}(${count})`
          }

          names[i] = newName
          nameCount[newName] = 1
          nameCount[originalName]++;

    }else{

        nameCount[originalName] = 1;
    }

    


}

console.log(names);

