/*
    * Assignment [1]:  =>> Done
*/

let ip = "2001:db8:3333:4444:5555:6666:7777:8888";
let regExp = /\w{4}:\w{3}:(\w{4}:?)+/ig;

console.log( ip.match(regExp) );

