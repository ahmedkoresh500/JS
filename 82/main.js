/*
    * another way of creating object:
        [1] [new] keyword
        [2] [Object] constructor in OOP
*/

let User1 = new Object;
let User2 = new Object();
let User3 = new Object( {
    Age: 30,                // add properties
});

console.log( User1 );
console.log( User2 );
console.log( User3 );

User3.Name = "Ahmed";                   // [1] add properties           =>> dot notation
User3["Country"] = "Egypt";             // [1] add properties           =>> bracket notation
User3["Age"] = 25;                      // [2] update properties value  =>> bracket notation
User3[100] = "it's a number";           // number  =>> with ["] or not

User3.sayHello = function (){
        return `Hello ${User3.Name}`;   // return only
        console.log('hello');           // result = ["hello" + undefined]   =>> no print in console
}

console.log("\n");

console.log( User3.Name );
console.log( User3.Age );
console.log( User3["Country"] );
console.log( User3[100] );              // with ["] or not
console.log( User3["100"] );            // with ["] or not
console.log( User3.sayHello() );        // functions  =>> must call with parentheses
