/*
    * string methods:

        [1] variable.indexOf(value, start-index)              =>> to search a letter or word in string from left

            =>> first letter from left = index 0
            =>> first letter from right = index -1

            =>> output  =>> found     = index of first letter of the word
                        =>> not found = [-1]

            * value         =>> mandatory               =>> not written =>> result = -1
            * start-index   =>> optional                =>> default = index 0

            * value sensitive to  =>> upper and lower cases


        [2] variable.lastIndexOf(value, start-index)          =>> to search a letter ot word in string from right

            =>> no start-index
            =>> first letter from right = index -1            =>> [result = always -1] =>> not found

            =>> output  =>> found     = index of first letter of the word
                        =>> not found = [-1]

            * value       =>> mandatory                 =>> not written =>> result = always -1
            * start-index =>> optional                  =>> no effect

                                                        =>> negative                    =>> [result = always-1] =>> not found
                                                        =>> positive    = whole string
                                                                        =>> found       = index of first letter of the word
                                                                        =>> not found   = [-1]

            * value sensitive to upper and lower cases


        * [includes()] [startsWith()] [endsWith()]  =>> value =>> mandatory     =>>  not written =>> result = false



        [3] variable.slice(start-index, end-index)     // extract string from the main string

            * [start-index]   =>> optional              // elzero said [mandatory]
            * [end-index]     =>> optional
            
            =>> start from left or right                [variable.substring(start-index, end-index)] =>> first difference
            =>> first letter from left = index 0
            =>> first letter from right = index -1

            =>> when begin with the end =>> can't swap with the start   =>> result = empty string
                                                        =>> second difference between [substring()] [slice()]

            =>> [start index] > [available indexes]     =>> result = empty string

        [4] [repeat()]  =>> with string only

        [5] variable.split(separator, limit)       =>> split string into array
            * [separator]   =>> optional
            * [limit]       =>> optional    =>> number of elements needed in the array
*/


let a = "Elzero Web School";    // [W = index 7]    [o = index 5] [o = index 15]

// [1] variable.indexOf("value, start-index")
console.log( a.indexOf() );                 // not written =>> result = -1
console.log( a.indexOf("web") );            // [1]  result = -1         =>> not found
console.log( a.indexOf("Web") );            // [2]  result = 7 found    =>> value sensitive to upper and lower cases
console.log( a.indexOf("Web", 3) );         // [3]  result = 7 found
console.log( a.indexOf("Web", 7) );         // [4]  result = 7 found
console.log( a.indexOf("Web", 8) );         // [5]  result = -1         =>> not found
// [start-index = 7] = index of first letter of the word  =>> search word included
// [start-index = 8] = index of second letter of the word =>> search word excluded

console.log("\n");

// ["Elzero Web School"]                // all = 16 indexes [ [o] of "Elzero" = [index -12] = [index = 5] ]
console.log( a.indexOf("o", -12) );     // result = 5       =>> found
console.log( a.indexOf("S", 16) );      // result = -1      =>> not found

console.log("\n");

// [2] variable.lastIndexOf("value, start-index")

// ["Elzero Web School"]              // [W = index 7] [o = index 5] [o = index 15] [S = index 11]

console.log( a.indexOf("o") );        // to search a letter or word in string from left   =>> result = [5]
console.log( a.lastIndexOf("o") );    // to search a letter or word in string from right  =>> result = [15]

console.log("\n");

console.log( a.lastIndexOf("o", -15) );     // result = always -1      =>> not found    =>> conclusion =>> no start-index
console.log( a.lastIndexOf("S", 16) );      // result = 11      =>> found               =>> conclusion =>> no start-index

console.log( a.lastIndexOf("web") );      // result = -1      =>> not found
console.log( a.lastIndexOf("Web") );      // result = 7       =>> found       => value sensitive to upper and lower cases

console.log("\n");

// [3] slice(start-index, end-index)
// [ "Elzero Web School" ]              // [W = index 7] [b = index 9] [" " = index 10]
console.log( a.slice() );               // the whole string
console.log( a.slice(7) );              // from index 7 till the end
console.log( a.slice(7, 9) );           // from left  =>> [start-index]=>>included   [end-index]=>>excluded  [end-index-1]=>>included
console.log( a.slice(7, 10) );

// [ "Elzero Web School" ]              // [S = index -6] [h = index -4]
console.log( a.slice(-6) );
console.log( a.slice(-6, -4) );         // from right =>> [start-index]=>>included   [end-index]=>>excluded  [end-index-1]=>>included

console.log("\n");

// [4] repeat()
console.log( a.repeat(2) );

console.log("\n");

// [5] split
console.log( a.split() );           // [output] whole string = one element
console.log( a.split("") );         // [output] each character = one element
console.log( a.split(" ") );        // [output] at each space =>> remove it = add one element
console.log( a.split(" ", 2) );     // [output] at each space =>> remove it = add one element [number of elements needed in the array = 2]


