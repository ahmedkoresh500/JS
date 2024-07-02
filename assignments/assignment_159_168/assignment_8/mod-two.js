/*
    * Assignment [8]: =>> Done
*/


let a = 10; // Do Not Edit Names
let b = 20; // Do Not Edit Names
let c = 30; // Do Not Edit Names

export default function (num1, num2, num3){     // export default  =>> one export default
    return num1 + num2 + num3;                  // can be anonymous function
};                                              // can be imported with anyname

// export {Calc};                       // curelybrackets is a must
// export {a};                          // curelybrackets is a must
export{                                 // curelybrackets is a must
    a as numOne, b as numTwo, c as numThree
};
