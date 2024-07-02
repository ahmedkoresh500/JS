/*
    * generate infinite numbers:
        [1] generate infinite numbers
        [2] use return inside generator
*/

// [1] generate infinite numbers:
function* generateNumbers2(){
    let index = 0;
    while(true){
        yield index++;
    };
};

let generator2 = generateNumbers2();

console.log( generator2.next() );
console.log( generator2.next() );
console.log( generator2.next() );
console.log( generator2.next() );

console.log(`${"#".repeat(20)}\n\n`);



// [2] use return inside generator      =>> to stop yield
function* generateNumbers1(){
    yield 1;
    yield 2;
    return "A";                     // to stop yield
    yield 3;
    yield 4;
};

let generator1 = generateNumbers1();

console.log( generator1.next() );
console.log( generator1.next() );
console.log( generator1.next() );
console.log( generator1.next() );

