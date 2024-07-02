/*
    * new WeakSet({objects, array of objects});

        =>> [new] keyword
        =>> [WeakSet] constructor in OOP

    [1] set       =>> store any type of data
    [1] weakSet   =>> store objects only

    [2] Set       =>> has [size] attribute
    [2] WeakSet   =>> never has [size] attribute

    [3] Set       =>> has [keys, values, Entries]                =>> [keys]  =>> alias name for [values]
    [3] WeakSet   =>> never has [clear, keys, values, Entries]   =>> [keys]  =>> alias name for [values]

    [4] Set       =>> can use forEach                   =>> can use [keys()]
    [4] WeakSet   =>> can't use forEach                 =>> can't use [keys()]

    * [WeakSet] use: garbage collector:
                        [1] clear memory management from any excess data not used
                        [2] store objects and remove them once they become inaccessible

    * can use [reduce], [filter], [map], [set]  =>> to remove iterative data
*/

// [1], [2]
let set1 = new Set( [8, 8, 8, 4, 6, "A", "B"] );
console.log(set1);
console.log(`size of elements = [${set1.size}]`);
console.log(`${"#".repeat(30)}\n\n`);

// let WeakSet1 = new WeakSet( [8, 8, 8, 4, 6, "A", "  B"] );
// console.log(WeakSet1);          // syntax error  =>> store objects only
WeakSet1 = new WeakSet( [{a:3, b:4}, {a:3, b:4}] ); // store objects only  =>> [JSON object], [array of objects]
console.log(WeakSet1);
console.log(WeakSet1.size);        // result = undefined
console.log( "#".repeat(15) );


// [3]
// Object.keys(objectName)  =>> to get keys [from object into array] as string
let Iterator1 = set1.keys();
console.log( Iterator1.next().value );       // [1] [next();] method   =>> [value] property
console.log( Iterator1.next().value );       // [2] [next();] method   =>> [value] property
console.log( Iterator1.next().value );       // [3] [next();] method   =>> [value] property
console.log( Iterator1.next() );             // [4] [next();] method   =>> [value] property
console.log( Iterator1.next() );             // [5] [next();] method   =>> [value] property
console.log( Iterator1.next() );             // [5] [next();] method   =>> [value] property
console.log(`${"#".repeat(30)}\n\n`);

// let Iterator2 = WeakSet1.keys();         // result = syntax error
// console.log( Iterator2.next().value );   // result = syntax error


// [4]
console.log(set1);
console.log("\n");
set1.forEach( el => console.log(el) );      // two are the same
console.log("\n");
set1.forEach( (el) => console.log(el) );    // two are the same


/*
    *  arrow function:
                    =>> [no return] [no semicolon] [no curelybracket]
                    =>> [no function name] [no function keyword] [no parentheses]

    * search on google:
    [1] [WeakSet use cases]

    * forEach:
        [1] doesn't return anything
        [2] break  =>> doesn't break the loop
        [3] used when no process on array data

    * [map] [forEach] are the same except:
        [***] map       =>> return
        [***] forEach   =>> doesn't return

    * we didn't practice  =>> WeakSet [add(), delete(), clear(), has()]
*/


