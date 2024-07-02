/*
    * object:
        1- intro and what is object
        2- [window] object
        3- access object

    * object:  [human is an object]
        =>> contains methods and properties
        =>> properties = variables                  =>>  لون الشعر - لون العين
        =>> methods = functions = actions           =>>  بياكل ,  بيشرب , بينام

    * window                =>> object
    * window.location       =>> nested object
    * window.location.href  =>> property        'file:///c:/xampp/htdocs/JS_course/79/index.html'
    * window.location.assign("https://www.facebook.com") =>> method =>> not replace or delete current page  =>> from history or history entry
*/


// create object =>> same way like variable
let User = {
    Name: "Ahmed",              // properties
    Age: 38,                    // properties
    sayHello: function(){       // methods
        return `Hello`;         // return only
        console.log(`Hello`);   // result = ["Hello" + undefined]
    },
}

console.log(User.Name)
console.log(User.Age);
console.log( User.sayHello() );     // must call methods with parentheses