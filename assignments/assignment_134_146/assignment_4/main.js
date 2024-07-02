/*
    * Assignment [4]:  =>> Done

    * (?:\w+)       =>> (?:)    =>> not printed     =>> non-capturing subpattern  نمط فرعي غير ملتقط
                    =>> \w      =>> printed
*/


let url1 = "https://www-.goog-le.com.article/php";
//                            www   .   google     .com     .art   / php
let regExp1 = /https?:\/\/(?:[-\w]+\.)?([-\w]+)(?:\.\w+)(?:\.\w+)?\/.*/ig;
console.log( url1.match(regExp1) );

