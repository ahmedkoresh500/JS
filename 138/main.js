/*
    * regular expression:

    * character classes [part 1]:
        [1] .       =>> match all characters  =>> except [newLine] [lineTerminator] [\n]

        [2] \w      =>> match word characters [a-z, A-Z, 0-9 and underscore]  =>> except [special characters] [spaces] [\n]
        [3] \W      =>> match [special characters] [spaces] [\n]

        [4] \d      =>> match digits [0-9]
        [5] \D      =>> match anything except digits [0-9]

        [6] \s      =>> match whiteSpace [" "] [\n]
        [7] \S      =>> match anything except whiteSpace [" "] [\n]

    * [\n]  =>> [newLine] [lineTerminator]  [spaces]  [whiteSpace]
*/


let email = "\n O-z_@@ggY...net 1@1.com";


// [1]:
let emailRegExp = /./g;                     // [1] match all characters  =>> except [newLine] [lineTerminator] [\n]
console.log( email.match(emailRegExp) );    // result = more than one value  [' ', 'O', '-', 'z', '_', '@', '@', 'g', 'g', 'Y', '.', '.', '.', 'n', 'e', 't', ' ', '1', '@', '1', '.', 'c', 'o', 'm']
console.log(`${"#".repeat(30)}\n\n`);



// [2] [3]:
emailRegExp = /\w/g;                        // [2] except [special characters] [spaces] [\n]
console.log( email.match(emailRegExp) );    // result = more than one value  ['O', 'z', '_', 'g', 'g', 'Y', 'n', 'e', 't', '1', '1', 'c', 'o', 'm']

emailRegExp = /\W/g;
console.log( email.match(emailRegExp) );    // [3] [special characters] [spaces] [/n]
console.log(`${"#".repeat(30)}\n\n`);       // result = more than one value  ['\n', ' ', '-', '@', '@', '.', '.', '.', ' ', '@', '.']



// [4] [5]:
emailRegExp = /\d/g;                        // [4] match digits [0-9]
console.log( email.match(emailRegExp) );    // result = more than one value  ['1', '1']

emailRegExp = /\D/g;
console.log( email.match(emailRegExp) );    // [5] match anything except digits [0-9]
console.log(`${"#".repeat(30)}\n\n`);       // result = more than one value  ['\n', ' ', 'O', '-', 'z', '_', '@', '@', 'g', 'g', 'Y', '.', '.', '.', 'n', 'e', 't', ' ', '@', '.', 'c', 'o', 'm']



// [6] [7]:
emailRegExp = /\s/g;                        // [6] match whitespaces [" "] [\n]
console.log( email.match(emailRegExp) );    // result = more than one value  ['\n', ' ', ' ']

emailRegExp = /\S/g;
console.log( email.match(emailRegExp) );    // [7] match anything except whitespaces [" "] [\n]
console.log(`${"#".repeat(30)}\n\n`);       // result = more than one value  ['O', '-', 'z', '_', '@', '@', 'g', 'g', 'Y', '.', '.', '.', 'n', 'e', 't', '1', '@', '1', '.', 'c', 'o', 'm']



// let email = "\n O-z_@@ggY...net 1@1.com";
// EX [1]:
emailRegExp = /\w@/g;
console.log( email.match(emailRegExp) );    // result = more than one value  ['_@', '1@']

// EX [2]:
emailRegExp = /\w@\w/g;
console.log( email.match(emailRegExp) );    // result = more than one value  ['1@1']

// EX [3]:
emailRegExp = /\w@\w.com/ig;
console.log( email.match(emailRegExp) );    // result = more than one value  ['1@1.com']

// EX [4]:
emailRegExp = /\w@\w.(com|net)/ig;
console.log( email.match(emailRegExp) );    // result = more than one value  ['1@1.com']


