let  prices = [2,4,1]
let max = 0
let min = prices[0]
let iday = 0


  for(let i=1;i<prices.length;i++){

       if(prices[i]<min ){

              min = prices[i]
              iday = i
          
       }else{

         max = Math.max(max,prices[i]-min)
       }
  }

  console.log(max);
  



