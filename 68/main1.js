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
if(x === 10){
    console.log(`let from block scope = ${x}`);         // can access before identification
                                                        // can access before initialization
    x = 50;                                             // re-assigning value
    console.log(`let from block scope = ${x}`);
};
console.log(`let from global scope = ${x}`);
console.log("\n");


// EX [2]: [let]
let y = 10;
if(y === 10){
    // console.log(`let from block scope = ${c}`);      // can't access before identification  =>> syntax error
                                                        // can't access before initialization  =>> syntax error
    let y = 50;
    console.log(`let from block scope = ${y}`);
};
console.log(`let from global scope = ${y}`);
console.log("\n");


// EX [3]: [var]
var z = 5;
if(z === 5){
    console.log(`var from local scope = ${z}`);         // can access before identification
                                                        // can access before initialization
    var z = 15;
    console.log(`var from local scope = ${z}`);
};
console.log(`var from global scope = ${z}`);
console.log("\n");


/*
    * [var]:
        [1] can access before identification    =>> [if condition]
        [2] can't access before identification  =>> [function]
*/
