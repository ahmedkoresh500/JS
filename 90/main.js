
/*
    * DOM: [create elements]    =>> product practice
                                =>> one hundred copy in the webpage

    * [output]:
        <div class="product-index">
            <h3> product title index </h3>
            <p> product description index </p>
        </div>
*/

for (let i=1; i<=100; i++){

    // [1] create elements
    let productDiv = document.createElement("div");
    let productHeading = document.createElement("h3");
    let productParagraph = document.createElement("p");


    // [2] add [product-index] class attribute to [productDiv]
    productDiv.className = `Product-${i}`;                              // add class attribute  =>> three are the same
    // ProductDiv.setAttribute("class", `product-${i}`);                // add class attribute  =>> three are the same
    // ProductDiv.setAttributeNode( document.createAttribute("class") );// add class attribute  =>> three are the same


    // [3] create ElementsText
    let headingText = document.createTextNode(`Product Title ${i}`);
    let paragraphText = document.createTextNode(`product description ${i}`);


    // [4] append [headingText] [paragraphText] into [productHeading] [productParagraph]
    productHeading.appendChild(headingText);
    productParagraph.appendChild(paragraphText);


    // [5] append [productHeading] [productParagraph] into [productDiv]
    productDiv.appendChild(productHeading);
    productDiv.appendChild(productParagraph);

    // [6] append [productDiv] into [body]
    document.body.appendChild(productDiv);  // body without document  = syntax error
}

// [repeat()]   =>> not suitable here
// [repeat()]   =>> with string only
// [for] loop   =>> must include all above code


