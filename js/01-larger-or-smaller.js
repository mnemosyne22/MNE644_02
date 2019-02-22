/*eslint-env browser*/ 

// Larger or Smaller

var x = window.prompt("Enter a number between 1 and 10");
var y = window.prompt("Enter a number between 1 and 10");

if (x > y) {
    window.document.write(x + " is the larger of the two.");
} else if (x < y) {
    window.document.write(y + " is the larger of the two.");
} else {
    window.document.write("These numbers are equal. Try again.");
}     
