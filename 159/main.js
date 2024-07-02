/*
    * [Date and Time] introduction:

    [1] [Date();] constructor
    [2] Date.now();     =>> static method

    * to track time  =>> we need starting point

    * [Epoch time] = [unix time] number of seconds since [January 1, 1970]
        =>> why 1970 [829 days] to [136 years]


    * search on google:
        [1] year 2038 problem in computer science
        [2] [time and date] website
        [3] [unix time] article on wikipedia
*/

let curDate1 = new Date;            // two are the same
let curDate2 = new Date();          // two are the same

console.log(curDate1);
console.log(curDate2);

console.log( curDate1.getTime() );      // time in milliseconds     =>> since 1970      =>> Lesson 162
console.log( new Date().getTime() );    // time in milliseconds     =>> since 1970      =>> Lesson 159 [parentheses is a must]
console.log( Date.now() );              // time in milliseconds     =>> since 1970      =>> Lesson 162 [no parentheses]
                                        // [1 second = 1000 milli second]
console.log("\n");


console.log( `number of years since 1970: \n${Date.now() / (1000 * 60 * 60 *  24 * 365 )} `);

