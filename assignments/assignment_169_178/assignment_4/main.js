/*
    * assignment [4]: [169:178] [D]
*/

let request1 = new XMLHttpRequest();
request1.onload = function(){
    if(request1.readyState === 4 && request1.status === 200){
        let JSONobject = this.responseText;
        let mainData = JSON.parse(JSONobject);
        for(let i=0 ; i < mainData.length ; i++){
            mainData[i].category = "All";
        };
        console.log(mainData);
        let updatedData = JSON.stringify(mainData);
        console.log(updatedData);

        // Assignment [4]
        mainData = JSON.parse(JSONobject);
        let mainDIV = document.createElement("div");
        mainDIV.setAttribute("id", "data");
        for(let i=0 ; i < mainData.length ; i++){
            console.log( mainData[i] );
            let nestedDIV = document.createElement("div");

            let h2Title = document.createElement("h2");
            let pBody = document.createElement("p");
            let pAuthor = document.createElement("p");
            let pCategory = document.createElement("p");

            h2Title.appendChild( document.createTextNode(mainData[i].title) );
            pBody.appendChild( document.createTextNode(mainData[i].body) );
            pAuthor.appendChild( document.createTextNode(`Author: ${mainData[i].author}`) );
            pCategory.appendChild( document.createTextNode(`Category: ${mainData[i].category}`) );

            nestedDIV.appendChild(h2Title);
            nestedDIV.appendChild(pBody);
            nestedDIV.appendChild(pAuthor);
            nestedDIV.appendChild(pCategory);

            mainDIV.appendChild(nestedDIV);
        };
        document.body.appendChild(mainDIV);
    };
};
request1.open("GET", "articles.json", true);
request1.send();