/*
    * Array.from(Iterable, MapFunc(){}, This)
                                            =>> this  =>> refers to parent

        =>> Iterable    =>> required - mandatory
        =>> MapFunc     =>> optional
        =>> This        =>> optipnal

    * MapFunction, callBackFunction  =>> run on every element in the array
*/

// [1]
let Name = "Ahmed";
console.log( Array.from("Osama") );         // explode string into array
console.log( Array.from(Name) );            // explode string into array
console.log("\n");


console.log( Array.from("1234566") );       // Iterable         =>> result = full array
console.log( Array.from(12345) );           // not Iterable     =>> result = empty array
console.log(`${"#".repeat(30)}\n\n`);



// [2]
console.log( Array.from("1234566", function(n){
    return n + n;                           // [+] concatenate
}) );
console.log( Array.from("12345", function(n) {
    return +n + +n;                         // unary plus operator  =>> convert string into number
}) );
console.log( Array.from("12345", (n) => +n + +n) ); // arrow function  
                                                    // [no return], [no semiColon], [no curelyBracket]
                                                    // [no function name], [no function keyword], [no parentheses]
console.log(`${"#".repeat(30)}\n\n`);



// [3]
// mySet = Iterable
let array1 = [2, 2, 2, 4, 6];
console.log(array1);

let set1 = new Set(array1);
console.log(set1);
console.log(`${"#".repeat(30)}\n\n`);



console.log( Array.from(set1) );       // [1] Array.from(Iterable, MapFunc, This);  =>> way [1]

console.log(...set1);
console.log([...set1]);                 // [2] spread operator                       =>> way [2]
console.log(`${"#".repeat(30)}\n\n`);




// [4]
function testArgs(){
    return arguments;           // [keyword] sensitive to  =>> upper and lower cases
};
console.log( testArgs("Osama", "Osama", "Ahmed", "Zaki") );
console.log( typeof testArgs("Osama", "Osama", "Ahmed", "Zaki") );      // result = object
console.log(`${"#".repeat(30)}\n\n`);



function arrayFromIterable(){
    return Array.from(arguments);   // [1] Array.from(Iterable, MapFunc, This argument);    =>> way [1]
};
console.log( arrayFromIterable(1, 1, 5, 7) );

function arrayFromSpread(){
    return [...arguments];          // [2] spread operator                                  =>> way [2]
};
console.log( arrayFromSpread("osama", "Osama", "ahmed", "zaki") );


