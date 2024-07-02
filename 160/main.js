/*
    * get [date and time] methods:
        [1] getTime();
        [2] getDate();      =>> day of the month    [1-31]  =>> positive or negative
        [3] getFullYear();
        [4] getMonth();     =>> [0-11] [0 = January]
        [5] getDay();       =>> day of the week     [0-6]  =>> [0 = sunday]

        [6] getHours();
        [7] getMinutes();
        [8] getSeconds();

*/

// my birthday
let curDate = new Date;             // two are the same
// let curDate = new Date();        // two are the same
console.log(curDate);
console.log(`${"#".repeat(20)}\n\n`);

let koreshBirthday = new Date("Nov 28 98");         // [1] first 3 letters of the month =>> 6 are the same
console.log(koreshBirthday);
koreshBirthday = new Date("Nov, 28 98");            // [2] first 3 letters of the month =>> 6 are the same
console.log(koreshBirthday);
koreshBirthday = new Date("Nov, 28, 98");           // [3] first 3 letters of the month =>> 6 are the same
console.log(koreshBirthday);
koreshBirthday = new Date("Nov-28-98");             // [4] first 3 letters of the month =>> 6 are the same
console.log(koreshBirthday);
koreshBirthday = new Date("Nov/28/98");             // [5] first 3 letters of the month =>> 6 are the same
console.log( koreshBirthday );
koreshBirthday = new Date("Nov@28@98");             // [6] first 3 letters of the month =>> 6 are the same
console.log( koreshBirthday );

// koreshBirthday = new Date("Nov - 28 - 98");      // result = invalid date
// console.log(koreshBirthday);
console.log(`${"#".repeat(20)}\n\n`);

let koreshYearsOld = curDate - koreshBirthday;      // result = time in milliseconds
console.log( koreshYearsOld );                      // result = time in milliseconds
console.log( koreshYearsOld / (1000 * 60 * 60 * 24 * 365) );    // parentheses is a must
console.log( koreshYearsOld / 1000 / 60 / 60 / 24 / 365);
console.log("#".repeat(20));    // [repeat] with [string] only



// date methods
console.log(curDate);
console.log("\n");
console.log( curDate.getTime() );       // time in milliseconds
console.log( curDate.getDate() );       // [2] day of the month [1-31]  =>> positive or negative
console.log( curDate.getFullYear() );   // used in copyright  =>> dynamic not static
console.log( curDate.getMonth() );      // [0-11] [0 = January]
console.log( curDate.getDay() );        // [1] day of the week  =>> [0-6] [0 = sunday]
console.log("\n");

console.log( curDate.getHours() );
console.log( curDate.getMinutes() );
console.log( curDate.getSeconds() );
console.log("#".repeat(20));

// EX:
let array1 = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
console.log( array1[curDate.getMonth()] );

