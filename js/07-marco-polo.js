/*eslint-env browser*/

// MARCO POLO

var i;
for (i = 1; i <= 100; i += 1) {
    if (i % 3 === 0 && i % 5 === 0) {
        window.console.log("Marco Polo!");
    } else if (i % 3 === 0) {
        window.console.log("Marco!");
    } else if (i % 5 === 0) {
        window.console.log("Polo!");
    } else {
        window.console.log(i);
    }
}