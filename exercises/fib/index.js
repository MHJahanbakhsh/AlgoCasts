// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fib(n) {
    if (n === 0) return 0
    if (n === 1) return 1
    let current = 1
    let previous = 0
    for (let i = 2; i <= n; i++) {
        const temp = current
        current = previous + current
        previous = temp
    }
    return current
}
console.log(fib(9))

module.exports = fib;