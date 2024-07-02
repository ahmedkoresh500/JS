/*
    * object:
        1- intro and what is object
        2- testing [window] object
        3- accessing object


    * object الكائن الانسان:
        =>> contains methods and properties
        =>> properties = variables                  =>>  لون الشعر - لون العين
        =>> methods = functions = actions           =>>  بياكل ,  بيشرب , بينام

    * window                =>> object
    * window.location       =>> nested object
    * window.location.href  =>> property        'file:///c:/xampp/htdocs/JS_course/79/index.html'
    * window.location.assign("https://www.google.com")  =>> method  =>> not replace or delete current page  =>> from history or history entry
*/


// creating object =>> same as variable
let User = {
    Name: "Ahmed",              // properties
    Age: 38,                    // properties
    SayHello: function(){       // methods
        return `Hello`;         // return only
        console.log(`Hello`);   // result = ["Hello" + undefined]  =>> no print in console
    },
};                              // semicolon is a must

console.log(User.Name);
console.log(User.Age);
console.log( User.SayHello() );     // must call methods with parentheses