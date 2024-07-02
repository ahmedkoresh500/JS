/*
    * regular expression:

    [1] Ranges: part [1]
        [1] (x|y)  =>> x or y
        [2] [0-9]  =>> [from 0 to 9]
        [3] [^0-9] =>> any character except [from 0 to 9]
        [4] examples

    [2] Ranges: part [2]
        [1] [a-z]
        [2] [^a-z]
        [3] [A-Z]
        [4] [^A-Z]
        [5] [abc]
        [6] [^abc]
*/

// [1] (x|y):
let tld = " Com Net Org Info code io";
let tldRegExp = /net|com|org|info/i;    // [1] without parentheses  =>> one value

console.log(tldRegExp);
console.log( tld.match(tldRegExp) );    // if found   =>> result = object   =>> array of objects
console.log(`${"#".repeat(40)}\n\n`);   // result = first value found in string [Com]


                                        // 
tldRegExp = /(org|com|info|net)/i;      // [2] with parentheses  =>> two values  =>> don't know why ??????
console.log( tld.match(tldRegExp) );    // if found   =>> result = object   =>> array of objects
                                        // result = first value found in string [Com, Com]

tldRegExp = /(org|com|info|net)/ig;
console.log( tld.match(tldRegExp) );    // result = more than one value
console.log(`${"#".repeat(30)}\n\n\n`); // ["Com", "Net", "Org", "info"]


// [2] [0-9]:   =>> [from 0 to 9]
let nums = "123456789021";
let numsRegExp = /[0-9]/;
console.log( nums.match(numsRegExp) );  // if found   =>> result = object   =>> array of objects
                                        // result = first value found in string [1]

numsRegExp = /[0-7]/g;
console.log( nums.match(numsRegExp) );  // result = more than one value  ['1', '2', '3', '4', '5', '6', '7', '0', '2', '1']

numsRegExp = /[0-2]/g;
console.log( nums.match(numsRegExp) );  // result = more than one value  =>> ['1', '2', '0', '2', '1']
console.log(`${"#".repeat(30)}\n\n\n`);



// [3] [^0-2]:   =>> any character except [from 0 to 9]
let notNums = "12345678901156";
let notNumsRegExp = /[^0-2]/g;
console.log( notNums.match(notNumsRegExp) ); // result = more than one value ['3', '4', '5', '6', '7', '8', '9', '5', '6']
console.log(`${"#".repeat(30)}\n\n\n`);



// EX [1]:
let specialNums = "1!2@3#4$56789";
let specialsRegExp = /[^0-9]/g;                     // [^]  =>> not
console.log( specialNums.match(specialsRegExp) );   // result = more than one value   =>> special characters
console.log(`${"#".repeat(30)}\n\n`);

// EX [2]:
let Practice = "os1 os1os os2 os8 os9os";
let PracticeRegExp = /os[5-9]/g;
console.log( Practice.match(PracticeRegExp) );      // result = more than one value ['os8', 'os9']

PracticeRegExp = /os[5-9]os/g;
console.log( Practice.match(PracticeRegExp) );      // result = more than one value ['os9os']
console.log(`${"#".repeat(30)}\n\n`);



// دول كودين بيطلعوا نفس النتيجه 

// EX [1]:
let mix = "1!2@3#4$5%678910";
let RegExp1 = /[^0-9]/g;
console.log( mix.match(RegExp1) );                  // result = more than one value  =>> special characters


// EX [2]:                                          // convert string into array
let array1 = mix.split("");                         // without equal =>> no results
let specialCharacters = [];
for (var i=0 ; i<array1.length ; i++){
    if (array1[i] >= 0 && array1[i] <= 9){
        continue;
    }else{
        //specialCharacters.push(mix[i]);       // two are the same
        specialCharacters.push(array1[i]);      // two are the same
    };
};
console.log(specialCharacters);


