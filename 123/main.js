/*
    * new Set(Iterable or array);

        =>> [new] keyword
        =>> [Set] constructor in OOP
            [1] it removes iterative data from array  =>> following iterative data  =>> next iterative data


    * [Set();] elements     =>> can't access with index         =>> result = undefined


    [1] properties:
        =>> Set.size  = array.length        =>> first element = [index 1]

    [2] methods:
        =>> .add(value);        =>> add element
        =>> .delete(value);     =>> delete element
        =>> .clear();           =>> delete all elements
        =>> .has(value)         =>> result = boolean (true or false)  =>> best performance than [includes]

*/

let arrayData = [4, 4, 4, 2, 3, ];          // no error
console.log(arrayData);
console.log(arrayData.length);              // result = 5
console.log(`${"#".repeat(30)}\n\n`);


// methods to create [Set();]
// way [1]:
let uniqueData = new Set( [4, 4, 4, 2, 3,] );       // two are the same
uniqueData = new Set(arrayData);                    // two are the same

console.log(uniqueData);
// console.log(uniqueData[0]);        // [1] can't access with index  =>> result = undefined
// console.log(uniqueData.length);    // [1]                          =>> result = undefined
console.log(uniqueData.size);         // result = 3
console.log(`${"#".repeat(30)}\n\n`);




// way [2]:
// [1] [Set().add(value)]
let set1 = new Set().add(5).add(5).add(5).add(3).add(10);   // parentheses here is a must = [syntax error]
console.log(set1);                                          // one chain
console.log("\n");

// way [3]:
let set2 = new Set();           // two are the same
let set3 = new Set;             // two are the same

set3.add(6).add(6).add(6);
set3.add(15).add(30);
console.log(set2);
console.log(set3);
console.log(set3.size);         // result = 3
console.log(`${"#".repeat(30)}\n\n`);




// [2] [.delete(value);]    =>> set3{6, 15, 30}
set3.delete(15);            // in console  =>> found        =>> delete      =>> result = [true]
                            // in console  =>> not found    =>> no delete   =>> result = [false]
console.log(set3);
console.log(set3.size);
console.log(`${"#".repeat(30)}\n\n`);




// [3] [.clear();]
set3.clear();                   // delete all elements
console.log(set3);              // result = Set{size: 0}
console.log(set3.size);         // result = 0
console.log("\n");


// [4] [.has(value);]    =>> result = Boolean [true or false]       =>> best performance than (includes)
set3.add(4).add(4).add("Ahmed").add("back");                        // one chain
console.log(set3);
console.log( set3.has("ahmed") );       // [value] sensitive to  =>> upper and lower cases
console.log( set3.has("Ahmed") );       // [value] sensitive to  =>> upper and lower cases
console.log( `Is Set has [back] value =>> [${set3.has("back")}]` );


/*
    * can use [reduce], [filter], [map], [Set]  =>> to remove iterative data

    * [Set]:
        [1] .add("value")       =>> add element
        [2] .delete("value")    =>> delete element
        [3] .clear()            =>> delete all elements
        [4] .has("value")       =>> result = boolean (true or false)    =>> best performance than (includes)

    * [Map], [WeakMap]:
        [1] .set("key", "value");
        [2] .get("key");
        [3] .delete("key")
        [4] .clear()
        [5] .has("key")         =>> result = boolean ( true or false)
*/


