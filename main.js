const baseURLRandom = "https://quote-garden.herokuapp.com/api/v2/quotes/random";
const baseURLKeyword = "https://quote-garden.herokuapp.com/api/v2/quotes/:searchQuery?page=1&limit=10"

const searchRandom = document.querySelector("#searchRandom");
const searchByKeyword = document.querySelector("#searchByKeyword");
const ausgabeText = document.querySelector("#ausgabeText");
const ausgabeAuthor = document.querySelector("#ausgabeAuthor");

searchRandom.addEventListener("click", e => {
    fetch(baseURLRandom)
    .then(respond => respond.json())
    .then(result => {
        console.log(result.quote);
        ausgabeText.innerHTML = result.quote.quoteText;
        ausgabeAuthor.innerHTML = result.quote.quoteAuthor;

    });
    })

    // searchRandom.addEventListener("click", e => {
    //     const q = document.getElementById("keyword").value;
    //     fetch(`${baseURLKeyword}${q}`)
    //     .then(respond => respond.json())
    //     .then(result => {
    //         console.log(result.quote.quoteText)
    //         ausgabe.innerHTML = result.quote.quoteText;
    //     });
    //     })


      