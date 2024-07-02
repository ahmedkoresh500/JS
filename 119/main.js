/*
    * destructuring:
        =>> extracting data from [array] [object] [map] into variables

    [1] destructuring arrays:       =>> let [] = array;
            * [let]   =>> if variables weren't declared

    [2] destructuring objects:      let {} = object;
            * [let]   =>> if variables weren't declared
*/

let User = {
    Name: "Ahmed",
    "Age": 24,
    Title: "Software Engineer",
    Country: "Egypt",
    Skills:{
        html: 70,
        css: 50,
    }
};

// variables must be like keys [object property name]

// [1] changing variables default name  [Name: n]
// [2] adding new variables             [Color: Co = ""Red]
// [3] destructuring nested object

// arrangement doesn't matter in [object] like [array]
let {Age: a, Name: n, Title = "Software Developer", Country, Color: Co = "Red", Skills:{html}} = User;
console.log(User);
console.log(`${"#".repeat(30)}\n\n`);

// console.log(Name);           // result = syntax error
console.log(n);                 // result = Ahmed

// console.log(Age);            // result = syntax error
console.log(a);                 // result = 24

console.log(Title);             // result = [Software Engineer] not [Software Developer]
console.log(Country);           // result = Egypt

// console.log(Color);          // result = syntax error
console.log(Co);                // result = Red             =>> not in object

console.log(User.Co);           // result = undefined       =>> not in object


console.log(html);              // HTML  =>> uppercase      =>> built-in keyword
// console.log(css);            // CSS   =>> uppercase      =>> built-in keyword    = syntax error
console.log(`${"#".repeat(30)}\n\n`);




// EX [2]
let {html: htmlOne, css: cssTwo} = User.Skills;
console.log(User);
console.log(htmlOne);
console.log(cssTwo);


