/*
    * block scope  =>> [if], [switch], [for], [function]:

    * difference between [var], [let], [const]
        [1] [var]           =>> doesn't make syntax error
            [let], [const]  =>> make syntax error to trace

        [2] [var]           =>> in local scope can override value in global scope
            [let], [const]  =>> in local scope can't override value in global scope  =>> only one case  =>> not written

        [3] [var]           =>> can be re-declared
            [let], [const]  =>> can't be re-declared

*/


// EX [1]: [let]
let x = 10;
function number1(){
    console.log(`let from block scope = ${x}`);     // can access before identification
                                                    // can access before initialization
    x = 15;
    console.log(`let from block scope = ${x}`);
};
number1();
console.log(`let from global scope = ${x}`);
console.log("\n");



// EX [2]: [let]
let y = 10;
function number2(){
    // console.log(`let from block scope = ${y}`);      // can't access before identification  =>> syntax error
                                                        // can't access before initialization  =>> syntax error
    let y = 15;
    console.log(`let from block scope = ${y}`);
};
number2();
console.log(`let from global scope = ${y}`);
console.log("\n");



// EX [3]: [var]
var z = 15;
function number3(){
    // console.log(`var from block scope = ${z}`);      // can't access before identification
                                                        // can't access before initialization
    var z = 20;
    console.log(`var from block scope = ${z}`);
};
number3();
console.log(`var from global scope = ${z}`);

/*
    * [var]
        [1] [if]    =>> in local scope can override value in global scope
                    =>> can access before identification

        [2] [function]  =>> in local scope can't override value in globl scope
                        =>> can't access before identification
*/

