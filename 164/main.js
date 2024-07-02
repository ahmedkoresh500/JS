/*
    * generator function:
        [1] run its code when required
        [2] return special object [generator object]
        [3] generators are iterable
*/

function* generateNumbers(){
    yield 1;
    alert("Hello after yield 1");
    yield 2;
    yield 3;
    yield 4;
};

let generator = generateNumbers();
console.log(typeof generator);              // result = object
console.log(generator);
console.log("\n");

console.log( generator.next() );            // [next()]  =>> object
console.log( generator.next() );            // alert work    =>> when executing second yield
console.log( generator.next() );            // [next()]  =>> object
console.log( generator.next() );            // [next()]  =>> object
console.log( generator.next() );            // [next()]  =>> object
console.log(`${"#".repeat(30)}\n\n`);


for(let value of generator){        // result = nothing   =>> generator variable yielded before
    console.log(value);
};

for( let value of generateNumbers() ){
    console.log(value);
};
console.log("\n");

