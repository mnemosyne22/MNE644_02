/*eslint-env browser*/ 

// COINFLIP STREAK

var coinFlip;

do {
    coinFlip = Math.round(Math.random());    
    if (coinFlip === 1) {
        window.console.log("Tails.Game over!");
    } else {
       window.console.log("Heads"); 
    }
}  while (coinFlip === 0);
