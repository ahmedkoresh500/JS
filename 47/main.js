/*
    *

*/

let Zero = 0;
let Counter = 3;
let My = ["Ahmed" , "Mazero" , "Elham" , "Osama" , "Gamal" , "Ameer"];


// first challenge
FirstChallenge = My.slice(Zero , ++Counter).reverse();
console.log( FirstChallenge );      // ["Osama" , "Elham" "Mazero" , "Ahmed"]


// console.log( Zero );             // 0
// console.log( Counter );          // 4


// second challenge
SecondChallenge = My.slice(++Zero , --Counter).reverse();
// SecondChallenge = My.slice(++Zero , --Counter).sort();       // =>> two are equal
console.log( SecondChallenge );     // ["Elham" , "Mazero"]


// console.log( Zero );             // 1
// console.log( Counter );          // 3


// third challenge
My.splice( --Zero , My.length , "Elzero" );
// My.splice( --Zero , Counter + Counter , "Elzero" );
console.log( '"' + My.join() + '"' );      // ["Elzero"]


//console.log( Zero );              // 0
//console.log(Counter);             // 4


// forth challenge
let R = My[Zero][++Counter];
let O = My[Zero][++Counter].toUpperCase();
console.log( '"' + R + O + '"' );                  // ["rO"]



/*

//1
console.log(my.slice(zero,++counter).reverse());

//2
 console.log(my.slice(my.shift(),--counter).sort());
OR 
console.log(my.slice(my.shift(),--counter).reverse());

//3
console.log(my.splice(zero,(counter+counter),"Elzero"))

*/
