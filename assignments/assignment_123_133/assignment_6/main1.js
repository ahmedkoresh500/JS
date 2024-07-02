/*
    * assignment [6]: [123:133] [D]

    [1] assign [numbers in the array] counted into counter
    [2] remove numbers from array  [through filtering]
    
    [3] copy [filtered array] into new variable [copiedChars]

    [4] loop on [counter] variable
    [5] copy elements from old array  =>> and push them into new array  =>> based on counter
    [6] print new array [copied array]
*/

let counter = 0;
let chars = ["A", "B", "C", "D", "E", 10, 15, 6];
let copiedChars;

// [1] filtereing array  =>> filtered numbers counted into [counter]
chars = chars.filter( (ele) => {
    if(typeof ele === "string"){
        return ele;
    }else{
        counter++; 
    }
} );

// [2] copying [chars] array into [new variable] = [copiedChars]
copiedChars = [...chars];

// [3] loop on counter
for(let i=counter-1 ; i>=0 ; i--){      // counter still [3]  =>> not [2]
    copiedChars.unshift(chars[i]);
};

// [4] final output
console.log(copiedChars);
console.log(counter);                   // counter still [3]  =>> not [2]




// Needed Output
// ['A', 'B', 'C', 'A', 'B', 'C', 'D', 'E']


