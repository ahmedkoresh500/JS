/*
    * Array methods:
        [1] array.indexOf(value, start-index)     =>> to search value in array from left

            * output    =>> found       =>> result = value index in the array
                        =>> not found   =>> result = -1

            * value                 =>> mandatory               =>> not written  =>> result = -1
            * start-index           =>> optional

            * [value] sensitive to upper and lower cases

            * start from left or right
            * first element from left = index 0
            * first element from right = index -1



        [2] array.lastIndexOf(value, start-index) =>> to search element value in array from right

            * output    =>> found           =>> result = [value] index in the array
                        =>> not found       =>> result = -1

            * [value]                   =>> mandatory           =>> not written  =>> result = -1
            * start-index               =>> optional

            * [value] sensitive to upper and lower cases

            * start from left or right
            * first element from left = index 0
            * first element from right = index -1


        [3] array.includes(value, start-index)                  =>> array incluedes specific value

            * result = boolean (true or false)

            * [value]                   =>> mandatory           =>> not written  =>> result = false
            * start-index               =>> optional


            * [value] sensitive to  =>> upper and lower cases

            * start from left or right
            * first element from left = index 0
            * first element from right = index -1

            * direction always from left to right 
*/

/*
    [start-index] > [available indexes] ?????????????????????????
*/

let MyFriends = ["Gamal", "Ahmed", "Zaki", "Ahmed", "Ibrahim"];

console.log( "index of element value 'ahmed' is: " + MyFriends.indexOf() );                 // not written =>> result = -1
console.log( "index of element value 'ahmed' is: " + MyFriends.indexOf("ahmed") );          // result = -1  =>> element value sensitive to upper and lower cases
console.log( "index of element value 'Ahmed' is: " + MyFriends.indexOf("Ahmed") );          // result = [1] index of element value in the array
console.log( "index of element value 'Ahmed' is: " + MyFriends.indexOf("Ahmed", 3) );      // result = [3] index of element value in the array
console.log( "index of element value 'Ahmed' is: " + MyFriends.indexOf("Ahmed", -2) );     // result = [3] index of element value in the array

console.log("\n");

console.log( "index of element value 'Ahmed' is: " + MyFriends.lastIndexOf() );             // not written =>> result = -1
console.log( "index of element value 'Ahmed' is: " + MyFriends.lastIndexOf("ahmed") );      // result = -1  =>> element value sensitive to upper and lower cases
console.log( "index of element value 'Ahmed' is: " + MyFriends.lastIndexOf("Ahmed") );      // result = [3] index of element value in the array
console.log( "index of element value 'Ahmed' is: " + MyFriends.lastIndexOf("Ahmed", -2) ); // result = [3] index of element value in the array
console.log( "index of element value 'Ahmed' is: " + MyFriends.lastIndexOf("Ahmed", 1) );  // result = [1] index of element value in the array
console.log( "index of element value 'Ahmed' is: " + MyFriends.lastIndexOf("Ahmed", 0) );  // result = -1

console.log("\n");

// let MyFriends = ["Gamal", "Ahmed", "Zaki", "Ahmed", "Ibrahim"];
console.log( MyFriends.includes() );                // result = false   =>> not written =>> result = false
console.log( MyFriends.includes("ahmed") );       // result = false   =>> element value sensitive to upper and lower cases
console.log( MyFriends.includes("Ahmed") );       // result = true

console.log( MyFriends.includes("Ahmed", 3) );   // result = true    =>> strat from left or right
console.log( MyFriends.includes("Ahmed", 4) );   // result = false   =>> start from left or right


console.log( MyFriends.includes("Ahmed", 1) );   // result = true
console.log( MyFriends.includes("Ahmed", -2) );  // result = true
/* [array.includes(element value, start-index)]    =>> direction always from left to right */