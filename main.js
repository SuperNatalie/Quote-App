const baseURL = "https://quote-garden.herokuapp.com/api/v2/quotes/random";

const searchRandom = document.querySelector("#searchRandom");
const ausgabe = document.querySelector("#ausgabe");

searchRandom.addEventListener("click", e => {
    fetch(baseURL)
    .then(respond => respond.json())
    .then(result => {
        console.log(result.quote.quoteText)
        ausgabe.innerHTML = result.quote.quoteText;
    });
    })