/*
    * Object.assign({});    =>> to create object

        =>> [Object] constructor in OOP
        =>> [assign();]     =>> method

    * add methods and properties
*/

let Obj1 = {
    prop1: 1,
    meth1: function(){
        return this.prop1;
    },
};

let Obj2 = {
    prop2: 2,
    meth2: function(){
        return this.prop2;
    },                              // colon
};                                  // semicolon

let Obj3 = {
    prop1: 100,
    prop3: 3,
};

/*
    * [Object.assign({})]:
        [1] accept one or more [object]
        [2] newest value in last object written
        [3] first object called [target object]
*/
let FinalObject = Object.assign(Obj3, Obj1, Obj2);

// [1] [prop1 = 100]    =>> [Obj3]
// [2] [prop1 = 1]      =>> [Obj1]
// so [prop1 = 1]       =>> newest value in last object written

// EX [1]:
console.log(FinalObject);

console.log("\n");

// EX [2]:
FinalObject.prop1 = 200;            // re-assigning value
FinalObject.prop4 = 5;              // add new properties
console.log(FinalObject);

console.log("\n");

// EX [3]: first object called [target object]  =>> can be empty [{}]
let NewObject = Object.assign({}, Obj1, {prop5: 5, prop6: 6} ); // add new properties [prop5: 5]
console.log(NewObject);
