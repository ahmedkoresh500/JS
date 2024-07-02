/*
    * Assignment [1]: =>> Done
*/

class car {
    constructor(name, model,price){
        this.n = name;
        this.m = model;
        this.p = price;
        this.run = function(){
            return `car is running now`;
        };
    };
    stop(){
        return `car is stopped`;
    };
};

let car1 = new car("mercedes", 2020, 2000000);
let car2 = new car("mistubishi", 2019, 700000);
let car3 = new car("verna", 2010, 150000);

console.log(`car one name is ${car1.n}, and model is ${car1.m}, and price is ${car1.p}`);
console.log( car1.run() );