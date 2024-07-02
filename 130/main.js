/*
    * array1.some( callBackFunction(element, index, array){}, argument );
                                                                =>> argument  =>> refered with [this]

        =>> element: current element
        =>> index: index of current element
        =>> array: current array
    * [this argument]:  =>> value to use when executing callBack Function

    * [result = true]   =>> if condition is true on one element
                        =>> stop loop


    * mapFunction, callBackFunction  =>> run on every element in the array

    * use:
        [1] check value in array
        [2] check number in range
*/

// [1] anonymous function
let array1 = [1, 2, 3, 4, 5, 6, 7,];
let check1 = array1.some( function(ele){
    console.log(ele);
    return ele == 5;            // one equal  =>> stop at first condition
    return ele > 5;             // [result = true]    =>> if condition is true on one element
} );                                                  // stop loop  [at 6]
console.log(check1);
console.log(`${"#".repeat(30)}\n\n`);


// [2] arrow function:
// [no return], [no semicolon], [no curelyBracket]
// [no functionName], [no functionKeyword], [no parentheses]
let array2 = [1, 2, 3, 4, 5, 6, 7,];
let check2 = array2.some( ele => ele > 5 );             // three are the same
check2 = array2.some( (ele) => ele > 5 );               // three are the same
check2 = array2.some( (ele) => {return ele > 5;} );     // three are the same
console.log(check2);                    // result = true
console.log(`${"#".repeat(30)}\n\n`);






// [3] this argument
let array3 = [1, 2, 3, 4, 5, 6, 7,];
let firstNumber = 5;
let check3 = array3.some( function(ele){
    return ele > this;
}, firstNumber );
console.log(check3);
console.log(`${"#".repeat(30)}\n\n`);



// [4] check value in array
let array4 = [1, 2, 3, 4, 5, 6, 7,];
function checkValueInArray(array, value){
    return array.some( function(ele){
        return ele === value;
    } );
};

console.log( checkValueInArray(array4, 7) );     // result = true
console.log( checkValueInArray(array4, 8) );     // result = false
console.log(`${"#".repeat(30)}\n\n`);


// [5] check number in range
let array5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12];
let range = {
    min: 10,
    "max": 20,
};

let checkNumInRange = array5.some( function(ele){       // [1] two are equal
    // console.log(this.min);
    // console.log(this.max);
    return ele >= this.min && ele <= this.max;        // two are the same   =>> dot notation
    return ele >= this["min"] && ele <= this["max"];  // two are the same   =>> ["] is a must = syntax error
}, range );
console.log(checkNumInRange);


checkNumInRange = array5.some( function(ele){           // [1] two are equal
    return ele >= range.min && ele <= range.max;            // two are the same  =>> dot notation
    return ele >= range["min"] && ele <= range["max"];      // two are the same  =>> bracket notation
} );
console.log(checkNumInRange);

