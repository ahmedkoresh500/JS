/*
    data types:
        [1] string
        [2] number (include or encompasses int, float, double, long)
        [3] object (of type array)
        [4] object (of type null)
        [5] object
        [6] boolean
        [7] undefined
        
*/

console.log("Hello World");
console.log(typeof "Hello World"); // 1- string

console.log(5000);
console.log(typeof 5000);  // [2] number

console.log(5000.99);
console.log(typeof 5000.99);  // [2 number

console.log(["Os", "Ah", "Za"]);
console.log(typeof ["Os", "Ah", "Za"]);  // [3] object (of type array)

console.log([10, 15, 20]);
console.log(typeof [10, 15, 20]);  // [3] object (of type array)

console.log(null);
console.log(typeof null);  // [4] object (of type null) =>> error if written uppercase

console.log({name: "Osama", age: 32, country: "Eg"});
console.log(typeof {name: "Osama", age: 32, country: "Eg"});  // [5] object

console.log(true);
console.log(typeof true);  // [6] boolean

console.log(false);
console.log(typeof false);  // [6] boolean

console.log(undefined);
console.log(typeof undefined);  // [7] undefined





