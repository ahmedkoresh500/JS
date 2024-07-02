/*
    * formatting [date and time]:
        [1] new Date(timestamp);
        [2] new Date(date string);                                                =>> [1-12] [1 = January]
        [3] new Date(Numeric values);  =>> [8555684]  [1982, 12, 31, 23, 59, 59]  =>> [0-11] [0 = January]

    * format:
        [1] "Oct 25 1982"           =>> first 3 letters of the month         =>> [1-12] [1 = January]
        [2] "Oct, 25 1982"          =>> first 3 letters of the month         =>> [1-12] [1 = January]
        [3] "Nov, 28, 1998"         =>> first 3 letters of the month         =>> [1-12] [1 = January]
        [4] "Oct-25-1982"           =>> first 3 letters of the month         =>> [1-12] [1 = January]
        [5] "Oct/25/1982"           =>> first 3 letters of the month         =>> [1-12] [1 = January]
        [6] "Oct@25@1982"           =>> first 3 letters of the month         =>> [1-12] [1 = January]


        [2] "12/25/1982"            =>> consecutive = respectively      =>> [1-12] [1= January]
        [3] "1982-12-25"            =>> ISO  =>> international standard =>> [1-12] [1= January]
        [4] "1982 12"                                                   =>> [1-12] [1= January]
        [5] "1982"                                                      =>> [1-12] [1= January]
        [6] "82"                                                        =>> [1-12] [1= January]

        [7] 2023, 0, 31, 23, 0, 59                                      =>> [0-11] [0 = January]
        [8] 2023, 11, 31                                                =>> [0-11] [0 = January]

        [9] "2023-12-31T23:00:59Z"                                      =>> [1-12] [1 = January]

    * Date.parse("date string")             // convert [date string] to milliseconds
*/

// [1]:
let date = new Date();
console.log(date);
console.log( `${"#".repeat(20)}\n\n` );

// [2]
console.log( new Date().getTime() );        // time in milliseconds     =>> all are the same  =>> parentheses is a must
console.log( date.getTime() );              // time in milliseconds     =>> all are the same
console.log( Date.now() );                  // time in milliseconds     =>> all are the same  =>> static method
console.log( Date.parse(new Date) );        // time in milliseconds     =>> all are the same
console.log( Date.parse(new Date() ) );     // time in milliseconds     =>> all are the same
console.log(`${"#".repeat(20)}\n\n`);

// [3]:
console.log( Date.parse("nov, 28 98") );    // convert [date string] to milliseconds
console.log( `${"#".repeat(20)}\n\n` );


// [4]:
date = new Date("Nov 28 98");               // [1] first 3 letters of the month  =>> 6 are the same
console.log(date);

date = new Date("Nov, 28 98");              // [2] first 3 letters of the month  =>> 6 are the same
console.log(date);

date = new Date("Nov, 28, 1998");           // [3] first 3 letters of the month  =>> 6 are the same
console.log(date);

date = new Date("Nov-28-1998");             // [4] first 3 letters of the month  =>> 6 are the same
console.log(date);

date = new Date("Nov/28/1998");             // [5] first 3 letters of the month  =>> 6 are the same
console.log(date);

date = new Date("Nov@28@1998");             // [6] first 3 letters of the month  =>> 6 are the same
console.log(date);

console.log(`${"#".repeat(20)} \n `);



// [5]:
let date1 = new Date(0);        // no milliseconds passed since 1970
console.log(date1);
console.log( date.setTime(0) ); // no milliseconds passed since 1970
console.log(`${"#".repeat(30)}\n\n`);


// [6]:
console.log( Date.parse("Oct, 25 82") );    // result = time in milliseconds
let date2 = new Date(404344800000);
console.log(date2);                         // result = date
console.log(`${"#".repeat(30)}\n\n`);


// [7]:
let date3;

date3 = new Date("1 31 1982");          // [1] [month-day-year]     [1-12] [1= January]
console.log(date3);

date3 = new Date("12, 31 1982");        // [1] [month-day-year]     [1-12] [1= January]
console.log(date3);

date3 = new Date("12, 31, 1982");       // [1] [month-day-year]     [1-12] [1= January]
console.log(date3);


date3 = new Date("12-31-1982");         // [2] [month-day-year]     [1-12] [1= January]
console.log(date3);                     // [month = 0]              =>> result = invalid date

date3 = new Date("10 - 31 - 1982");     // [3] [month-day-year]     =>> result = invalid date
console.log(date3);


date3 = new Date("10/25/1982");         // [5] [month-day-year]     [1-12] [1= January]
console.log(date3);

date3 = new Date("10 / 25 / 1982");     // [6] [month-day-year]     [1-12] [1= January]
console.log(date3);


date3 = new Date("10@25@1982");         // [7] [month-day-year]     [1-12] [1= January]
console.log(date3);

date3 = new Date("10 @ 25 @ 1982");     // [8] [month-day-year]     [1-12] [1= January]
console.log(date3);

console.log(`${"#".repeat(20)} \n `);




// [8]:
let date4;

date4 = new Date("1982 1 31");        // [1-12] [1= January]    [1-31]
console.log(date4);

date4 = new Date("1982, 1 31");        // [1-12] [1= January]   [1-31]
console.log(date4);

date4 = new Date("1982, 1, 31");       // [1-12] [1= January]   [1-31]
console.log(date4);



date4 = new Date("1982-12-25");         // [1-12] [1= January]
console.log(date4);

date4 = new Date("1982 - 12 - 25");     // [1-12] [1= January]      =>> result = invalid date
console.log(date4);



date4 = new Date("1982/12/25");         // [1-12] [1= January]
console.log(date4);

date4 = new Date("1982 / 12 / 25");     // [1-12] [1= January]
console.log(date4);

date4 = new Date("1982@12@25");         // [1-12] [1= January]
console.log(date4);

date4 = new Date("1982 @ 12 @ 25");     // [1-12] [1= January]
console.log(date4);
console.log(`${"#".repeat(30)}\n `);



// [9]:
date4 = new Date("1982 12");            // [1-12] [1= January]  [= 1]  =>> default day
console.log(date4);


date4 = new Date("1982");               // [= 1]  =>> default month      [= 1]  =>> default day
console.log(date4);

date4 = new Date("82");                 // [= 1]  =>> default month      [= 1]  =>> default day
console.log(date4);
console.log(`${"#".repeat(30)}\n\n`);



// [10]:
let date5;

date5= new Date("1982, 9, 25, 23, 59, 0");      // result = invalid data  =>> because of ["]
console.log(date5);

date5= new Date(2023, 0, 1, 23, 0, 59);         // [0-11] [0 = January]
console.log(date5);

date5= new Date(1982, 11, 31);                  // [0-11] [0 = January]
console.log(date5);                             // [= 0]  =>> default hour  =>> default minute  =>> default second
console.log(`${"#".repeat(30)}\n\n`);



// [11]:
// [t], [z]  =>> not sensitive to upper and lower cases
// [specific syntax]  =>> required - mandatory
let date6;
date6 = new Date("2023-12-31T11:10:00Z");       // [Z = grenetch Time Zone]     =>> [2 hours difference]
console.log(date6);                             // [1] [result = grenetch time zone]

date6 = new Date("2023-12-31T11:10:00");
console.log(date6);                             // [1] [result = my Time Zone]

