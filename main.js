const header = document.querySelector(".title");
let quoteBox = document.querySelector("#quote");
let authorBox = document.querySelector("#book");
const quoteButton = document.querySelector("#quote-button");
const tweetButton = document.querySelector("#tweet-button");
const endPoint = 'https://uncovered-treasure-v1.p.mashape.com/random';

const fetchThis = () => {
    fetch(endPoint, {
        headers: new Headers({
        'Accept':'application/json',
        "X-Mashape-Key": "2UsjshuNOImshdbT4jg9bKJnoNI1p1LoMYujsnVlcNzqy7hEkY",
        })
    }
)
    .then(response => {
        if(response.ok){
            return response.json()
        }
    })
    .then (data => {
        quoteBox.innerHTML = `${data.results[0].text} - ${data.results[0].context}`;
        stringQuote = quoteBox.innerText;
        tweetQuote(stringQuote);
    })
    .catch = error => console.log(error)
}

quoteButton.addEventListener('click', fetchThis);

let tweetQuote = quote => {
    tweetButton.setAttribute('href', `https://twitter.com/share?text=${quote}`);
}

fetchThis();

  
  
