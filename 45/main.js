/*
    [1] syntax of [array.slice()]:
        =>> array.slice(start-index, end-index)

    * start-index   =>> optional
    * end-index     =>> optional


    * [start-index] =>> included
    * [end-index]   =>> excluded
    * [end-index-1] =>> included

    * first element from left = index 0
    * first element from right = index -1

    * when begin from the end   =>> can't swap with the start   =>> result = empty array


    [2] syntax of [array.splice()]
        =>> array.splice(start-index, elements to be deleted, elements to be added)

    * start-index               =>> mandatory
    * elements to be deleted    =>> mandatory   =>> even value = zero
    * elements to be added      =>> optional

    * elements to be deleted    =>> number
    * elements to be added      =>> values

*/

let MyFriends = ["Ahmed", "Sayed", "Ali", "Osama", "Gamal", "Ameer"];   // [last index = 5]

console.log( MyFriends.slice() );           // result = the whole array

console.log( MyFriends.slice(2) );          // result = array from index 2 till the end

console.log( MyFriends.slice(-3, -5) );    // when begin with the end =>> can't swap with the start =>> result = empty array

console.log( MyFriends.slice(-5, -3) );    // [start-index]=>> included  [end-index]=>> excluded  [end-index-1] =>> included

console.log( MyFriends.slice(1, -2) );     // result = array from [index 1] till [index 3]

console.log( MyFriends.slice(6) );          // [start-index] > [available indexes]  =>> result = empty array

console.log( MyFriends );                   // array =>> remain the same

console.log("\n");


// splice
MyFriends.splice(0, 0, "Samir", "Samara");
console.log(MyFriends);

MyFriends.splice(0, 2);
console.log(MyFriends);                     // origin array doesn't remain the same

MyFriends.splice(0, 0, "alaaaaaaaa");
console.log(MyFriends);


