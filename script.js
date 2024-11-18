$(document).ready(async () => {
  // get quotes
  const data = await fetch("./quotes.json");
  const quotes = await data.json();
  const quotesLen = quotes.length;
  const currentHistory = [];
  // create an array for full history
  const unseenQuotes = JSON.parse(JSON.stringify(quotes));
  // Function to get a random number
  const getRandomNum = (history, length) => {
    let num = Math.floor(Math.random() * length);
    while (history.includes(num)) {
      num = Math.floor(Math.random() * length);
    }
    return num;
  }
  // TODO:
  // Show full history of generated quotes

  // show random quote on button click
  $('#new-quote').click(() => {
    const historyLen = currentHistory.length;
    if (historyLen === quotesLen) {
      currentHistory.splice(0, historyLen);
    }
    
    const randomNum = getRandomNum(currentHistory, quotesLen);
    const quote = quotes[randomNum];
    
    currentHistory.push(randomNum);
    // update full history
    
    $('#text').text(quote.quote);
    $('#author').text(`- ${quote.author}`);
    $('#tweet-quote').attr('href', `https://twitter.com/intent/tweet?text=${$('#text').text()}`);
  })
})