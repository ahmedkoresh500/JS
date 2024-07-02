/*
    * higher order function =>> function with arguments = another function

    * syntax: 
        =>> array1.filter(callBackFunction(element, index, array){}, this Argument)

    * filter:
        =>> array method =>> create new array
        =>> return elements which passed the test

        * [element], [index], [array] =>> arguments i can give them another name

        * [element]             =>> mandatory
        * [index] & [array]     =>> optional

        =>> element =>> current element under processing [proceeding]
        =>> index   =>> index of current element proceeded in the array
        =>> array   =>> array i'm working on
*/

// example [1]
let Friends = ["Ahmed", "Sameh", "Sayed", "Asmaa", "Amgad", "Esraa"];

// [1] [filter]
let FilteredFriendsFilter = Friends.filter( function(ele){
    return ele.startsWith("A") ? true : false;                  // return value achieved condition  =>> two are the same
    return ele.startsWith("A");                                 // return value achieved condition  =>> two are the same
});
console.log(FilteredFriendsFilter);

// [2] [map]
let FilteredFriendsMap = Friends.map( function(ele){
    return ele.startsWith("A") ? true : false;                  // return value achieved condition
    return ele.startsWith("A");                                 // return value achieved condition
});
console.log(FilteredFriendsMap);
console.log("\n");



// EX [2]: even numbers
let Numbers = [11, 20, 2, 5, 17, 10];

// [1] [Filter]
let EvenNumbersFilter = Numbers.filter( function(ele){
    return ele % 2 === 0 ? true : false;                        // return value achieved condition
    return ele % 2 === 0;                                       // return value achieved condition
} );
console.log(EvenNumbersFilter);

// [2] [Map]
let EvenNumbersMap = Numbers.map( function(ele){
    return ele % 2 === 0 ? true : false;                        // return value achieved condition
    return ele % 2 === 0;                                       // return value achieved condition
} );
console.log(EvenNumbersMap);
console.log("\n");






// map vs filter
console.log(Numbers);

// [1] [Filter]
let AddMap = Numbers.map( function(ele){
    return ele + ele;                           // return new value
} );
console.log(AddMap);

// [2] [Map]
let AddFilter = Numbers.filter( function(ele){
    return ele + ele;                           // return new value
} );
console.log(AddFilter);


