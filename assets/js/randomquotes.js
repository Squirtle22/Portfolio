/***
 * `getRandomQuote` function
***/
function getRandomQuote() {
    let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    return randomQuote;
  };
  
  /*
   * setting colour of background
  */
  const colors = ['red', 'blue', 'violet', 'hotpink', 'brown', 'purple', 'green', 'orange', 'gray', 'babyblue'];
  
  /***
   * `printQuote` function
  ***/
  
  function printQuote() {
    let quote = getRandomQuote();
    let html = `<p class="quote"><strong>${quote.quote}</strong></p>
     <p class="source">${quote.source}`
    if (quote.citation !== undefined) {
      html += `<span class ="citation">${quote.citation}</span>`;
    }
    if (quote.year !== undefined) {
      html += `<span class = "year">${quote.year}</span>`;
    }
    if (quote.tag !== undefined) {
      html += `<span class = "tag">, ${quote.tag}</span>`;
    }
    `</p>`
  
    return (document.getElementById("quotes").innerHTML = html);
  }
  
  // generates a random color from the colors array on button click
  
  function getRandomColor() {
    return colors[Math.floor(Math.random() * 9)]
  }
  // interval to rotate between color and quotes, set for five seconds
  setInterval(printQuote, 86400);