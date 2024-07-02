/*
    * [1] Arithmetic operators:
        [+] [-] [*] [/] [%]

    * [2] Assignment operators:
        [=] [+=] [-=] [*=] [/=] [%=]

    * [3] Comparison operators:
        [>] [>=] [<] [<=] 
        [==] [!=]   =>> compare value only 
        [===] [!==] =>> compare value and data type =>> recommended to use


    * logical operators:
        [&& And]    =>> all conditions are true
        [|| Or]     =>> one of all conditions is true   =>> at minimum
        [! Not]



    * [&]   =>> true    =>> result = 1
            =>> false   =>> result = 0

    * [&&]  =>> true    =>> result = true
            =>> false   =>> result = false 


    * [|]   =>> true    =>> result = 1
            =>> false   =>> result = 0

    * [||]  =>> true    =>> result = true
            =>> false   =>> result = false

*/

console.log( !true );           // result = false
console.log( !false );          // result = true
console.log( !(10 == "10") );   // result = false
console.log( !(10 != "10") );   // result = true

console.log( "\n" );

console.log( 10=="10"  &&  10>8  &&  10>=10 );      // result = true
console.log( 10=="10"  &&  10>8  &&  10>=50 );      // result = false

console.log( "\n" );

console.log( 10=="10"  ||  10>8  ||  10>10 );       // result = true
console.log( 10!="10"  ||  10<8  ||  10>10 );       // result = false

console.log( "\n" );

console.log( 10=="10"  &&  10>8  ||  10>10 );       // result = true
console.log( 10>=10  ||  10=="10"  &&  10>8 );      // result = true

