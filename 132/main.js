/*
    * ...Iterable       =>> spread operator: the easiest way to concatenate

        =>> allow Iterable to expand in place

*/

// [1] spread operator  =>> [string]
console.log( Array.from("Ahmed") );     // way [1]  =>> Array.from(Iterable, MapFunc(){}, This);
console.log( ..."Ahmed" );
console.log( [..."Ahmed"] );            // way [2]  =>> spread operator
console.log(`${"#".repeat(30)}\n\n`);


// [2] concatenate array
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
console.log( ...array1 );
console.log( ...array2 );

// console.log(Array.from(array1, array2));         // syntax error
// console.log(Array.from(...array1, ...array2));   // syntax error

console.log( [...array1, ...array2] );
console.log(`${"#".repeat(30)}\n\n`);


// [3] copy array
let arrayCopied1 = array1;          // way [1]
let arrayCopied2 = [...array1];     // way [2]
let [...arrayCopied3] = array1;     // way [3]          // thre rest of array  =>> into variable array
console.log(array1);
console.log(arrayCopied1);          // three are the same
console.log(arrayCopied2);          // three are the same
console.log(arrayCopied3);          // three are the same
console.log(`${"#".repeat(30)}\n\n`);


// [4] push array inside array
// way [1]:
let friends1 = ["Osama", "Ahmed", "Sayed"];
let newFriends1 = ["Sameh", "Mahmoud"];
friends1.push("Sameh", "Mahmoud");
console.log(friends1);

// way [2]: push array  =>> not elements
let friends2 = ["Osama", "Ahmed", "Sayed"];
let newFriends2 = ["Sameh", "Mahmoud"];
friends2.push(newFriends2);
console.log(friends2);

// way [3]:
let friends3 = ["Osama", "Ahmed", "Sayed"];
let newFriends3 = ["Sameh", "Mahmoud"];
friends3.push( ...newFriends3 );
console.log(friends3);
console.log("\n");





// [5] spread operator  =>> [2] with Math object
let numbers = [10, 20, -100, 100, 999, 500];
console.log( Math.min( ...numbers ) );
console.log( Math.max( ...numbers ) );
console.log("\n");



// [6] spread operator  =>> [1] with object
let object1 = {
    a: 1,
    "b": 2,             // no error
};
let object2 = {
    c: 3,
    "d": 4,             // no error
};
console.log( {...object1, ...object2, e: 5} );  // merging objects

/*
    * Array.from(Iterable, MapFuntion(){}, This);
    * spread operator:
        [1] Set
        [2] string
        [3] arguments   object
*/


