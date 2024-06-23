const url = "https://api.quotable.io/random?maxLength=100";

// Selecting necessary elements
let quoteBox = document.querySelector('.quotes'); // Element to display the quote
let authorBox = document.querySelector('.authors'); // Element to display the author
let newBtn = document.querySelector('.new'); // Button to fetch a new quote
let tweetBtn = document.querySelector('.tweet'); // Button to tweet the quote
let notificationBtn = document.querySelector('.notification'); // Element for notifications

// Function to fetch a new quote from the API
let getQuote = async () => {
    console.log("Fetching Data...");
    try {
        // Fetch data from the API
        let response = await fetch(url);
        let data = await response.json();

        // Extract quote and author from the response
        let quote = data.content;
        let author = data.author;

        // Display the quote and author on the webpage
        quoteBox.innerHTML = `"${quote}"`;
        authorBox.innerHTML = `'${author}'`;

        // Show notification if quote and author are available
        if (quote && author) {
            notificationBtn.innerHTML = "New Quote Created.";
            notificationBtn.style.color = "green";
            notificationBtn.classList.add("show");
            setTimeout(() => {
                notificationBtn.classList.remove('show');
            }, 2000);
        }
    } catch (error) {
        console.error("Error fetching data:", error);
        // Show error notification
        notificationBtn.innerHTML = "Failed!...Please Try Again Later.";
        notificationBtn.style.color = "red";
        notificationBtn.classList.add("show");
        setTimeout(() => {
            notificationBtn.classList.remove('show');
        }, 2000);
    }
}

// Fetch a new quote when the DOM content is loaded
document.addEventListener('DOMContentLoaded', getQuote);

// Event listener for the new quote button
newBtn.addEventListener('click', getQuote);

// Event listener for the tweet button
tweetBtn.addEventListener('click', () => {
    // Open Twitter intent to tweet the quote and author
    window.open("https://twitter.com/intent/tweet?text=" + quoteBox.innerHTML + " ---by " + authorBox.innerHTML, "Tweet Window", "width=600,height=300");
});