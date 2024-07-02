/*
    * new Map (Iterable [key, value]);      =>> [key, value] EX  =>> Lesson [126]  =>> array of arrays
        =>> [new] keyword
        =>> [Map] constructor in OOP


    [1] object      =>> has default keys
    [1] Map         =>> never has default keys

    [2] object      =>> key as [string or symbol]
    [2] Map         =>> key as anything [function, object, any primitive datatype]

    [3] object      =>> never ordered by insertion  =>> ordered ASC     =>> keys
    [3] Map         =>> ordered by insertion

    [4] object      =>> need to do manually     =>> [Object.keys(objectName);]  [.length]
    [4] Map         =>> has [size] attribute

    [5] object      =>> never directly iterated  =>> must use [Object.keys(objectName)]
    [5] Map         =>> directly iterated  (direct loop)

    [6] when add and remove data  =>> [Map] is better performance than [object]

    [***] document.write();
    [***] window.alert();
    [***] console.log();
*/

// [1]
let EmptyObject1 = {};
let EmptyObject2 = Object.create(null);         // [null] prototype  =>> like Map  =>> no properties
let map1 = new Map;                 // two are the same
let map2 = new Map();               // two are the same

console.log("[1]");
console.log(EmptyObject1);
console.log(EmptyObject2);
console.log(map1);
console.log(map2);
console.log(`${"#".repeat(30)}\n\n`);


// [2]
console.log("[2]");
let EmptyObject3 = new Object;      // two are the same
let EmptyObject4 = new Object();    // two are the same
console.log(EmptyObject3);
console.log(EmptyObject4);
console.log(`${"#".repeat(30)}\n\n`);


// [3]
console.log("[3]");
let object4 = {
    10: "number",
    "10": "string",                 // [1] override first value
    20: "20",
    15: "15",                       // [3] never ordered by insertion   =>> ordered ASC      =>> keys
};
console.log(object4);
console.log(object4.length);        // [4] result = undefined
console.log(object4[10]);           // two are the same     =>> bracket notation
console.log(object4["10"]);         // two are the same     =>> bracket notation
console.log(`${"#".repeat(30)}\n\n`);


// [4]
console.log("[4]");
let map4 = new Map;
map4.set(10, "number");             // key => value     =>> two are different
map4.set("10", "string");           // key => value     =>> two are different
map4.set(true, "Boolean");          // key => value
map4.set({a:1, b:2}, "object");
map4.set(function doSomething(){}, "function");

console.log(map4);                  // result = [Map] object
console.log(typeof map4);           // result = object

console.log(map4.size);             // [4] has [size] attribute
console.log( map4.get(10) );        // result = number  =>> [2] two are different
console.log( map4.get("10") );      // result = string  =>> [2] two are different


/*
    * Set:
        [1] .add("value");      =>> add element
        [2] .delete(value);     =>> delete element
        [3] .clear();           =>> delete all elements
        [4] .has(value);        =>> result = boolean (true of false)    =>> best performance than (includes)

    * Map:
        [1] .set(key, "value");
        [2] .get(key);
        [3] .delete(key);
        [4] .clear();
        [5] .has(key);
*/
