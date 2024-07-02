/*
    * [new] keyword
    * [Object] constructor in OOP
        =>> to create object  =>> add methods and properties
*/

let User1 = new Object;
let User2 = new Object();
let User3 = new Object( {
    Age: 30,                // add properties
});

console.log( User1 );
console.log( User2 );
console.log( User3 );

User3.Name = "Ahmed";                   // add properties           =>> dot notation
User3["Age"] = 23;                      // update properties value  =>> bracket notation
User3["Country"] = "Egypt";             // add properties           =>> bracket notation
User3[100] = "it's a number";           // number  =>> in double quotation or not

User3.SayHello = function (){           // add [methods = functions = actions] inside object
        return `Hello ${User3.Name}`;   // return only
        console.log('hello');           // result = ["hello" + undefined]   =>> no print in console
}

console.log( "\n" );

console.log( User3.Name );
console.log( User3.Age );
console.log( User3["Country"] );
console.log( User3[100] );
console.log( User3["100"] );
console.log( User3.SayHello() );     // must call methods with parentheses