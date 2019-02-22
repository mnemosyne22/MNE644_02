/*eslint-env browser*/

// EVEN OR ODD

var i;

for (i = 1; i <= 16; i += 1) {
    if (i === 0 || i % 2 === 0) {
        window.console.log(i + " is even");
    } else if (i % 2 !== 0) {
        window.console.log(i + " is odd");
    }
}