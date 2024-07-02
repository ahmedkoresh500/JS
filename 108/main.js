/*
    * BOM: [history] object:

            =>> contains [methods] & [properties] deal with history

    * history = window.history
*/

console.log(history);                   // result = history object
console.log(typeof window.history);     // result = object


// try next in console
// ===================
// history.length       =>> number of pages i visited
// history.back()       =>> back-up one page
// history.forward()    =>> go-up one page      =>> no pages  =>> result = undefined

// history.go(0)        =>> current page
// history.go(-2)       =>> back-up two pages
// history.go(2)        =>> go-up two pages      =>> no pages  =>> result = undefined