// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

//more interview friendly solution
function vowels(string) {
    let count = 0
    const vowels = ['a', 'e', 'i', 'o', 'u']
    for (let str of string.toLowerCase().split(' ')) {
        for (let s of str) {
            if (vowels.includes(s)) {
                count++
            }
        }
    }
    return count
}

//more concise solution with regex
function vowels2() {
    //match is either null or number of records found
    //g flag stands for not stop at first found
    //i is for case insensitive
    const matches = str.match(/[aeiou]/gi)
    matches ? matches.length : 0
}
module.exports = vowels;