const header = document.querySelector('.title')
const quoteBox = document.querySelector('#quote')
const authorBox = document.querySelector('#book')
const thisBody = document.querySelector('body')
const quoteButton = document.querySelector('#quote-button')
const tweetButton = document.querySelector('#tweet-button')
const endPoint = 'https://uncovered-treasure-v1.p.mashape.com/random'

const fetchThis = async () => {
  try {
    const result = await fetch(endPoint, {
      headers: new Headers({
        Accept: 'application/json',
        'X-Mashape-Key': '2UsjshuNOImshdbT4jg9bKJnoNI1p1LoMYujsnVlcNzqy7hEkY'
      })
    })
    const data = await result.json()
    quoteBox.innerHTML = `${data.results[0].text} - ${data.results[0].context}`
    stringQuote = quoteBox.innerText
    fetchQuote()
    tweetQuote(stringQuote)
  } catch (error) {
    console.log(error)
  }
}

const tweetQuote = quote => {
  tweetButton.setAttribute('href', `https://twitter.com/share?text=${quote}`)
}

const fetchQuote = () => {
  quoteButton.addEventListener('click', fetchThis)
  quoteButton.addEventListener('click', changeColors)
}

const changeColors = () => {
  const colors = [
    '#330066',
    '#b0d996',
    '#ff66c1',
    '#1d4457',
    '#cc0000',
    '#f2de15',
    '#94cb71',
    '#8187ff',
    '#efd9a7',
    '#bada55',
    '#819699'
  ]
  const newColor = colors[Math.floor(Math.random() * colors.length)]
  thisBody.style.backgroundColor = newColor
}

fetchThis()
