/*
    * map practice:
        [1] swap cases
        [2] inverted numbers
        [3] ignore boolean value

    * map =>> array method  =>> create new array

    * join("")      =>> array to string
    * split("")     =>> string to array

*/


// case [1]
let SwappingCases = "ElzerO";

let SW = SwappingCases.split("").map( function(ele){    // split without ["] =>> condition won't be executed
    // conditional ternary operator = if المختصره   =>> condition ? statement true : statement false
    return ele === ele.toUpperCase() ? ele.toLowerCase() : ele.toUpperCase();
} ).join("");                                           // join without [""]    =>> separator = [,]
console.log(SW);



// case [2]
let InvertedNumbers = [1, -10, -20, 15, 100, -30];

let Inv = InvertedNumbers.map( function(ele){
    //return ele * -1;
    return -ele;                        // unary negation operator
} );
console.log(InvertedNumbers);
console.log(Inv);



// case [3]
let IgnoreBooleanValue = "Elz123er4o";

let Ignore = IgnoreBooleanValue.split("").map( function(ele){
    //return parseInt(ele) === NaN ? ele : "";                          // this idea doesn't work  =>> doesn't print
    //return Number.isInteger( parseInt(ele) ) === true ? "" : ele;     //solution 1 =>> conditional ternary operator only =>> not regular if statement
    return isNaN( parseInt(ele) ) === true ? ele : "";                  //solution 2 =>> conditional ternary operator only =>> not regular if statement

} ).join("");
console.log(Ignore);

/*
    * first idea:
        * Number.isInteger(100);      =>> result = true
        * Number.isInteger("100");    =>> result = false
        * Number.isInteger("A");      =>> result = false
        * Number.isInteger(NaN);      =>> result = false

    * parseInt("100")       =>> result = 100    =>> integer
    * parseInt("A")         =>> result = NaN

*/

let el = "A";
console.log( parseInt(el) );        // result = NaN
console.log(el);                    // result = A
if(parseInt(el) == NaN){
    console.log("Not a number");    // this idea doesn't work  =>> doesn't print  =>> why  =>> i don't know
}


