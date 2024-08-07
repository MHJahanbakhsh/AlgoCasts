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



module.exports = steps;