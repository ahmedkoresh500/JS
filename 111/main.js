/*
    * BOM: [localStorage] object
        =>> data stored in [storage] object to be used in my application.

        [1] window.localStorage.setItem("key", "value")     =>> [I] of [Item] must be uppercase
        [2] window.localStorage.getItem("key")              =>> [I] of [Item] must be uppercase
        [3] window.localStorage.removeItem("key")           =>> [I] of [Item] must be uppercase
        [4] window.localStorage.clear()                     =>> remove all items
        [5] window.localStorage.key(index)                  =>> to get [key] through it's [index]

    * to see localStorage in browser
        =>> console =>> application =>> localStorage

    * Info:
            [1] no expiration time
            [2] http & https        =>> localStorage in [http & https] is different
            [3] private tab         =>> localStorage removed when closing private tab
            [4] has [length] attribute

    * localStorage = window.localStorage        =>> [S] must be uppercase

    * not CSS selectors
    * CSS properties in localStorage             =>> must be [camelCase] method     =>> best solution

    * keys  =>> ordered by insertion
*/


console.log(window.localStorage);               // result = localStorage object
console.log(typeof window.localStorage);        // result = object
console.log(`${"#".repeat(30)}\n\n`);

// [1] window.localStorage.setItem("key", "value");
window.localStorage.setItem("color", "red");
window.localStorage.fontWeight = "bold";        // like object   =>> dot notation     =>> camelCase method  =>> best solution
window.localStorage["fontSize"] = "20px";       // like object   =>> bracket notation =>> camelCase method  =>> best solution


// [2] window.localStorage.getItem("key")
console.log( window.localStorage.getItem("color") );    // three are the same
console.log( window.localStorage.fontWeight );          // three are the same  =>> [dot notation]  
                                                            // never best solution  =>> assignment [1] = syntax error
console.log( window.localStorage["fontSize"] );         // three are the same  =>> [bracket notation]
console.log(`${"#".repeat(30)}\n\n`);


// [3] window.localStorage.removeItem("key");
// window.localStorage.removeItem("fontWeight");                // [1] remove one item

// [4] window.localStorage.clear();
// window.localStorage.clear();                                 // [2] remove all items


// [5] window.localStorage.key(index)
console.log( `key name = [${window.localStorage.key(0)}]` );    // to get [key] through it's [index]
console.log(`${"#".repeat(30)}\n\n`);


// has [length] attribute
console.log( window.localStorage.length )           // like object  =>> [dot notation]
console.log( window.localStorage["length"] );       // like object  =>> [bracket notation]



// set [background-color] to HTML element
//window.document.body.innerHTML.style.backgroundColor = window.localStorage.color;
let divElement = document.querySelector("div");     // by [tagName]
console.log(divElement);
divElement.style.backgroundColor = window.localStorage.color;

/*
    * element.attribute             =>> camelCase method  [className]
    * element.style.CSSAttribute    =>> camelCase method  [fontWeight]
*/


