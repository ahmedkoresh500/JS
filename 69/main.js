/*
    * scope =>> lexical scope

        * [function scope] can access [global scope]
        * [global scope] can't access [function scope]

        * [nested function] can access [main function], [global scope]
        * [main function] can't access nested function

    * search on google:
        =>> execution context
        =>> lexical environment
*/

let a = 30;

function Parent(){
    let a = 20;

    function Child(){
        let a = 10;
        console.log(`from Child ${a}`);             // print [1] = 10

        function GrandChild(){
            console.log(`from Grand-Child ${a}`);   // print [2] = 10
        };

        GrandChild();
    };

    Child();
};

Parent();