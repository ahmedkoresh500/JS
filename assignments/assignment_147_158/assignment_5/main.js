/*
    * Assignment [5]:  =>> Done
*/

const myObj = {
    username: "Elzero",
    id: 100,
    score: 1000,
    country: "Egypt",
};



// Write Your Code Here
Object.defineProperties(myObj,{
    score:{
        writable: false,
    },
    id:{
        enumerable: false,
    },
});

console.log(Object.getOwnPropertyDescriptors(myObj).country);
console.log(Object.getOwnPropertyDescriptors(myObj).country.value);
// console.log(delete Object.getOwnPropertyDescriptors(myObj).country.value);   // not deleted =>> although true
console.log(delete myObj.country);                                              // deleted
console.log(`${"#".repeat(30)}\n\n`);



myObj.score = 500;
for (let prop in myObj) {
console.log(`${prop} => ${myObj[prop]}`);
}
console.log(myObj);

/*
// Needed Output
"username => Elzero"
"score => 1000"
{username: 'Elzero', score: 1000, id: 100}
*/