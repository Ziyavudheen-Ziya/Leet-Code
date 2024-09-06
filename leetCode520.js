let word = "FlaG"





let i=0

if(word === word.toUpperCase() || word === word.toLowerCase()|| word[0]==/[A-Z]/ ){

    return true
  
    
}else if(word[0] === word[0].toUpperCase() && word.slice(1) === word.slice(1).toLowerCase()){

    return true
} else{
    return false
    
    
}

