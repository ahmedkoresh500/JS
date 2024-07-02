/*
    * file => preferences => search [format on save] =>> sign check box

    * document.write(variable.repeat(n));
        * [n] = number of times to be repeated
*/

let Title = "Elzero", Description = "Elzero Web School", Date = "25/10";

let essay = `
    <div class="card">
        <h3> Hello ${Title} </h3>
        <p>${Description}</p>
        <span>${Date}</span>
    </div>
`;

document.write(essay.repeat(4));

