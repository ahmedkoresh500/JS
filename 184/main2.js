/*
    * Promise. [all], [allSettled], [race]:
        [1] promise.all([array of promises]);
            =>> all promises resolved   =>> return array of all promises        =>> resolved applied
            =>> one promise rejected    =>> return rejected                     =>> rejected applied
            =>> two promises rejected   =>> return rejected first  [1] in time  [2] equal in time [written first]   =>> rejected applied

        [2] promise.allSettled([array of promises]);
            =>> all promises resolved   =>> return object of all promises  =>> resolved applied  =>> 3 cases  =>> object arranged by [written first]
            =>> one promise rejected    =>> return object of all promises  =>> resolved applied  =>> 3 cases  =>> object arranged by [written first]
            =>> two promises rejected   =>> return object of all promises  =>> resolved applied  =>> 3 cases  =>> object arranged by [written first]

        [3] Promise.race([array of promises]);
            =>> all promises resolved   =>> return first promise only  [1] in time  [2] equal in time [rejected first] [written first]
            =>> one promise rejected    =>> return first promise only  [1] in time  [2] equal in time [rejected first] [written first]
            =>> two promises rejected   =>> return first promise only  [1] in time  [2] equal in time [rejected first] [written first]
                                                                                                        [rejected applied]
*/


// EX [2]: [one promise rejected]
let promise4 = new Promise( (resolved, rejected) => {
    setTimeout( () => {
        resolved("the fourth promise");           // resolved applied only
    }, 4000);
} );

let promise5 = new Promise( (resolved, rejected) => {
    setTimeout( () => {
        resolved("the fifth promise");            // resolved applied only
    }, 2000);
} );

let promise6 = new Promise( (resolved, rejected) => {
    setTimeout( () => {
        rejected( Error("the six promise") );      // rejected applied only
    }, 3000);
} );




// [Promise.all().then();]
Promise.all([promise4, promise5, promise6])
.then(
    (resolvedValues) => console.log(resolvedValues)         // wait [3 seconds] not [6 seconds]
    ,
    (rejectedValue) => {
        console.log(`[all] Rejected: ${rejectedValue}`);    // [2] rejected applied  =>> second case
        console.log(`${"#".repeat(10)}\n`);
    }
);


// [Promise.allSettled().then();]
Promise.allSettled([promise4, promise5, promise6])
.then(
    (resolvedValues) => {
        console.log(resolvedValues);            // return object of all promises  =>> resolved applied  =>> 3 cases
        console.log(resolvedValues[2].reason);  // return object of all promises  =>> resolved applied  =>> 3 cases
        console.log(...resolvedValues);         // object is iterable
    },
    (rejected) => console.log(rejected)
);


// [Promise.race().then();]
Promise.race([promise4, promise5, promise6])            // [race] before [all] [allSettled]
.then(
    (resolvedValues) => {
        console.log(`[race] resolved: ${resolvedValues}`);// resolved or rejected  =>> doesn't matter
        console.log(`${"#".repeat(10)}\n\n`);             // return first promise only  [1] in time  [2] equal in time [rejected first] [written first]
    },
    (rejected) => console.log(`[race] rejected: ${rejected}`)
);


/*
    [1] [all] 
        =>> all promises resolved   =>> return array of all promises    =>> resolved applied
        =>> one promise rejected    =>> return rejected                 =>> rejected applied
        =>> two promises rejected   =>> return rejected first  [1] in time  [2] equal in time  [written first]

    [2] [allSettled]
            =>> return obejct of all promises   =>> resolved applied   =>> 3 cases
            =>> return object of all promises   =>> resolved applied   =>> 3 cases
            =>> return object of all promises   =>> resolved applied   =>> 3 cases

    [3] [race]
            =>> resolved or rejected  =>> doesn't matter
            =>> return first promise only   =>> [1] in time  [2] equal in time [rejected first] [written first]


    * [race] before [all] [allSettled]      =>> [1] min time    [2] equal in time [written first]
*/

