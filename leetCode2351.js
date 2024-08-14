
s = "abccbaacz"

s.split("")

let f ={}


  for(i=0;i<s.length;i++){

      f[s[i]]=0
  }

  for(i=0;i<s.length;i++){

       f[s[i]]++;

       if(f[s[i]]==2){

           console.log(s[i]);
           break;
           
       }
  }
