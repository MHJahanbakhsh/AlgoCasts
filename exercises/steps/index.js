// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'


//soloution1 without recursion:
//imagine a table

/*    

# | - | -
---------
# | # | -
---------
# | # | #

*/


function steps(n) {

    for (let row = 0; row <= n; row++) {
        let string = ''

        for (let col = 0; col <= n; col++) {
            if (col <= row) {
                string += '#'
            } else {
                string += ' '
            }
        }
        console.log(string)

    }

}

// level up your games with recursion 
/*the logic is little different: if the length of string is    
less or equal to the row that we're working on,then we add a pound
otherwise we add a ' ' 
*/
function steps2(n, row = 0, stair = '') {
    if (n === row) return;
    if (n === stair.length) {
        console.log(stair)
        //go for next row
        steps2(n, row + 1)
        return
    }
    if (stair.length <= row) {
        stair += '#'
    } else {
        stair += ' '
    }
    //go for next column in current row
    steps2(n, row, stair)


}
steps2(4)

module.exports = steps;