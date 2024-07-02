/*
    * regular expression:

    * character classes [part 2]:
        [1] [\b]    =>> match [beginning or end] of the word                    =>> not sentence
        [2] [\B]    =>> match anything except [beginning or end] of the word    =>> not sentence

    * test method:
        RegExp.test(variable)      =>> result = boolean (true or false)

*/

let names = " 1Spam  2Spam3Spam   Spam4Spam5   Osama   Aspamo";
console.log(names);
console.log(`${"#".repeat(30)}\n\n`);



// [1] [\b] [\B]
// EX [1]:
let namesRegExp = /Spam/ig;
console.log( names.match(namesRegExp) );        // result = more than one value  ['Spam', 'Spam', 'Spam', 'Spam', 'Spam', 'spam']
console.log(`${"#".repeat(30)}\n\n`);






// EX [2]:
namesRegExp = /\bSpam/ig;               // [1] match [beginning]
console.log( names.match(namesRegExp) );        // result = [Spam] only     =>> at beginning  ['Spam']

// EX [3]:
namesRegExp = /Spam\b/ig;               // [2] [or end] of the word
console.log( names.match(namesRegExp) );        // result = [Spam] only     => at end         ['Spam', 'Spam']
console.log(`${"#".repeat(30)}\n\n`);







// let names = " 1Spam  2Spam3Spam   Spam4Spam5   Osama   Aspamo";
// EX [4]:
namesRegExp = /\BSpam/ig;               // match anything except [beginning or end] of the word
console.log( names.match(namesRegExp) );        // result = [Spam] only     =>> not at beginning  ['Spam', 'Spam', 'Spam', 'Spam', 'spam']
console.log(`${"#".repeat(30)}\n\n`);

// EX [5]:
namesRegExp = /Spam\B/ig;               // match anything except [beginning or end] of the word
console.log( names.match(namesRegExp) );        // result = [Spam] only     =>> not at end  ['Spam', 'Spam', 'Spam', 'spam']







// EX [1]:
namesRegExp = /\bSpam|Spam\b/ig;            // two are the same
namesRegExp = /(\bSpam|Spam\b)/ig;          // two are the same
console.log( names.match(namesRegExp) );    // result = more than one value   ['Spam', 'Spam', 'Spam']
console.log(`${"#".repeat(30)}\n\n`);


// let names = " 1Spam  2Spam3Spam   Spam4Spam5   Osama   Aspamo";
// [2] [/pattern/modifiers.test(variable);]   =>> result = boolean (true or false)
console.log( namesRegExp.test(names) );             // [1]  result = boolean (true)
console.log( /(\bSpam|Spam\b)/ig.test(names) );     // [2]  result = boolean (true)

console.log( /(\bSpam|Spam\b)/ig.test("osama") );   // [3]  result = boolean (false)

console.log( /(\bSpam|Spam\b)/ig.test("1spam") );   // [4]  result = boolean (true)
console.log( /(\bSpam|Spam\b)/ig.test("spam1") );   // [5]  result = boolean (true)



/*
    * spammer:
        =>> شخص بيبعت رسائل دعائيه كتير
*/


