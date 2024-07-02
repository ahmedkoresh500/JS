/*
    * higher order function: [reduce]
        =>> reduce( callBackFuntion(accumulator, current element[value], current index, Source array){}, initial value )

    * no initial value:
        * accumulator   = index 0 value as a start
        * element       = index 1 value as a start
    * index         = index of current element proceeded in the array [index 1]
    * source array  = array i'm working on
*/

let Nums = [10, 20, 15, 30];

// example [1]  =>> no initial value
let Add = Nums.reduce( function(acc, currentele, index, array){
    console.log( `acc => ${acc}` );
    console.log( `current element => ${currentele}` );
    console.log( `current index => ${index}` );
    console.log( `whole array , source array => ${array}` );
    console.log( "################################" );
    return acc + currentele;

});
console.log(Add);
console.log("\n");

// template literals change array shape from [1, 9, 4]  to  1,9,4  =>> but the same value



// example [2]  =>> with initial value
let Summation = Nums.reduce( function(acc, currentele, index, array){
    return acc + currentele;

}, 5);                          // [accumulator = 5], [element = index 0 = 10]
console.log(Summation);

// template literals change array shape from [1, 9, 4]  to  1,9,4  =>> but the same value
