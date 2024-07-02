/*
    * import and export modules:

    * open with live server  =>> to avoid [CORS policy] error
*/


import{a, array1, saySomething as s} from "./main.js";        // [./]  is a must

console.log(a);
console.log(array1);
//console.log( saySomething() );            // = syntax error
console.log( s() );                         // alias name

