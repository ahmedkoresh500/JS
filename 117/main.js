/*
    * destructuring:
        =>> extracting data from [array] [object] [map] into variables.

    [1] destructuring arrays        =>> swap variables
    [1] destructuring arrays:       =>> let [] = array;
            * [let]   =>> if variables weren't declared
*/

let book = "video";
let video = "book";

/*
// [1] old way
let stash = book;       // stash = "video"

book = video;
video = stash;
*/


// [2] new way = destructuring way
[book, video] = [video, book];

console.log(book);
console.log(video);