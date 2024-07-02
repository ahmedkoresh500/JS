/*
    * intro and what is [regular expression]:
        [1] Email
        [2] IP
        [3] URL
        [4] phone

    * [parseInt()]  X  [.toString()]
*/

let string1 = "10 20 100 1000 5000";
let string2 = "AH1 AH12 AH123 AH123AH AH123AH123";

let array1 = string1.split(" ");            // convert string into array
console.log(array1);


array1 = array1.map( function(ele) {        // without equal =>> no results
    return parseInt(ele);                   // way [1]:  =>> [parseInt()]
    return +ele;                            // way [2]:  =>> [unary plus operator]
});
console.log(array1);

console.log( Array.from(string1, function(ele){return +ele;}) );    // space = [0]


// [1] [Email]
let invalidEmail = "ahmed@@@gmail...com";       // [gmail]:     =>> [domain] or [Email provider].
let validEmail = "o@nn.sa";                     // [com] [net] [org] [info]  =>> top level domain.

// [2] [IP]  =>> internet protocol
let IP = "192.168.2.1";             // IP [v.4]

// [4] [URL]
let url = "elzero.org";
url = "elzero.org/";
url = "http://elzero.org/";
url = "http://www.elzero.org/";
url = "https://elzero.org/";
url = "https://www.elzero.org/";
url = "https://www.elzero.org/?facebookid=dkfmdkfjdfkhdf";


