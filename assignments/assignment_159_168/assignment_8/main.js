/*
    * Assignment [8]: =>> Done
*/

import Calc from "./mod-two.js";                        // when import  =>> no curelybrackets with [export default]
// import numOne from "./mod-two.js";
import {numOne, numTwo, numThree} from "./mod-two.js";
import * as modOne from "./mod-two.js";


// [1]:
console.log(numOne);
console.log(numTwo);
console.log(numThree);
console.log(`${"#".repeat(10)}\n\n`);

// [2]:
console.log(Calc(modOne.numOne, modOne.numTwo, modOne.numThree)); // 60
console.log(`${"#".repeat(10)}\n\n`);

// [3]:
console.log(modOne);


