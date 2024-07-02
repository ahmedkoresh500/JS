/*
    * set [date and time] methods:
        [1] setTime(milliseconds);
        [2] setDate(day of the month);              =>> [1-31]  =>> [positive or negative]

        [3] setFullYear(year, month, day);
            =>> year    =>> required - mandatory
            =>> month   =>> optional                =>> [0-11] [0 = January]
            =>> day     =>> optional                =>> [1-31]  =>> [positive or negative]

        [4] setMonth(month, day);
            =>> month   =>> required - mandatory    =>> [0-11] [0 = January]
            =>> day     =>> optional                =>> [1-31]  =>> [positive or negative]



        [5] setHours(hours, minutes, seconds, ms);
            =>> hours   =>> required - mandatory    =>> [0-23]
            =>> minutes =>> optional                =>> [0-59]
            =>> seconds =>> optional                =>> [0-59]
            =>> ms      =>> optional                =>> [0-999]

        [6] setMinutes(minutes, seconds, ms);
            =>> minutes =>> required - mandatory    =>> [0-59]
            =>> seconds =>> optional                =>> [0-59]
            =>> ms      =>> optional                =>> [0-999]

        [7] setSeconds(seconds, ms);
            =>> seconds =>> required - mandatory    =>> [0-59]
            =>> ms      =>> optional                =>> [0-999]
*/

let curDate = new Date();
console.log(curDate);
console.log(`${"#".repeat(20)} \n\n`);    // [repeat] with [string] only


// [1] [setTime();]:
curDate.setTime(0);                         // no milliseconds passed since 1970
console.log(curDate);

curDate.setTime(10000);                     // 10,000 milliseconds passed since 1970
console.log(curDate);

curDate.setTime(5000);                      // 5,000 milliseconds passed since 1970
console.log(curDate);
console.log(`${"#".repeat(20)}\n\n`);



// [2] [setDate()]:
curDate = new Date();                   // result = current date
curDate.setDate(13);
console.log(curDate);

curDate.setDate(35);                    // next month
console.log(curDate);

curDate.setDate(25);
console.log(curDate);

curDate.setDate(0);                     // 0 = last day in past month
console.log(curDate);


curDate.setDate(7);
console.log(curDate);
console.log(`${"#".repeat(20)}\n\n`);



// [3] [setFullYear(year, month, day)]:
curDate.setFullYear(2020);
console.log(curDate);

curDate.setFullYear(2022, 11, 19);       // [0-11] [0 = January]  =>>  [1-31]
console.log(curDate);

curDate.setFullYear(2022, 17);
console.log(curDate);
console.log(`${"#".repeat(20)}\n\n`);



// [4] [setMonth(month, day)]:
curDate.setMonth(0, 19);                 // [0-11] [0 = January]  =>>  [1-31] 
console.log(curDate);

curDate.setMonth(13, 19);                // [0-11] [0 = January]  =>> [1-31]
console.log(curDate);
console.log("\n");

// [5] [setHours(hours, minutes, seconds, ms)]:
curDate.setHours(22, 20, 20, 20);
console.log(curDate);

