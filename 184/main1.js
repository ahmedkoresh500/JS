/*
    * Promise. [all], [allSettled], [race]:
        [1] promise.all([array of promises]);
            =>> all promises resolved   =>> return array of all promises        =>> resolved applied
            =>> one promise rejected    =>> return rejected                     =>> rejected applied
            =>> two promises rejected   =>> return rejected first  [1] in time  [2] equal in time [written first] in [codepage] not [promise]
                                                                                =>> rejected applied

        [2] promise.allSettled([array of promises]);
            =>> all promises resolved   =>> return object of all promises  =>> resolved applied  =>> 3 cases
            =>> one promise rejected    =>> return object of all promises  =>> resolved applied  =>> 3 cases
            =>> two promises rejected   =>> return object of all promises  =>> resolved applied  =>> 3 cases

        [3] Promise.race([array of promises]);
            =>> all promises resolved   =>> return first promise only  [1] in time  [2] equal in time [written first] in [codepage] not [promise]
            =>> one promise rejected    =>> return first promise only  [1] in time  [2] equal in time [written first] in [codepage] not [promise]
            =>> two promises rejected   =>> return first promise only  [1] in time  [2] equal in time [written first] in [codepage] not [promise]
                                                        [in time] resolved or rejected
*/


// EX [1]: [all promises resolved]
let promise1 = new Promise( (resolved, rejected) => {
    setTimeout( () => {
        resolved("the first promise");              // resolved applied only
    }, 3000);
} );

let promise2 = new Promise( (resolved, rejected) => {
    setTimeout( () => {
        resolved("the second promise");             // resolved applied only
    }, 1000);
} );

let promise3 = new Promise( (resolved, rejected) => {
    setTimeout( () => {
        resolved("the third promise");              // resolved applied only
    }, 3000);
} );




// [1] [promise.all([]).then();]
Promise.all([promise1, promise2, promise3])
.then(
    function(resolvedValues){
        console.log(resolvedValues);                // wait [3 seconds] not [6 seconds]
        console.log(resolvedValues[0]);             // resolved applied
        console.log(`${"#".repeat(10)}\n\n`);
    },
    (rejectedValue) => {
        console.log(rejectedValue);
    }
);

// [2] [promise.allSettled([]).then();]
Promise.allSettled([promise1, promise2, promise3])
.then(                                          // wait [3 seconds]
    function(resolvedValues){
        console.log(resolvedValues);            // return object of all promises    =>> resolved applied  =>> 3 cases
        console.log(resolvedValues[0].value);   // return object of all promises    =>> resolved applied  =>> 3 cases
        console.log(...resolvedValues);         // object is iterable

        console.log(`${"#".repeat(50)}\n\n`);
    },
    (rejected) => {
        console.log( `${rejected} \n\n` );
    }
);


// [3] [Promise.race().then();]
Promise.race([promise1, promise2, promise3])
.then(
    (resolved) => {
        console.log(`[race] resolved: ${resolved}`);// [1] [race] resolved or rejected  =>> doesn't matter
        console.log(`${"#".repeat(10)}\n`);         // return first promise only [1] in time [2] equal in time [written first] in [codepage] not [promise]  =>> resolved or rejected
    },
    (rejected) => {
        console.log(`[race] rejected: ${rejected}`);
    }
);


/*
    [1] [all] 
        =>> all promises resolved   =>> return array of all promises    =>> resolved applied
        =>> one promise rejected    =>> return rejected                 =>> rejected applied
        =>> two promises rejected   =>> return rejected first  [1] in time  [2] equal in time  [written first]

    [2] [allSettled]
            =>> return object of all promises  =>> resolved applied  =>> 3 cases
            =>> return object of all promises  =>> resolved applied  =>> 3 cases
            =>> return object of all promises  =>> resolved applied  =>> 3 cases

    [3] [race]
            =>> resolved or rejected  =>> doesn't matter
            =>> return first promise only   =>> [1] in time  [2] equal in time  
                                                            =>> [written first] in [codepage] not [promise]


    * [race] before [all] [allSettled]      =>> [1] in time   [2] equal in time 
                                                            =>> [written first] in [codepage] not [promise]
*/

// revision
