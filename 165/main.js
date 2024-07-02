/*
    * delegate generator function:

    * delegate  =>> نائب - مندوب - مفوض
*/

function* generateNumbers(){
    yield 1;
    yield 2;
    yield 3;
};

function* generateLetters(){
    yield "A";
    yield "B";
    yield "c";
};

function* generateAll1(){
    yield  generateNumbers();
    yield*  generateLetters();          // [*]  =>> to yield all data
    yield [4, 5, 6];
};

// EX [1]:
let generator1 = generateAll1();

console.log( generator1.next() );       // value = generateNumbers
console.log( generator1.next() );       // value = "A"
console.log( generator1.next() );       // value = "B"
console.log( generator1.next() );       // value = "C"
console.log( generator1.next() );       // value = Array(3)
console.log( generator1.next() );       // value = undefined
console.log(`${"#".repeat(30)}}\n\n`);


// EX [2]:
function* generateAll2(){
    yield*  generateNumbers();          // [*]  =>> to yield all data
    yield*  generateLetters();          // [*]  =>> to yield all data
    yield* [4, 5, 6];                   // [*]  =>> to yield all data
};

let generator2 = generateAll2();

console.log( generator2.next() );       // value = 1
console.log( generator2.next() );       // value = 2
console.log( generator2.next() );       // value = 3
console.log( generator2.next() );       // value = "A"
console.log( generator2.next() );       // value = "B"
console.log( generator2.next() );       // value = "C"
console.log( generator2.next() );       // value = 4
console.log( generator2.next() );       // value = 5
console.log( generator2.next() );       // value = 6
console.log( generator2.next() );       // value = undefined
console.log(`${"#".repeat(30)}\n\n`);


// EX [3]:
let generator3 = generateAll2();

console.log( generator3.next() );
console.log( generator3.next() );
console.log( generator3.next() );
console.log( generator3.next() );
console.log( generator3.return("Z") );  // to stop yield
console.log( generator3.next() );
console.log(`${"#".repeat(30)}\n\n`);


// [3] generators are iterable
for(let value of generateAll2()){
    console.log(value);
};

