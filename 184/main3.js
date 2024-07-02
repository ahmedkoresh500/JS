/*
    * Promise. [all] [allSettled] [race]:
        [1] promise.all([array of promises]);
            =>> all promises resolved   =>> return array of all promises        =>>>> resolved applied
            =>> one promise rejected    =>> return rejected                     =>>>> rejected applied
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



// EX [3]: [two promises rejected]
let promise7 = new Promise( (resolved, rejected) => {
    setTimeout( () => {
        rejected( Error("the seventh promise") );                   // rejected applied only
    }, 2000);                                           // [time = 2]
} );

let promise8 = new Promise( (resolved, rejected) =>{
    setTimeout( () => {
        rejected( Error("the eighth promise") );                    // rejected applied only
    }, 1000);                                           // [time = 1]
} );

let promise9 = new Promise( (resolved, rejected) =>{
    setTimeout( () => {
        resolved("the ninth promise");                              // resolved applied only
    }, 3000);                                           // [time = 3]
} );



// [Promise.all().then()];
Promise.all([promise7, promise8, promise9])
.then(
    (resolvedValues) => console.log(resolvedValues)                // wait [1 second] not [3 seconds]
    ,
    (rejectedValue) => {
        console.log(`[all] rejected: ${rejectedValue}`);
        console.log(`${"#".repeat(10)}\n\n`);
    }
);

// [promise.allSettled().then()];
Promise.allSettled([promise7, promise8, promise9])
.then(
    (resolvedValues) => {
        console.log(resolvedValues);                // return object of all promises    =>>  resolved applied   =>> 3 cases  =>> object arranged by [written first]
        console.log(resolvedValues[0].reason);      // return object of all promises    =>>  resolved applied   =>> 3 cases  =>> object arranged by [written first]
        console.log(...resolvedValues);             // resolved = [.value]  =>> rejected = [.reason]
        console.log(`${"#".repeat(50)}\n\n`);       // object is iterable
    },
    (rejectedValues) => console.log(rejectedValues)
);

// [Promise.race().then();]
Promise.race([promise7, promise8, promise9])        // [race] before [all] [allSettled]
.then(                                              // [1] min time  [2] equal in time [written first]
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
        =>> two promises rejected   =>> return rejected first  [1] in time  [2] equal in time  [written first]

    [2] [allSettled]
            =>> return object of all promises  =>> resolved applied  =>> 3 cases
            =>> return object of all promises  =>> resolved applied  =>> 3 cases
            =>> return object of all promises  =>> resolved applied  =>> 3 cases

    [3] [race]
            =>> resolved or rejected        =>> doesn't matter
            =>> return first promise only   =>> [1] in time     [2] equal in time [rejected first] [written first]
                                                                                    [rejected applied]

    * [race] before [all] [allSettled]      =>> [1] min time    [2] equal in time [written first]
*/

