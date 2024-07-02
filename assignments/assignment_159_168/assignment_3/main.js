/*
    * Assignment [3]: =>> Done
*/

let date = new Date();
console.log(date);

// last day in past month
date.setDate(0);
console.log(date);

let months = ["Hanuary", "February", "March", "April", "Mai", "June", "July", "August", "September", "October", "November", "December"];
console.log(`previous month is ${months[date.getMonth()]} and last day is ${date.getDate()}`);