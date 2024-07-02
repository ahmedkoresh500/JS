/*
    * [export named vs default] and [import all]:
        [1] export alias name
        [2] export named
        [3] export default
        [4] import all
*/


// [1] [export named vs default]
// export default  =>> one export default
// can be anonymous function
// can be imported with anyname

// [a] instead of [number]  = syntax error
import sayH, {number, array, saySomething as s} from "./main.js";    // [./]  is a must

console.log(number);
console.log(array);
//console.log( saySomething() );            // = syntax error
console.log( s() );                         // alias name
console.log( sayH() );
console.log(`${"#".repeat(30)}\n\n`);



// [2] import all:
import * as whole from "./main.js";     // [./] is a must
console.log(typeof whole);              // result = object
console.log(whole.number);

