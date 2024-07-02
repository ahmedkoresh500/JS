/*

    * [global scope] vs [local scope]:

    * local scope = block scope     =>> [if], [switch], [for], [condition]

    [1] [global scope]  =>> can be accessed in local scope
    [2] [local scope]   =>> can't be accessed in global scope

    * [let], [const]    =>> two are the same
*/

// [1] global scope
var a = 5;
let b = 9;

function ShowText(){
    // [2] local scope
    var a = 10;
    let b = 20;
    console.log( `from local scope a = ${a}` );
    console.log( `from local scope b = ${b}` );
};

ShowText();
console.log( `from global scope a = ${a}` );
console.log( `from global scope b = ${b}` );