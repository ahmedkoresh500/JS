/*
    * higher order function challenge

    * can use [,] [_] [space] [true =>> 1 =>> one time only in the code]

    * can't use [numbers] [letters]

    * must use [filter + map + reduce + your knowledge]


    * all in one chain =>> order of built-in function is not important
*/

let MyString = "1,2,3,EE,l,z,e,r,o,_W,e,b,_,S,c,h,o,o,l,2,0,Z";
let ZLetter = MyString[MyString.length-true];                       // to remove last element [Z]


/*
let Solution = MyString.split("").filter(function(ele){
    return isNaN( parseInt(ele) );
}).filter(function(ele){
    return ele !== ",";
}).join("").split("_").join(" ");

console.log( Solution );        // Elzero Web School
*/

let Solution = MyString.split("").filter(function(ele){
    return isNaN( parseInt(ele) ) && ele !== "," && ele !== ZLetter;       // [||]     =>> won't remove [numbers] & [,]
}).map(function(ele){
    return ele.replace("_" , " ");                      // new function =>> wasn't explained before
    return ele === "_" ? " " : ele;
}).reduce(function(acc , ele){                          // or [.join("")]
    return acc === ele ? acc : acc + ele;               // to remove first element [E]
});

console.log( Solution );        // Elzero Web School

/*
    true - !false
*/