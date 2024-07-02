/*
    * Assignment [1]:  =>> Done
*/

let myBirthdate = new Date("Nov 28 98");
let myYearsOld = new Date() - myBirthdate;
console.log(myBirthdate);
console.log(myYearsOld);
console.log(`${"#".repeat(20)}\n\n`);


myBirthdate = Date.parse("Nov 28 98");
console.log(`${myYearsOld} milliseconds`);
console.log(`${Math.ceil( myYearsOld / 1000 )} seconds`);
console.log(`${Math.ceil( myYearsOld / (1000 * 60) )} minutes`);
console.log(`${Math.ceil( myYearsOld / (1000 * 60 *60) )} hours`);
console.log(`${Math.ceil( myYearsOld / (1000 * 60 * 60 * 24) )} days`);
console.log(`${Math.ceil( myYearsOld / (1000 * 60 * 60 * 24 * 30) )} months`);
console.log(`${Math.ceil( myYearsOld / (1000 * 60 * 60 * 24 * 30 * 12) )} years`);