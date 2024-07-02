/*
    * destructuring:
        =>> extracting data from [array] [object] [map] into variables

    [1] destructuring arrays:       =>> let [] = array;
            * [let]  =>> if variables weren't declared

    [2] destructuring objects:      =>> let {} = object;
            * [let]  =>> if variables weren't declared

    [3] destructuring functions:
*/

const User = {
    Name: "Ahmed",
    "Age": 24,
    Skills: {
        html: 70,       // HTML  =>> uppercase   =>> built-in keyword
        css: 80,        // CSS   =>> uppercase   =>> built-in keyword
    },
};

// [1] function with [ordinal object]
function showDetails1(object){
    console.log( object.Name );             // result = Ahmed
    console.log( object.Age );              // result = 24
    console.log( object.Skills );           // result = object
    console.log( object.Skills.html );      // result = 70
    console.log( object.Skills.css );       // result = 80
}
showDetails1(User);
console.log(`${"#".repeat(30)}\n\n`);


// [2] function with [destructuring object]
function showDetails2( {Name, Age, Skills} = User ){
    console.log(Name);          // result = Ahmed
    console.log(Age);           // result = 24
    console.log(Skills);        // result = object              [1]
    console.log( Skills.html ); // result = 70
    // console.log(html);       // result = syntax error        [2]
};
showDetails2(User);
console.log(`${"#".repeat(30)}\n\n`);


// [3] function with [destructuring object]
function showDetails3( {Name, Age, Skills:{html, css}} = User ){
    console.log(Name);          // result = Ahmed
    console.log(Age);           // result = 24
    // console.log(Skills);     // result = syntax error        [1]
    console.log(html);          // result = 70
    console.log(css);           // result = 80                  [2]
};
showDetails3(User);