const header = document.querySelector(".title");
const quoteBox = document.querySelector("#quote");
const authorBox = document.querySelector("#book");
const quoteButton = document.querySelector("#quote-button");
const twitterButton = document.querySelector("#tweet-button");

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
        quoteBox.innerHTML = `${data.results[0].text} ${data.results[0].context}`;
        return data;
    })
    .catch = error => console.log(error);

    quoteButton.addEventListener("click", fetchThis);
    twitterButton.addEventListener("click", tweetQuote);

    tweetQuote = data => {
        data.getAttribute("href", `https://twitter.com/intent/tweet?text= ${data.results[0].text} ${data.results[0].context}`).getAttribute('target', '_blank');
    }
    
}

fetchThis();
