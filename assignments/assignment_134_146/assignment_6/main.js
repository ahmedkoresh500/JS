/*
    * Assignment [6]:  =>> Done
    * regular expression challennge  =>> Done  =>> [Lesson 146]
*/

let url1 = 'elzero.org';
let url2 = 'http://elzero.org';
let url3 = 'https://elzero.org';
let url4 = 'https://www.elzero.org';
let url5 = 'https://www.elzero.org:8080/articles.php?id=100&cat=topics';

let regExp = /(https?:\/\/)?(www.)?\w+.\w+(:\d{4}\/\w+.\w+\?(\w+=\w+&?)+)?/ig; // Write Your Pattern Here

console.log(url1.match(regExp));
console.log(url2.match(regExp));
console.log(url3.match(regExp));
console.log(url4.match(regExp));
console.log(url5.match(regExp));