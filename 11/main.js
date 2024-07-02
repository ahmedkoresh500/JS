/*
    * declaring variables:
        = creating and defining variables. 

    * syntax:
        keyword VarName = "value";
        var     user    = "ahmed";
    
    * keyword [var] is not a must

    * defining a variable two times
        =>> second value override first value

    * defining varivable first, then use it
        vise versa =>> undefined

    * loosely typed vs strongly typed
        =>> loosely typed =>> not to determine the type of variable data when declaring [int, string, ...]

*/

var user = "Ahmed";

var nationality = "egyptian",
    age = "37";

console.log(user);
console.log(nationality);
console.log(age);
console.log(hello);             // div [id="hello"] =>> global variable

hello.innerHTML = "option";     // [innerHTML] sensitive to   =>> upper and lower cases
