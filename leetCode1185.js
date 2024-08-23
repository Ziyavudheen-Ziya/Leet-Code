let day = 18
let month = 7
let year = 1999
let daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

let date = new Date(year, month  -1 , day);

let r = 


console.log(date);


let weekDay = date.getDay();
console.log(weekDay);


console.log(daysOfWeek[weekDay]);
