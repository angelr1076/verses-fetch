const header = document.querySelector(".title");
let quoteBox = document.querySelector("#quote");
let authorBox = document.querySelector("#book");
let thisBody = document.querySelector("body");
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
        fetchQuote();
        tweetQuote(stringQuote);
    })
    .catch = error => console.log(error)
}

const tweetQuote = quote => {
    tweetButton.setAttribute('href', `https://twitter.com/share?text=${quote}`);
}

fetchThis();

let fetchQuote = () => {
    quoteButton.addEventListener('click', fetchThis);
    quoteButton.addEventListener('click', changeColors);
}

let changeColors = () => {
    const colors = ["#330066", "#b0d996", "#ff66c1", "#1d4457", "#cc0000", "#f2de15", "#94cb71", "#8187ff", "#efd9a7"];
    let newColor = colors[Math.floor(Math.random() * colors.length)];

    thisBody.style.backgroundColor = newColor;
}

  
  
