/*
    * [this] keyword    =>> refers to parent

    * Global Scope = Global context     =>> [window] object
    * function scope = function context

    * search on google:
        =>> [strict mode]
*/

console.log( this );            // [this] keyword  =>> refers to parent
console.log( this === window ); // result = true

MyVar = 100;

console.log( window.MyVar );    // [MyVar] =>> property inside [window] object
console.log( this.MyVar );      // [MyVar] =>> property inside [window] object

console.log( "\n" );

// let MyVar = 200;             // syntax error =>> can't access [MyVar] before identification [initialization]
                                // line [16] [17] won't be printed

function SayHello(){
    console.log( this );        // [this] keyword  =>> refers to parent  = [window] object
    return this;                // [this] keyword  =>> refers to parent
}
console.log( SayHello() === window );


// access button in [index.html]
document.getElementById("cl").onclick = function(){     // anonymous function =>> function without FunctionName
    console.log( this );        // [this] keyword  =>> refers to parent  = html input
}
console.log( "\n" );


let User = {
    Name: "Ahmed",
    Age: 23,
    AgeInDays: function(){
        console.log( this );    // semicolon not colon
        return this.Age * 365;  // [this] keyword  =>> refers to parent  =>> [User] object
    },                          //  [User.Age * 365] = [this.Age * 365]
};

console.log( User.Age );
console.log( User.AgeInDays() + " Days" );      // must call methods with parentheses
