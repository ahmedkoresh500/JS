/*
    * two differences between [substring()] & [slice()]:

        [1] [.substring()]:
            1- always start from left =>> even negative value
            2- when begin with the end =>> swap it with the start

        [2] [.slice()]:
            1- start from left or right
            2- when begin with the end =>> can't swap with the start    =>> result = empty string


    * string methods:

    [1] variable.substring(start-index, end-index)        =>> extract string from the main string

        * [start-index]     =>> optional
        * [end-index]       =>> optional

        [start-index]   =>> included
        [end-index]     =>> excluded
        [end-index-1]   =>> included

        =>> always start from left  =>> even negative value
        =>> first letter from left = index 0
        =>> can't start from right

        * [start-index] > [available indexes]       =>> result = empty string


    [2] [variable.slice(start-index, end-index)]    =>> extract string from the main string

        * [start-index] =>> optional
        * [end-index]   =>> optional

        [start-index]   =>> included
        [end-index]     =>> excluded
        [end-index-1]   =>> included

        =>> start from left or right                // =>> first difference between [substring()] & [slice()]
        =>> first letter from left = index 0
        =>> first letter from right = index -1

        * when begin with the end   =>> can't swap with the start   =>> result = empty string
        * [start-index] > [available indexes]                       =>> result = empty string


    [3] variable.substr(start-index, length)        =>> extract string from the main string

        * [start-index]                             =>> optional
        * [length]                                  =>> optional

        * [length]  =>>  num of letters to extract

        =>> start from left or right
        =>> first letter from left = index 0
        =>> first letter from right = index -1
        
        * [start-index] > [available indexes]       =>> result = empty string

        * what if length is negative    =>> ????????????????????????????????????????????????????????????????????




    [4] variable.includes(value, start-index)     =>> to search value in a string         // ES6

        * value         =>> mandatory               =>> not written =>> result = false
        * start-index   =>> optional                =>> default = index 0

        * value sensitive to upper and lower cases


    [5] variable.startsWith(value, start-index)     =>> if a string starts with this value  // ES6
                                                    =>> [W] of [With] must be uppercase

        * value         =>> mandatory               =>> not written =>> result = false
        * start-index   =>> optional                =>> default = index 0

        * value sensitive to upper and lower cases


    [6] variable.endsWith(value, length)            =>> if a string ends with this value     // ES6
                                                    =>> [W] of [With] must be uppercase

        * value         =>> mandatory               =>> not written =>> result = false
        * length        =>> optional                =>> default = the whole string
        
        * value sensitive to upper and lower cases
        * length  =>> number of letters to search in

*/

let a = "Elzero Web Schoolz";        // [z = 2] [o = 5]

// [1] variable.substring(start-index , end-index)
console.log( a.substring() );                           // result = the whole string
console.log( a.substring(2) );                          // result =>> from index 2 till the end
console.log( a.substring(2, 5) );                       // [end-index] = 5  =>> excluded
console.log( a.substring(5, 2) );                       // when begin with the end =>> swap it with the start
console.log( a.substring(a.length) + "empty string" );  // [start-index] > [available indexes]  =>> result = empty string

console.log("\n");

console.log( a.substring(-10) );                      // can't start from right like slice =>> start from index 0
console.log( a.substring(-10, 6) );

console.log("\n");

console.log( a.slice(5, 2) );                           // when begin with the end  =>> can't swap with the start =>> result = empty string
                                                        // =>> second difference between [substring()] & [slice()]
console.log( a.slice(a.length) );                       // [start-index] > [available-indexes]  =>> result = empty string

// small challenge
// use length to get last character
console.log( a.substring( a.length - 1 ) );
console.log( a.slice( a.length -1 ) );
console.log( a.substr( a.length -1 ) );


console.log("\n");


// [2] variable.substr(start-index, length)
// [lenght] =>> number of letters to extract
// ["Elzero Web Schools"]                   // [S = index -7] ["o" of (elzero) = index 6]
console.log( a.substr() );                  // result = the whole string
console.log( a.substr(0, 6) );              // result = [Elzero]
console.log( a.substr(-7) );
console.log( a.substr(-7, 6) );
console.log( a.substr(a.length) + "empty string" );    // [start-index] > [available indexes]  =>> result = empty string



console.log("\n");


// [3] variable.includes(value, start-index)
// [ "Elzero Web Schools" ]                 // [W = index 7]    [S = index 7]
console.log( a.includes() );                // not written =>> result = false
console.log( a.includes("", 7) );           // result = true                =>> this value [""] + any start-index  =>> [result= true]

console.log( a.includes("web", 7) );        // result = false
console.log( a.includes("Web", 7) );        // result = true    =>> value sensitive to upper and lower cases
console.log( a.includes("Web", -7) );       // result = true    =>> always start from left =>> even negative value
                                                                // =>> first letter from left = index 0
                                                                // =>> can't start from right

console.log("\n");

// [4] variable.startsWith(value, start-index)
// ["Elzero Web Schoolz"]                   // [all = 17 indexes] [length = 18] [Z = index 2]
console.log( a.startsWith() );              // not written =>> result = false
console.log( a.startsWith("e") );           // result = false
console.log( a.startsWith("E") );           // result = true    =>> value sensitive to upper and lower cases
console.log( a.startsWith("Z", 2) );        // result = false
console.log( a.startsWith("zero", 2) );     // result = true    =>> value sensitive to upper and lower cases
console.log( a.startsWith("Web", -17) );    // negative value   =>> result = always false


console.log("\n");


// [5] variable.endsWith(value, length)     // ES6
// ["Elzero Web Shcoolz"]                   // [ [length 6] = letter [o] of "Elzero" ]
console.log( a.endsWith() );                // not written =>> result = false
console.log( a.endsWith("o") );             // result = false
console.log( a.endsWith("z") );             // result = true
console.log( a.endsWith("schoolz") );       // result = false
console.log( a.endsWith("Schoolz") );       // result = true    =>> value sensitive to upper and lower cases
console.log( a.endsWith("Schoolz", -15) );  // negative value   => result = always false

console.log("\n");

// [ "Elzero Web Schoolz" ]                 // [all = 17 indexes] [length = 18]
console.log( a.endsWith("o") );             // result = false
console.log( a.endsWith("O", 6 ) );         // result = false       =>> [lenght] = number of letters to search in
console.log( a.endsWith("o", 6) );          // result = true        =>> value sensitive to upper and lower cases
console.log( a.endsWith("zero", 6) );       // result = true        =>> if [length = 7] =>> [result = false]


