const header = document.querySelector(".title");
let quoteBox = document.querySelector("#quote");
let authorBox = document.querySelector("#book");
const quoteButton = document.querySelector("#quote-button");
const tweetButton = document.querySelector("#tweet-button");

const fetchThis =  () => {
    fetch('https://uncovered-treasure-v1.p.mashape.com/random', {
        headers: new Headers({
        'Accept':'application/json',
        "X-Mashape-Key": "2UsjshuNOImshdbT4jg9bKJnoNI1p1LoMYujsnVlcNzqy7hEkY",
        })
    }
)
    .then(response => {
        if(response.ok){
            return response.json();
        }
    })
    .then (data => {
        quoteBox.innerHTML = `${data.results[0].text} - ${data.results[0].context}`;
        let newQuote = quoteBox.innerText;

        function tweetThis() {
            tweetButton.setAttribute('href', `https://twitter.com/share?text=${newQuote}`);
          }

        quoteButton.addEventListener("click", fetchThis);
        tweetButton.addEventListener("click", tweetThis); 
    })
    .catch = error => console.log(error);
}

fetchThis();
