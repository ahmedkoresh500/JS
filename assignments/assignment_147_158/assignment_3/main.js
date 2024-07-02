/*
    * Assignment [3]: =>> 
*/

// Edit The Class
class User {
    #c;
    showData;
    constructor(username, card) {
        this.u = username;
        this.#c = card;
        this.showData = `Hello ${this.u}, your credit card number is ${parseInt(this.#c)}`;
    };
};

// Do Not Edit Anything Below

let userOne = new User("Osama", "1234-5678-1234-5678");
let userTwo = new User("Ahmed", "1234567812345678");
let userThree = new User("Ghareeb", 1234567812345678);

console.log(userOne.u);
console.log(userOne.showData);
// Hello Osama, Your Credit Card Number Is 1234-5678-1234-5678

console.log(userTwo.showData);
// Hello Ahmed, Your Credit Card Number Is 1234-5678-1234-5678

console.log(userThree.showData);
// Hello Ghareeb, Your Credit Card Number Is 1234-5678-1234-5678

console.log(userOne.c); // Prevent Accessing To Card Property Here
// Undefined