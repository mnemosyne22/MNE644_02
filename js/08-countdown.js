/*eslint-env browser*/

// COUNTDOWN

var num, i;

num = window.prompt("Enter a whole number greater than zero");

for (i = num; i > 0; i -= 1) {
    window.console.log(num -= 1);
}