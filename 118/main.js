/*
    * destructuring:
        =>> extracting data from [array] [object] [map] into variables

    [1] destructuring arrays:       =>> let [] = array;
            * [let]   =>> if variables weren't declared

    [2] destructuring objects:      =>> let {} = object;
            * [let]   =>> if variables weren't declared
*/

// EX [1]:
let User = {
    Name: "Ahmed Koresh",
    "Age": "24",
    Title: "Software Engineer",
    Country: "Egypt",
};
console.log(User);                      // never ordered by insertion   =>> ordered ASC
console.log(`${"#".repeat(30)}\n\n`);

console.log("EX [1]:");
console.log( User.Name );                   // [1] [dot notation]
console.log( User.Age );
console.log( User.Title );
console.log( User["Country"] );             // [2] [bracket notation]
console.log(`${"#".repeat(30)}\n\n`);


// EX [2]:
// [***] destructuring object  =>> old way
let Name = User.Name;
let Name2 = User.Name;                  // [Name2] valid   =>> no error
let Age = User.Age;
let Title = User.Title;
let Country = User.Country;

console.log("EX [2]:");
console.log(Name);
console.log(Name2);
console.log(Age);
console.log(Title);
console.log(Country);
console.log(`${"#".repeat(30)}\n\n`);


// EX [3]:
// [***] destructuring object  =>> new way
({Name, Age, Title, Country} = User);       // [1] with parentheses = no error   =>> variables must be like keys [object property name]
// let {Name, Age, Title, Country} = User;  // [2] without parentheses  =>> [1] without let = syntax error
// let {Name, Age, Title, Country} = User;  //                          =>> [2] with let  =>> [1] variables declared before = syntax error
                                            //                                            =>> [1] variables not declared before = no error

console.log("EX [3]:");                     // variables must be like keys [object property name]
console.log(Name);                          // [Name2] not valid  = error
console.log(Age);
console.log(Title);
console.log(Country);
console.log(`${"#".repeat(30)}\n\n`);




// EX [4]:
User = {
    Name: "Ahmed Koresh",
    "Age1": 24,
    Title1: "Software Engineer",
    Country1: "Egypt",
};



// variables must be like keys [object property name]
let {Name1, Age1, Title1, Country1} = User;     // variables must be like keys [object property name]
console.log("EX [4]:");
console.log(Name1);         // result = undefined   =>> variables must be like keys [object property name]
console.log(Age1);          // result = undefined   =>> variables must be like keys [object property name]
console.log(Title1);        // result = undefined   =>> variables must be like keys [object property name]
console.log(Country1);      // result = undefined   =>> variables must be like keys [object property name]

