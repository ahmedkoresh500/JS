/*
    * array1.copyWithin(target, start, end)

        =>> target  =>> required - mandatory
        =>> start   =>> optional                = index 0       =>> default
        =>> end     =>> optional                = array end     =>> default

    * target    =>> position to copy at
    * start     =>> position to start copy
    * end       =>> position to end copy
                =>> not including end           =>> written

    * first element from left =  [index 0]
    * first element from right = [index -1]
*/

// [1]
let array1 = [10, 20, 30, 40, 50, "A", "B"];
console.log(array1);
array1.copyWithin(3);
console.log(array1);            // [10, 20, 30, 10, 20, 30, 40]
console.log(`${"#".repeat(30)}\n\n`);


// [2]
let array2 = [10, 20, 30, 40, 50, "A", "B"];
array2.copyWithin(4, 6);        // two are the same
console.log(array2);            // [10, 20, 30, 40, 'B', 'A', 'B']
array2.copyWithin(4, -1);       // two are the same
console.log(array2);            // [10, 20, 30, 40, 'B', 'A', 'B']
console.log(`${"#".repeat(30)}\n\n`);


// [3]
let array3 = [10, 20, 30, 40, 50, "A", "B"];
array3.copyWithin(1, -2);
console.log(array3);            // [10, 'A', 'B', 40, 50, 'A', 'B']
console.log(`${"#".repeat(30)}\n\n`);


// [4]
let array4 = [10, 20, 30, 40, 50, "A", "B"];
array4.copyWithin(1, -2, -1);
console.log(array4);            // [10, 'A', 30, 40, 50, 'A', 'B']
