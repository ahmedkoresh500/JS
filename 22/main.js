/*
    * Assignment = Exercise
*/

// =========================================
// =========== Challenge 1 =================
// =========================================

let a = 10;
let b = "20";
let c = 80;

console.log(++a + +b++ + +c++ - +a++);
//         (11  +  20  +  80  -  11)  = (11+20+80-11) = 100
//      [++a=11][memory=11]      [+a++=11][memory=12]

// a = 12 , b = 21 , c = 81

console.log(++a +  -b      +     +c++ -   -a++   + +a);
//         ( 13 + (-21 )   +      81  -   (-13)  + 14) = (13-21+81+13+14) = 100
//         [++a=13][memory=13]  [+c++=81][memory=82]  [-a++=13][memory=14]  [+a=14][memory=14]

// a = 14 , b = 21 , c = 82

console.log(--c + +b   + --a  * +b++ - +b  * a  + --a  - +true);
//         (81  +  21  +   13 *  21  -  22 * 13 +   12 -  1)      = (81+21+(13*21)-(22*13)+12-1) = 100
//  [--c=81][memory=81]   [--a=13][memory=13]   [+b++=21][memory=22]  [--a=12][memory=12]

// a = 12 , b = 22 , c = 81



//==========================================
// =========== Challenge 2 =================
// =========================================

// only use variable value
// don't use variable twice

let d = "-100";
let e = "20";
let f = 30;
let g = true;

console.log(e * -d);                    // [2000]
console.log(-d + ++f + ++e * ++g );     // [173]

/*
    console.log(e + -d);    // result =>> 20100 =>> [+] considered as concatenation
    console.log(e * -d);    // result =>> 2000
*/

