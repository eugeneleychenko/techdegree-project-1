/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/	
const quotes = ["The stock market is filled with individuals who know the price of everything, but the value of nothing","You get recession, you get stock market declines. If you don’t understand that’s going to happen, then you are not ready and you will not do well in the markets.","An investment in knowledge pays the best interest.","I will tell you how to become rich. Close the doors. Be fearful when others are greedy. Be greedy when others are fearful.","A thousand point gain or a thousand point decline does not alter the fact that we are saving for retirement or building up funds for education", "People’s everyday routines will keep the stock market going.", "The stock market is the only market that when prices are slashed, clients run away!", "Know what you own, and know why you own it."]
const source = ["Phillip Fisher","Peter Lynch","Benjamin Franklin","Warren Buffett","Don Connelly","Don Connelly","Don Connelly","Peter Lynch"]
const citation = ["Wall Street Journal",,,,,"New York Times",,,]
const year = [1988,,,1992,,,,,]

/***
 * `getRandomQuote` function
***/
 function getRandomQuote()  {
 	var quoteRandom = Math.floor( Math.random() * length.quotes ) +1;
 	var finQuote = quotes[quoteRandom];
 	return finQuote; 
 	

 }



/***
 * `printQuote` function
***/
function printQuote()  {

document.querySelector("p.quote").textContent = getRandomQuote();
}





/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);