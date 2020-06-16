const baseURLRandom = "https://quote-garden.herokuapp.com/api/v2/quotes/random";
const baseURLKeyword = "https://quote-garden.herokuapp.com/api/v2/quotes/"
const searchRandom = document.querySelector("#searchRandom");
const searchByKeyword = document.querySelector("#searchByKeyword");
const ausgabeText = document.querySelector("#ausgabeText");
const ausgabeAuthor = document.querySelector("#ausgabeAuthor");
const ausgabePicture = document.querySelector("#ausgabePicture");
const wrongOutput=document.querySelector(".wrong-output");
let counter = 0;
searchRandom.addEventListener("click", e => {
    document.getElementById("keyword").value = "";
    wrongOutput.innerHTML ="";
    fetch(baseURLRandom)
    .then(respond => respond.json())
    .then(result => {
        console.log(result.quote.quoteText);
        const quoteText= result.quote.quoteText;
        ausgabeText.innerHTML= `
        <img src="https://static.thenounproject.com/png/19278-200.png" class="zitat-oben" alt=" ${quoteText}"><br>
        <h1>${quoteText}</h1>   
        <img src="https://static.thenounproject.com/png/19278-200.png" class="zitat-unten" alt=" ${quoteText}">`;
        ausgabeAuthor.textContent = result.quote.quoteAuthor;
        ausgabePicture.innerHTML = `<img src="https://source.unsplash.com/random?sig=${counter++}" class="zufall-bild" width="300">`;
    });})
    searchByKeyword.addEventListener("click", e => {
        ausgabeText.innerHTML = "";
        ausgabePicture.innerHTML = "";
        ausgabeAuthor.innerHTML = "";
       const q = document.getElementById("keyword").value;
        if (q === ""){
            wrongOutput.innerHTML = `<h1 class="wrong">Please set your Keyword.</h1>`
        } 
        else {
            wrongOutput.innerHTML ="";
            fetch(`${baseURLKeyword}${q}?page=1&limit=10`)
            .then(respond => respond.json())
            .then(result => {console.log(result.quotes);
             const RandomNum = Math.floor(Math.random() * result.quotes.length);
            console.log(RandomNum);
            ausgabeText.innerHTML = `
                <img src="https://static.thenounproject.com/png/19278-200.png" class="zitat-oben" alt="zitat-oben"><br>
                <h1>${result.quotes[RandomNum].quoteText}</h1> 
                <img src="https://static.thenounproject.com/png/19278-200.png" class="zitat-unten" alt="zitat-unten">`;
                ausgabeAuthor.innerHTML = result.quotes[RandomNum].quoteAuthor;
                ausgabePicture.innerHTML = `<img src="https://source.unsplash.com/featured/?${q}?sig=${counter++}" class="zufall-bild" width="300">`;
            }
            );}})
    