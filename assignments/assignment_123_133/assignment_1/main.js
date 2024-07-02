/*
    * assingnment [1]: [123:133] [D]
*/

let setOfNumbers = new Set().add(10);
setOfNumbers.add(20).add(setOfNumbers.size);

console.log(setOfNumbers);

/*
// doesn't work
let Iterator = setOfNumbers.keys();
console.log(Iterator.next().next().next().value);       // result = syntax error
*/


/*
// doesn't work
function getLastValue(set){
    let value;
    for(value of set){
        return value;       // result = first value         =>> [return] like [break]
    }
};
console.log( getLastValue(setOfNumbers) );
*/

console.log( [...setOfNumbers].pop() );                                         // three are the same
console.log( Array.from(setOfNumbers)[Array.from(setOfNumbers).length-1] );     // three are the same
console.log( new Array(...setOfNumbers)[new Array(...setOfNumbers).length-1] ); // three are the same


