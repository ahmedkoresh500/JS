/*
    * assignment [1]: [179:188] [D]

    * to install local server from terminal [like xampp]:
        =>> npm install -g http-server

    * run with live server  =>> to avoid [CORS policy] error

    * [request1.onload]             =>> [Ajax]
    * [request1.onreadystatechange] =>> [Ajax]      =>> [responseText]  =>> syntax error
                                    =>> [promise]   =>> [rejected] function always applied        
*/



// EX [1]: [way 1]:  [using promise]  =>> Done
function getData1(apiLink){
    return new Promise( (resolved, rejected) => {                       // [annonymous function] [arrow function]
        let request1 = new XMLHttpRequest();
        request1.onload = function(){                                   // anonymous function
            if(request1.readyState === 4 && request1.status === 200){   // arrow function  =>> [responseText] = syntax error
                let JSObject = JSON.parse( this.responseText );
                resolved(JSObject);
            }else{
                rejected(Error("no data is found"));
            };
        };
        request1.open("GET", apiLink);
        request1.send();
    } );
}

getData1("test.json").then(
    (resolvedValue) => {
        for(let i=0; i<5 ; i++){
            let div = document.createElement("div");
            let h3 = document.createElement("h3");
            let p = document.createElement("p");
            let headTitle = document.createTextNode(resolvedValue[i].title);
            let pDescription = document.createTextNode(resolvedValue[i].description);

            h3.appendChild(headTitle);
            p.appendChild(pDescription);
            div.appendChild(h3);
            div.appendChild(p);
            document.body.appendChild(div);
        };
    },
    (rejectedValue) => {
        console.log( `errrrror: ${rejectedValue}` );
    }
);



// EX [1]: [way 2]:  [using promise]  =>> Done
function getData2(){
    return new Promise( (resolved, rejected) => {
        let request1 = new XMLHttpRequest();
        request1.onload = function(){                                   // anonymous function
            if(request1.readyState === 4 && request1.status === 200){   // arrow function  =>> [responseText] syntax error
                console.log( request1.readyState );
                console.log( request1.status );
                let JSObject = JSON.parse( this.responseText );
                resolved(JSObject);
            }else{
                rejected( Error("no data found") );
            }
        };
        request1.open("GET", "test.json", true);
        request1.send();
    } );
};

getData2().then(
    (resolvedValue) => {                                    // [anonymous function] [arrow function]
        for( let i=0 ; i<5 ; i++){                          // [anonymous function] [arrow function]
            let div = document.createElement("div");
            let h3 = document.createElement("h3");
            let p = document.createElement("p");
            let headTitle = document.createTextNode(resolvedValue[i].title);
            let pDescription = document.createTextNode(resolvedValue[i].description);

            h3.appendChild(headTitle);
            p.appendChild(pDescription);
            div.appendChild(h3);
            div.appendChild(p);
            document.body.appendChild(div);
        };
    },
    (rejectedValue) => {
        console.log( `arrrror: ${rejectedValue} ` );
    }
);


/*
// Assignment [2]:
async function getData3(){
    let httpResponse = await fetch("test.json");
    try{
        let JSObject = await httpResponse.json();
        console.log(JSObject);
    }catch(rejected){
        console.log(`reason ${rejected}`);
    }finally{

    };
};

getData3();
*/