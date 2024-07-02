/*
    * assignment [6]: [123:133] [D]
*/



let counter;
let chars = ["A", "B", "C", "D", "E", 10, 15, 6];
let copiedChars;

console.log(chars.sort());               // numbers at first

chars.forEach( (ele) => {
    if(typeof ele === "number"){
        counter = chars.indexOf(ele);
    }
} );


chars.copyWithin(0, counter+1, counter*2+2);        // [counter*2+2]  =>> not including end  =>> written
console.log(chars);


