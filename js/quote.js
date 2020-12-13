const newQuote = document.querySelector("#new-quote");
const quote = document.querySelector("#text");
const author = document.querySelector("#author");


let quoteObject;

//add quote when page loads
window.onload = getQuote;

// //change quote when button is clicked
// setTimeout('getQuote()', 5000);

//function to get and assign quote and author
function getQuote() {
    //fetch the data
    fetch('http://quotable.io/random')
        .then(res => res.json()) //response type
        .then(data => {
            quoteObject = data; // assign data to quoteObject
            //display quote
            quote.textContent = quoteObject["quoteText"];
            //display author
            author.innerHTML = quoteObject['quoteAuthor'];

        });
    //change quote when button is clicked
    setTimeout('getQuote()', 5000);
}
