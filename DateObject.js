const date=new Date();
let birthday = new Date('June 02, 2022 15:55:00')
let birthday1 = new Date('2022-06-02T03:24:00')
let birthday2 = new Date(2022, 05, 02)            // the month is 0-indexed
let birthday3 = new Date(2022, 05, 02, 14,08 , 0)

 console.log(date);
// console.log(date.getFullYear());
// console.log(date.getMonth());
// console.log(date.getDay());clear

// console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.getMilliseconds());
// console.log(date.getDate());
console.log(birthday.toDateString());
console.log(birthday1);
console.log(birthday2.toTimeString());
console.log(birthday3.toISOString());