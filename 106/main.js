/*
    * BOM: [location] object
        =>> contains [methods] & [properties]

    * open with live server     =>> to show results of this Lesson

        [1] location.href       SET/GET [URL | hash | file | mail]
        [2] location.host       [127.0.0.1:550]
        [3] location.protocol   [http] [https]
        [4] location.hash       [#sec02]

        [5] location.reload()
        [6] location.replace()   =>> related to [URL]    =>> two are different
        [7] location.assign()    =>> related to [URL]    =>> two are different

    * [href] = [hyper reference]   =>> in [<a>] anchor tag

    * location = window.location
*/

console.log(location);                      // result = location object
console.log(typeof window.location);        // result = object
console.log(`${"#".repeat(30)}\n\n`);



// [1] [location.href]:
console.log(window.location.href);          // [http://127.0.0.1:5500/106/index.html]
console.log(window.location.pathname);      // [/106/index.html]

// [a] URL:
// location.href = "https://www.google.com";    // not replace or delete current page  =>> from [history]

// [b] hash:
// go to hash in my website or another website
// location.href = "#div2";                        // go to div of hash [#div2]
console.log(`${"#".repeat(30)}\n\n`);



// [2] [location.host]
// [5500] = port number
console.log(location.host);         // result = 127.0.0.1:5500
console.log(location.hostname);     // result = 127.0.0.1


// [3] [protocol]
console.log(location.protocol);     // result = [http]
// location.protocol = "https";     // changing protocol to [https]
console.log(`${"#".repeat(30)}\n\n`);


// [4] [hash]
console.log(location.hash);             //             =>> result = nothing
// [http://127.0.0.1:5500/106/#div2]    // in URL      =>> result = ["#div2"]
                                                            // to check something
                                                            // to know from where you are coming


// [5] [location.reload()]:         =>> best try in console
// window.location.reload();        =>> uncomment = continuous reload


// [6] [location.replace()]                     // replace or delete current page  =>> from [history]
// location.replace("https://www.google.com")   // open [google] page directly

// [7] [location.assign()]                      // not replace or delete current page  =>> from [history]
// location.assign("https://www.google.com")    // open [google] page directly


/*
    * window.onload = function(){};
    * location.reload();
*/


