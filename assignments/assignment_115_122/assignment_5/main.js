/*
    * assignment [5]: [115:122] [D]
*/


const game = {
    title: "YS",
    developer: "Falcom",
    releases: {
        "Oath In Felghana": ["USA", "Japan"],
        "Ark Of Napishtim": {
            US: "20 USD",
            JAP: "10 USD",
        },
        Origin: "30 USD",
    },
};


// Write Your Destructuring code Here

// [1] destructuring object
let {
    title: t,
    developer: d,
    releases:{
        "Oath In Felghana": [u, j],
        "Ark Of Napishtim": {
            US: u_price,
            JAP: j_price,
        },
        Origin: or,
    }
} = game;


// [2] Object.keys(objectName)              =>> to get keys [from object into array] as string
let keys = Object.keys(game.releases);      //  to get keys [from object into array] as string

let [o, a,] = keys;

/*
keys = keys.map( (key) => {
    return key.split(" ");          // the best solution
    return [key.split(" ")];
    return [...key.split(" ")];
} );

[ [o, , ], [a, , ], [] ] = keys;        // [1] [o] = [Oath] only   [2] [a] = [Ark] only
*/


// [3] result needed by elzero
console.log(`My Favourite Games Style Is ${t} Style`);
// result = [My Favourite Games Style Is YS Style]

console.log(`And I Love ${d} Games`);
// result = [And I Love Falcom Games]

console.log(`My Best Release Is ${o} It Released in ${u} & ${j}`);
// result = [My Best Release Is Oath In Felghana It Released in USA & Japan]

console.log(`Although I Love ${a}`);
// result = [Although I Love Ark Of Napishtim]

console.log(`${a} Price in USA Is ${u_price}`);
// result = [Ark Of Napishtim Price in USA Is 20 USD]

console.log(`${a} Price in Japan Is ${j_price}`);
// result = [Ark Of Napishtim Price in Japan Is 10 USD]

console.log(`Origin Price Is ${or}`);
// result = [Origin Price Is 30 USD]


