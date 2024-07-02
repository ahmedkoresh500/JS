/*
    * Object.assign({});    =>> to create object

        =>> [Object]        =>> constructor in OOP
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
    },
};

let TargetObj3 = {
    prop1: 100,
    prop3: 3,
};

// [Object.assign({})] accept target object to assign to it =>> from one or more
// last object written  =>> it will take it's values
let FinalObject = Object.assign(TargetObj3, Obj1 , Obj2);

// [1] [prop1 = 100]    =>> [TargetObj3]
// [2] [prop1 = 1]      =>> [Obj1]
// so [prop1 = 1]       =>> last object written  =>> it will take it's values
// EX [1]:
console.log( FinalObject );


// EX [2]:
FinalObject.prop1 = 200;            // re-assigning value
FinalObject.prop4 = 5;              // add new properties
console.log( FinalObject );
console.log( "\n" );

// EX [3]:
// if i don't have [target object]  =>> [target object] is empty = [{}]
let NewObject = Object.assign({}, Obj1, {prop5: 5, prop6: 6} ); // adding new properties [prop5: 5]
console.log( NewObject );
