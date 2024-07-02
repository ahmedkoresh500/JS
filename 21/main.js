/*
    1- Arithmetic operators:
        1- [+]
        2- [-]
        3- [*]
        4- [/]
        5- [%]

        6- [exponentiation]
        7- [x++] post increment
        8- [++x] pre increment

    2- Assignment Operators:
        1- [=]
        2- [+=]
        3- [-=]
        4- [*=]
        5- [/=]
        6- [%=]

    3- Comparison operators:
        1- [>]
        2- [>=]
        3- [<]
        4- [<=]
        5- [==]     =>> compare value only
        6- [!=]
        7- [===]    =>> compare value and data type
        8- [!==]

    4- logical operators:
        1- [&& And]
        2- [|| Or]
        3- [! Not]
*/

let a = 1;

// four ways to add one =>> midterm question =>> DR abdelsalam
a++;
++a;
a += 1;
a = a + 1;

console.log(a);

a -= 1;         // a = a - 1
console.log(a);

a *= 4;         // a = a * 4
console.log(a);

a /= 2;         // a = a / 2
console.log(a);

a %= 3;         // a = a % 3
console.log(a);

