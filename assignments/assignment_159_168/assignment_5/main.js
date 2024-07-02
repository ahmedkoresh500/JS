/*
    * Assignment [5]: =>> Done
*/


/*
// way [1]:
let start = new Date();
for(let i=0 ; i<100000 ; i++){
    console.log(i);
};
let end = new Date();
let duration = end - start;
console.log(`Loop took ${duration} milliseconds`);  // no floating point
*/

// way [2]:
let t0 = performance.now();
for(let i=0 ; i<100000 ; i++){
    console.log(i);
};
let t1 = performance.now();
let duration = t1 - t0;
console.log(`Loop took ${Math.ceil(duration)} milliseconds`);   // there is floating point