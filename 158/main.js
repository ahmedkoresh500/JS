/*
    * OOP: [object meta data and descriptor] [part 2]:
        [1] define multiple properties
        [2] check descriptors [related objects or properties]

    * [writable] [enumerable] [configurable]:
            =>> not written = false    =>> by default  =>> [Object.defineProperties()]

    * Object.defineProperties(objectName, {oldOrNewPropertiesName});
*/


const object1 = {
    a: 10,
    b: 20,
};

console.log(Object.getOwnPropertyDescriptor(object1, "b")); // [writable] [enumerable] [configurable] = true

// [1] define multiple properties
Object.defineProperties(object1, {
    c:{
        configurable: true,                     // [writable] [enumerable] not written = false [by default]
        value: 15,
    },
    d:{
        configurable: true,
        value: 25,
    },                          // colon only
});

console.log(Object.getOwnPropertyDescriptor(object1, "c"));
console.log(`${"#".repeat(40)}\n\n`);



// revision
const object2 = {};
Object.defineProperties(object2, {
    e:{
        configurable: true,
        value: 15,
    },
    f:{
        value: 10,
    },                          // colon only
});

console.log(object1);
console.log(object2);
console.log(`${"#".repeat(40)}\n\n`);

// [2] check descriptors [related objects or properties]
// =>> [a] for one property
console.log( Object.getOwnPropertyDescriptor(object1) );                // result = undefined
console.log( Object.getOwnPropertyDescriptor(object1, "c") );           // result = object
console.log( Object.getOwnPropertyDescriptor(object1, "c").writable );
console.log( Object.getOwnPropertyDescriptor(object1, "c").enumerable );
console.log( Object.getOwnPropertyDescriptor(object1, "c").configurable );
console.log( Object.getOwnPropertyDescriptor(object1, "c").value );
console.log(`${"#".repeat(30)}\n\n`);

// =>> for all properties
console.log( Object.getOwnPropertyDescriptors(object1) );               // result = object
console.log( Object.getOwnPropertyDescriptors(object1).a );             // extra [s]
console.log( Object.getOwnPropertyDescriptors(object1).b );             // extra [s]
console.log( Object.getOwnPropertyDescriptors(object1).c );             // extra [s]
console.log( Object.getOwnPropertyDescriptors(object1).d );             // extra [s]
console.log(`${"#".repeat(30)}\n\n`);

console.log( Object.getOwnPropertyDescriptors(object1).a.writable );        // extra [s]
console.log( Object.getOwnPropertyDescriptors(object1).a.enumerable );      // extra [s]
console.log( Object.getOwnPropertyDescriptors(object1).a.configurable );    // extra [s]
console.log( Object.getOwnPropertyDescriptors(object1).a.value );           // extra [s]
