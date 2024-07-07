/*
    * Promise. [all] [allSettled] [race]:
        [1] promise.all([array of promises]);
            =>> all promises resolved   =>> return array of all promises        =>> resolved applied
            =>> one promise rejected    =>> return rejected                     =>> rejected applied
            =>> two promises rejected   =>> return rejected first  [1] in time  [2] equal in time 
                                                                                [written first] in [code page] not [promise]
                                                                                =>> rejected applied

        [2] promise.allSettled([array of promises]);
            =>> all promises resolved   =>> return object of all promises  =>> resolved applied  =>> 3 cases  =>> object arranged by [written first]
            =>> one promise rejected    =>> return object of all promises  =>> resolved applied  =>> 3 cases  =>> object arranged by [written first]
            =>> two promises rejected   =>> return object of all promises  =>> resolved applied  =>> 3 cases  =>> object arranged by [written first]

        [3] Promise.race([array of promises]);
            =>> all promises resolved   =>> return first promise only  [1] in time  [2] equal in time  [written first] in [code page] not [promise]
            =>> one promise rejected    =>> return first promise only  [1] in time  [2] equal in time  [written first] in [code page] not [promise]
            =>> two promises rejected   =>> return first promise only  [1] in time  [2] equal in time  [written first] in [code page] not [promise]
                                                        [in time] resolved or rejected
*/



// EX [3]: [two promises rejected]
let promise8 = new Promise( (resolved, rejected) => {
    setTimeout( () => {
        rejected( Error("the eighth promise") );                    // rejected applied only
    }, 2000);
} );

let promise7 = new Promise( (resolved, rejected) => {
    setTimeout( () => {
        rejected( Error("the seventh promise") );                   // rejected applied only
    }, 2000);
} );

let promise9 = new Promise( (resolved, rejected) => {
    setTimeout( () => {
        resolved("the ninth promise");                              // resolved applied only
    }, 2000);
} );



// [1] [Promise.all().then()];
Promise.all([promise7, promise8, promise9])
.then(
    (resolvedValues) => console.log(resolvedValues)                // wait [1 second] not [3 seconds]
    ,
    (rejectedValue) => {
        console.log(`[all] [rejected]: ${rejectedValue}`);
        console.log(`${"#".repeat(10)}\n\n`);
    }
);

// [2] [promise.allSettled().then()];
Promise.allSettled([promise8, promise7, promise9])
.then(                                          // wait [3 seconds]
    (resolvedValues) => {
        console.log(resolvedValues);            // return object of all promises    =>>  resolved applied   =>> 3 cases  =>> object arranged by [written first]
        console.log(resolvedValues[0].reason);  // return object of all promises    =>>  resolved applied   =>> 3 cases  =>> object arranged by [written first]
        console.log(...resolvedValues);         // [.value] -> resolved   [.reason] -> rejected
        console.log(`${"#".repeat(50)}\n\n`);   // object is iterable
    },
    (rejectedValues) => console.log(rejectedValues)
);

// [3] [Promise.race().then();]
Promise.race([promise7, promise8, promise9])        // [race] before [all] [allSettled]
.then(                                              // [1] in time  [2] equal in time [written first] in [codepage] not [promise]
    (resolved) => {
        console.log(`[race] resolved: ${resolved}`);
        console.log(`${"#".repeat(10)}\n\n`);
    },
    (rejected) => {
        console.log(`[race] rejected: ${rejected}`);
        console.log(`${"#".repeat(10)}\n\n`);
    }
);


/*
    [1] [all] 
        =>> all promises resolved   =>> return array of all promises    =>> resolved applied
        =>> one promise rejected    =>> return rejected                 =>> rejected applied
        =>> two promises rejected   =>> return rejected first  [1] in time  [2] equal in time [written first] in [codepage] not [promise]

    [2] [allSettled]
            =>> return object of all promises  =>> resolved applied  =>> 3 cases
            =>> return object of all promises  =>> resolved applied  =>> 3 cases
            =>> return object of all promises  =>> resolved applied  =>> 3 cases

    [3] [race]
            =>> resolved or rejected        =>> doesn't matter
            =>> return first promise only   =>> [1] in time     [2] equal in time 
                                                            => [written first] in [webpage] not [promise]

    * [race] before [all] [allSettled]      =>> [1] in time    [2] equal in time 
                                                            =>> [written first] in [codepage] not [promise]
*/
