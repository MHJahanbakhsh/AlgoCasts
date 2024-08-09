// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [
//     [1,  2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]
//     ]



/*
 
+---+---+---+
| 1 | 2 | 3 |
+---+---+---+
| 8 | 9 | 4 |
+---+---+---+
| 7 | 6 | 5 |
+---+---+---+

*/

/*
Time Complexity: 𝑂(𝑁2)
Space Complexity: 𝑂(𝑁2)
*/

function matrix(n) {
    const ref = []
    let startRow = 0
    let startCol = 0
    let endRow = n - 1
    let endCol = n - 1
    let counter = 1
    for (let i = 1; i <= n; i++) {
        ref.push([])
    }

    while (startRow <= endRow && startCol <= endCol) {
        // Top row
        for (let i = startCol; i <= endCol; i++) {
            ref[startRow][i] = counter
            counter++
        }
        startRow++

        // Right column
        for (let i = startRow; i <= endRow; i++) {
            ref[i][endCol] = counter
            counter++
        }
        endCol--

        //Bottom Row
        for (let i = endCol; i >= startCol; --i) {
            ref[endRow][i] = counter
            counter++
        }
        endRow--

        // Start column
        for (let i = endRow; i >= startRow; i--) {
            ref[i][startCol] = counter;
            counter++
        }
        startCol++
    }
    return ref
}
matrix(4)

module.exports = matrix;