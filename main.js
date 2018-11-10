const header = document.querySelector(".title");
const quoteBox = document.querySelector("#quote");
const authorBox = document.querySelector("#book");
const quoteButton = document.querySelector("#quote-button");
const twitterButton = document.querySelector("#tweet-button");


    const fetchThis =  () => {
        fetch('https://uncovered-treasure-v1.p.mashape.com/random', {
            headers: new Headers({
            'Accept':'application/json',
            "X-Mashape-Key": "2UsjshuNOImshdbT4jg9bKJnoNI1p1LoMYujsnVlcNzqy7hEkY"
            })
        }
    )
        .then(function(response){
            if(response.ok){
                return response.json();
            }
        })
        .then(function(data){
            return data;
        })
        .catch = error => console.log(error);

        console.log(data.results[0].text);
        fetchThis();
    }
    

