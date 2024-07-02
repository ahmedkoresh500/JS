/*
    * regular expression:

    * quantifiers [part 1]:
        [1] n+      =>> one or more
        [2] n*      =>> zero or more
        [3] n?      =>> zaro or one
*/

// [1]
let mails = "o@nn.sa   osama@gmail.com   elzero@gmail.net   osama@mail.ru";

// EX [1]:
let mailsRegExp = /\w@\w\w.sa/ig;
console.log( mails.match(mailsRegExp) );

// EX [2]:
mailsRegExp = /\w+@/ig;
console.log( mails.match(mailsRegExp) );

// EX [3]:
mailsRegExp = /\w+@\w+.(com|net)/ig;
console.log( mails.match(mailsRegExp) );

// EX [4]:
mailsRegExp = /\w+@\w+.\w+/ig;                  // all [top level domains]
console.log( mails.match(mailsRegExp) );
console.log(`${"#".repeat(30)}\n\n`);



// [2]
let nums = "0110 10 150 05120 0560 350 00";

// EX [1]:
let numsRegExp = /0\d0/ig;
console.log( nums.match(numsRegExp) );          // not found  =>> result = null

// EX [2]:
numsRegExp = /0\d+0/ig;                         // [1] one or more
console.log( nums.match(numsRegExp) );

// EX [3]:
numsRegExp = /0\d*0/ig;                         // [2] zero or more
console.log( nums.match(numsRegExp) );
console.log(`${"#".repeat(30)}\n\n`);


// [3]
let urls = "https://google.com   http://www.website.net   web.com";

let urlsRegExp = /https?/ig;                    // last letter [s]  =>> zero or one
console.log( urls.match(urlsRegExp) );

urlsRegExp = /https?:\/\//ig;
console.log( urls.match(urlsRegExp) );

urlsRegExp = /https?:\/\/(www.)?\w+.\w+/ig;     // [www.]   =>> zero or one
console.log( urls.match(urlsRegExp) );

urlsRegExp = /(https?:\/\/)?(www.)?\w+.\w+/ig;
console.log( urls.match(urlsRegExp) );

