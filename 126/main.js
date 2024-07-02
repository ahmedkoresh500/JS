/*
    * new Map(Iterable [ ["key", value], ["key", value] ]);     =>> array of arrays

    * [key] sensitive to  =>> upper and lower cases

    * [4] Map   =>> has [size] attribute                        =>> Lesson [125]

    * Map methods:
        [1] .set("key", "value");
        [2] .get("key");
        [3] .delete("key");
        [4] .clear();
        [5] .has("key");
*/

// [1] add  =>> Iterable
let map1 = new Map([            // array of arrays      =>> arrays only = [syntax error]
    ["Age", 23],
    [false, "boolean"],
]);
let map2 = new Map;

// [1] add  =>> set("key", "Value");
map2.set(10, "number");             // two are different
map2.set("10", "string");           // two are different
// map2.set(firstName, "Osama");    // [1] [map2.get(firstName);]   =>> result = syntax error
map2.set("firstName", "Ahmed");

console.log(map1);
console.log(map2);
console.log(`${"#".repeat(30)}\n\n`);




// [2] get("key");
console.log( map2.get(10) );      // result = "number"  =>> [key] sensitive to  =>> upper and lower cases
console.log( map2.get("10") );    // result = "string"  =>> [key] sensitive to  =>> upper and lower cases
// console.log( map2.get(firstName) );  // [1] result = syntax error
console.log( map2.get("firstName") );  // result = "Ahmed"
console.log("\n");

console.log( map1.get("Age") );     // result = 23
console.log( map1.get(false) );     // result = boolean
console.log(`${"#".repeat(30)}\n\n`);


console.log(map1.size);
console.log(map2.size);
console.log(`${"#".repeat(30)}\n\n`);




// [3] delete("key");
console.log( map2.delete(10) );     // found        =>> delete      =>> result = true   =>> two are different
console.log( map2.delete("10") );   // not found    =>> no delete   =>> result = false  =>> two are different
console.log("\n");

// [5] has("key");
console.log( map1.has(false) );     // [result = true]
console.log( map1.has("age") );     // [result = false]  =>> [key] sensitive to  =>> upper and lower cases
console.log("\n");

// [4] clear();
map2.clear();
console.log(map2);                  // result = Map{size: 0}
console.log(map2.size);


