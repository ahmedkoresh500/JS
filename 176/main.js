/*

    * [Ajax]:  =>> asynchronous Javascript and XML
        [1] approach to use many technologies together [HTML, CSS, JS, DOM]
        [2] it uses [XMLHttpRequest] object to interact with the server
        [3] use:  =>> [send data], [fetch data] without page refresh

        [4] EX: [a] youtube studio
                [b] google drive
                [c] upload article photo
                [d] form check name         =>> asynchronous call to check userName in database

    * request and response =>> new XMLHttpRequest();
*/

let request1 = new XMLHttpRequest();
console.log(typeof request1);       // result = object
console.log(request1);              // result = [XMLHttpRequest] object
