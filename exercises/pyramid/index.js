// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'


//recursion solution.
//you have to figure out the formula for finding which indexes need to be pound
function pyramid(n, row = 0, stair = '') {
    if (row === n) {
        return
    }
    if (stair.length === 2 * n - 1) {
        console.dir(stair)
        pyramid(n, row + 1)
        return;
    }
    const middle = Math.floor((2 * n - 1) / 2)
    if (stair.length < middle - row || stair.length > middle + row) {
        stair += ' '
    } else {
        stair += '#'
    }
    pyramid(n, row, stair)

}
pyramid(6)
module.exports = pyramid;