$(document).ready(async () => {
  // get quotes
  const data = await fetch("./quotes.json");
  const quotes = await data.json();
  const unseenQuotes = JSON.parse(JSON.stringify(quotes));
  // Function to get a random quote
  const getRandomQuote = (quotes, index) => {
    return quotes[index];
  }
  // show random quote on button click
  $('#new-quote').click(() => {
    const quotesLen = unseenQuotes.length;
    if (quotesLen < 1) {
      unseenQuotes.push(...JSON.parse(JSON.stringify(quotes)))
    }
    
    const randomNum = Math.floor(Math.random() * quotesLen);
    const quote = getRandomQuote(unseenQuotes, randomNum);

    unseenQuotes.splice(randomNum, 1);
    
    $('#text').text(quote.quote);
    $('#author').text(quote.author);
    $('#tweet-quote').attr('href', `https://twitter.com/intent/tweet?text=${$('#text').text()}`);
  })
})