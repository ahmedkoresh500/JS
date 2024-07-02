/*
    * Assignment [3]:  =>> Done
*/


let request1 = new XMLHttpRequest();
request1.onload = function(){
    if(request1.readyState === 4 && request1.status === 200){
        let JSONobject = this.responseText;             // two are the same
        // let JSONobject = request1.responseText;      // two are the same
        let mainData = JSON.parse(JSONobject);
        for(let i=0 ; i < mainData.length ; i++){
            mainData[i].category = "All";
        };
        console.log(mainData);
        let updatedData = JSON.stringify(mainData);
        console.log(updatedData);
    };
};
request1.open("GET", "articles.json", true);
request1.send();