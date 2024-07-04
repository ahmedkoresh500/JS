/*
    * OOP: [object meta data and descriptor] [part 1]:
        [1] writable
        [2] enumerable
        [3] configurable  =>> [delete]

    * Object.defineProperty(objectName, "oldOrNewPropertyName", {objectMetaData});
*/

const object1 = {
    a: 10,
    b: 20,
};

// [1] writable:
/*
    * writable: true   =>> can reassign value
                false  =>> can't reassign value
*/
Object.defineProperty(object1, "c", {       // ["] is a must
    writable: true,
    enumerable: true,
    configurable: true,
    value: 3,
});
console.log(object1.c);                     // result = 3

object1.c = 100;
console.log(object1.c);                     // result = 100

Object.defineProperty(object1, "c", {
    writable: false,
    enumerable: true,
    configurable: true,
    value: 200,                             // assigned currently only
});

console.log(object1["c"]);                  // result = 200
object1.c = 50;
console.log(object1["c"]);                  // result = 200
console.log(`${"#".repeat(20)}\n\n`);


/*
    * [2] enumerable:   true  =>> can loop
                        false =>> can't loop
*/

for(let prop in object1){                   // [prop]  =>> dynamic property name
    console.log(prop, object1[prop]);
};
console.log(`${"#".repeat(20)}\n\n`);


Object.defineProperty(object1, "b", {
    enumerable: false,
});

for(let prop in object1){
    console.log(prop, object1[prop]);       // [prop]  =>> dynamic property name
};

/*
for(let value of object1){          // result = syntax error  =>> [object1] not iterable
    console.log(value);             // used [of] not [in]
};
*/

console.log(`${"#".repeat(20)}\n\n`);


/*
    [3] configurable    true    =>> can [delete]
                        false   =>> can't [delete]
*/

console.log(delete object1.a);          // two are the same
console.log(delete object1["b"]);       // two are the same

console.log(object1);
