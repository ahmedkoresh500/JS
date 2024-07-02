/*
    * Map & Set challenge

    * Requirements:
        [1] don't use:
            =>> numbers
            =>> boolean [true or false]
            =>> array indexes
            =>> loop
            =>> higher order function
        [2] only one line solution inside console
        [3] can use [length] one time only

    * Hints:
        [1] [*] operator only is allowed
        [2] Set
        [3] spread operator
        [4] Math Object methods

    * the main idea for solution  =>> next formula
        =>> [3 * 7 * 10 = 210]
*/

// [array2.pop();]       = last Element
let array1 = [10, 30, 10, 20];      // result = 210
let array2 = [30, 20, 10];          // result = 210



console.log( array2.length * [...array1, ...array2].length * Math.min(...array2) );                 // 210
console.log( new Set(array1).size * new Array(...array1, ...array2).length * Math.min(...array1) ); // 210
console.log( new Set(array2).size * array1.concat(array2).length * array2.pop() );                  // 210


/*
    * Array.from(array1, array2);           = syntax error
    * Array.from(...array1, ...array2);     = syntax error
    * new Array(...array1, ...array2);      = no error
*/