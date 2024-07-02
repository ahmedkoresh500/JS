/*
    * [weak]:
        =>> [reference] words
        =>> related to [garbage collector]

    * [WeakMap] Use: garbage collector:
                [1] clear memory management from any excess data not used
                [2] store objects and remove them once they become inaccessible

    * object    =>> key as [string or symbol]
    * Map       =>> key as anything [function, object, any primitive dataType]
    * WeakMap   =>> key as [object] only

    * [WeakMap()] methods:
        [1] .set("object", value);
        [2] .get("object");
        [3] .delete("object");
        [4] .clear();
        [5] .has("object");
*/

// EX [1]: Map:
let User1 = {
    name: "Ahmed",
};

let map1 = new Map( [ [User1, "object value [1]"] ] );  // two are the same     =>> array of arrays   arrays only = synatx error
// map1.set(User1, "object value [1]");                 // two are the same

User1 = null;               // [1] override first value  =>> override the reference

console.log(User1);         // result = null
console.log(map1);          // User object not removed
console.log(`${"#".repeat(30)}\n\n`);



// EX [2]: WeakMap:
let User2 = {
    Name: "Ahmed",
};


let weakMap1 = new WeakMap( [ [User2, "value [1]"] ] ); // array of arrays      arrays only = syntax error
console.log(weakMap1);                                  // array of arrays      =>> wit [map] & [WeakMap]


let weakMap2 = new WeakMap;         // two are equal
let weakMap3 = new WeakMap();       // two are equal

/*
weakMap2.set("Name", "value");      // key as [object] only
weakMap3.set("Name", "value");      // key as [object] only

console.log(weakMap2);              // result = syntax error
console.log(weakMap3);              // result = syntax error
console.log("#".repeat(30));
*/


weakMap2.set(User2, "value [2]");   // no properties
weakMap3.set(User2, "value [3]");   // no properties

User2 = null;                       // [1] override first value   =>> override the reference

console.log(weakMap2);              // User object not removed
console.log(weakMap3);              // User object not removed
console.log(`${"#".repeat(30)}\n\n`);




weakMap1 = null;                    // [1] override first value   =>> override the reference
weakMap2 = null;                    // [1] override first value   =>> override the reference
weakMap3 = null;                    // [1] override first value   =>> override the reference

console.log(weakMap1);              // result = null
console.log(weakMap2);              // result = null
console.log(weakMap3);              // result = null


/*
    * we didn't practice  =>> [WeakSet] [add(), delete(), clear(), has()]
    * we didn't practice  =>> [WeakMap] [set(), get(), delete(), clear(), has()]
*/