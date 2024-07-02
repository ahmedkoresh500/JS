/*
    * Assignment [2]: =>> Done
*/

class Phone {
    constructor(name, serial, price) {
        this.name = name;
        this.serial = serial;
        this.price = price;
    }
}

class Tablet extends Phone {
    constructor(name, serial, price, size){
        super(name, serial, price);
        this.s = serial;
        this.fullDetails = function(){
            return `${name} serial is ${this.serial} and size is ${size}`;          // in inheritance  =>> [name] = [this.name]  =>> no error
            return `${this.name} serial is ${this.serial} and size is ${this.s}`;   // in inheritance  =>> [size] = [this.s]  =>> no error
        };
    };
    fullDetails(){
        return `${name} serial is ${this.serial} and size is ${size}`;          // size = undefined  =>> outside constructor [this.s]
        return `${this.name} serial is ${this.serial} and size is ${this.s}`;   // in inheritance  =>> [name] = [this.name]  =>> no error
    };
};

let TabletOne = new Tablet("iPad", 100200300, 1500, 12.9);
let TabletTwo = new Tablet("Nokia", 350450650, 800, 10.5);
let TabletThree = new Tablet("LG", 250450650, 650);

console.log(`${TabletOne.fullDetails()}`);
// iPad Serial is 100200300 And Size Is 12.9

console.log(`${TabletTwo.fullDetails()}`);
// Nokia Serial is 350450650 And Size Is 10.5

console.log(`${TabletThree.fullDetails()}`);
// LG Serial is 250450650 And Size Is Unknown