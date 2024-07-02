/*
    * [arrow function] vs [regular function]:
        =>> [arrow function] has more limitations than [regular function]

    * no return  =>> no semicolon  =>> no curelybracket  =>> no function keyword

*/

// EX [1]: regular function
let Print = function (){
    return 10;
};
console.log( Print() );

// EX [2]: arrow function
let PrintNum =  () => 20;               // arrow function  =>> return only one statement
console.log( PrintNum() );

// EX [3]:  =>> arrow function
let PrintNumber = _ => 30;              // [_] = [()]
console.log( PrintNumber() );
console.log("\n");



// EX [4]: regular function
function PrintN1(Num){
    return Num;
};
console.log( PrintN1(100) );

// EX [5]: arrow function
let PrintN2 = Num => Num;                   // one argument  =>> parentheses optional
console.log( PrintN2(200) );
console.log("\n");


// EX [6]: arrow function
let PrintN = (Num1, Num2) => Num1 * Num2;   // more than one argument  =>> parentheses  =>> required - mandatory
console.log( PrintN(20, 20) );