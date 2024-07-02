/*
    * [1] Arithmetic operators:
        [+] [-] [*] [/] [%]

    * [2] Assignment operators:
        [=] [+=] [-=] [*=] [/=] [%=]

    * [3] Comparison operators:
        [>]     =>> [greater than]
        [>=]    =>> [grater than equal]

        [<]     =>> [smaller than]
        [<=]    =>> [smaller than equal]

        [==]    =>> [equal]
        [!=]    =>> [not equal]
        
                    =>> compare value only

        [===]   =>> [identical]
        [!==]   =>> [not identical]
        
                    =>> compare value and data type =>> recommended to use

*/

// simple example [assignment operator]

let a = 11;
console.log( a %= 3 );

// comparison operators
console.log( 100 == "100" );            // result = true
console.log( -100 == "-100" );          // result = true
console.log( 100 != "100" );            // result = false
console.log( -100 != "-100" );          // result = false

console.log( "\n" );

console.log( 100 === "100" );           // result = false
console.log( 100 !== "100" );           // result = true

console.log( "\n" );

console.log( 10 > 10 );                 // result = false
console.log( 10 >= 10 );                // result = true
console.log( 10 >= 5 );                 // result = true

console.log( "\n" );

console.log( 10 < 10 );                 // result = false
console.log( 10 <= 10 );                // result = true
console.log( 10 <= 5 );                 // result = false

console.log( "\n" );

console.log( "osama" === "ahmed" );                 // result = false
console.log( typeof "osama" === typeof "ahmed" );   // result = true    // interview question
