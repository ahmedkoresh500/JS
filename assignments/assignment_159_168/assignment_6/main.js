/*
    * Assignment [6]: =>> Done
*/

function* generateNumbers(){
    let counter = 14;
    let index = 1;
    yield counter;
    while(true){
        counter = counter + 40 + (100 * index);
        yield counter;
        index +=2;
    };
};

let generator = generateNumbers();
console.log(generator.next()); // {value: 14, done: false}
console.log(generator.next()); // {value: 154, done: false}
console.log(generator.next()); // {value: 494, done: false}
console.log(generator.next()); // {value: 1034, done: false}
console.log(generator.next()); // {value: 1774, done: false}
console.log(generator.next()); // {value: 2714, done: false}
console.log(generator.next()); // {value: 3854, done: false}
console.log(generator.next()); // {value: 5194, done: false}
console.log(generator.next()); // {value: 6734, done: false}