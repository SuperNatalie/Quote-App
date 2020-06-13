const baseURLRandom = "https://quote-garden.herokuapp.com/api/v2/quotes/random";
const baseURLKeyword = "https://quote-garden.herokuapp.com/api/v2/quotes/"
const searchRandom = document.querySelector("#searchRandom");
const searchByKeyword = document.querySelector("#searchByKeyword");
const ausgabeText = document.querySelector("#ausgabeText");
const ausgabeAuthor = document.querySelector("#ausgabeAuthor");
const ausgabePicture = document.querySelector("#ausgabePicture");

searchRandom.addEventListener("click", e => {
    fetch(baseURLRandom)
    .then(respond => respond.json())
    .then(result => {
        console.log(result.quote.quoteText);
        const quoteText= result.quote.quoteText;
        ausgabeText.innerHTML = `<sup>„</sup><br>   ${quoteText}  <br><sup>“</sup>`;
        ausgabeAuthor.innerHTML = result.quote.quoteAuthor;
        ausgabePicture.innerHTML = `<img src="https://source.unsplash.com/random">`;
    });
    })
    searchByKeyword.addEventListener("click", e => {
        const q = document.getElementById("keyword").value;
        fetch(`${baseURLKeyword}${q}?page=1&limit=10`)
        .then(respond => respond.json())
        .then(result => {
            console.log(result.quotes[0].quoteText)
            // math.floor einfügen mit array.length
            ausgabeText.innerHTML = `<sup>„</sup><br> ${result.quotes[0].quoteText} <br><sup>“</sup>` ;
            ausgabeAuthor.innerHTML = result.quotes[0].quoteAuthor;
            ausgabePicture.innerHTML = `<img src="https://source.unsplash.com/featured/?${q}" width="300">`;
        });
        })

      