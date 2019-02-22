/*eslint-env browser*/ 

// Coin Flip
/*
var coinFlip = Math.random();
var choice = window.prompt("Heads or Tails?");

if (coinFlip >= .5 && choice == "heads") {
    window.alert("The flip was heads, and you chose heads...you WIN!");
} else if (coinFlip >= .5 && choice == "tails") {
    window.alert("The flip was heads, but you chose tails...you lose.");
} else if (coinFlip < .5 && choice == "heads") {
    window.alert("The flip was tails, but you chose heads...you lose.");
} else if (coinFlip < .5 && choice == "tails") {
    window.alert("The flip was tails, and you chose tails...you WIN!");
}
*/
//OR
/*
var coinFlip = Math.round(Math.random());
var choice = window.prompt("Heads or Tails? \nHeads = 1 \nTails = 0");

if (coinFlip == 1 && choice == 1) {
    window.alert("The flip was heads, and you chose heads...you WIN!");
} else if (coinFlip == 1 && choice == 0) {
    window.alert("The flip was heads, but you chose tails...you lose.");
} else if (coinFlip == 0 && choice == 1) {
    window.alert("The flip was tails, but you chose heads...you lose.");
} else if (coinFlip == 0 && choice == 0) {
    window.alert("The flip was tails, and you chose tails...you WIN!");
}
*/
//OR BOOLEAN RESULT

var coinFlip = Math.round(Math.random());
var choice = window.prompt("Heads or Tails?");

if (coinFlip ==1 && choice == "heads") {
    window.alert("The flip was heads, and you chose heads...you WIN!");
} else if (coinFlip ==1 && choice == "tails") {
    window.alert("The flip was heads, but you chose tails...you lose.");
} else if (coinFlip == 0 && choice == "heads") {
    window.alert("The flip was tails, but you chose heads...you lose.");
} else if (coinFlip == 0 && choice == "tails") {
    window.alert("The flip was tails, and you chose tails...you WIN!");
}
