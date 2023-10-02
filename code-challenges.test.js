// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

const { array } = require("yargs")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a string and returns a string with a coded message. The coded message converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0.

// a) Create a test with expect statements using the variables provided.

const secretCodeWord1 = "Lackadaisical"
// Expected output: "L4ck4d41s1c4l"
const secretCodeWord2 = "Gobbledygook"
// Expected output: "G0bbl3dyg00k"
const secretCodeWord3 = "Eccentric"
// Expected output: "3cc3ntr1c"

// describe("codeMaker", (string) => {
//     it("takes in a string and converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0", () => {
//       expect(codeMaker(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
//       expect(codeMaker(secretCodeWord2)).toEqual("G0bbl3dyg00k")
//       expect(codeMaker(secretCodeWord3)).toEqual("3cc3ntr1c")
//     })
//   })

// b) Create the function that makes the test pass.

// Pseudo code:
// function name: codeMaker
// input: secret code words (string)
// output: string with a replaced by 4, e by 3, i by 1, and o by 0
// process: use javascript method .replace() to replace values within the string, use //gi as a global case insensitive indicator so all upper and lowercase letters will be replaced

// const codeMaker = (string) => {
//     var replaceA = string.replace(/a/gi, "4")
//     var replaceE = replaceA.replace(/e/gi, "3")
//     var replaceI = replaceE.replace(/i/gi, "1")
//     var replaceO = replaceI.replace(/o/gi, "0")
//     return  replaceO
// }



// --------------------2) Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.

// a) Create a test with expects statement using the variable provided.

const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]

const filterLetterA = "a"
// Expected output: ["Mango", "Apricot", "Peach"]
const filterLetterE = "e"
// Expected output: ["Cherry", "Blueberry", "Peach"]

// describe("letterFinder", (array, string) => {
//     it("takes in an array of words and a single letter and returns an array of all the words containing that particular letter", () => {
//       expect(letterFinder(fruitArray, filterLetterA)).toEqual(["Mango", "Apricot", "Peach"])
//       expect(letterFinder(fruitArray, filterLetterE)).toEqual(["Cherry", "Blueberry", "Peach"])
//     })
//   })

// b) Create the function that makes the test pass.

// Pseudo code:
// function name: letterFinder
// input: an array of words and a letter
// output: a new array with only the values from the first array that contain the letter
// process: .filter() method to filter out words that include a letter, .includes() menthod which returns true or false is a string includes a letter, create a function with .include() to add to .filter() to indicate which words to return in the new array. Added .toLowerCase() after original function only returned words with the included letter in lower case

// const letterFinder = (array, letter) => {
//     var words = array.filter(word => word.toLowerCase().includes(letter.toLowerCase()))
//     return words
// }



// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a "full house". A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.

const hand1 = [5, 5, 5, 3, 3]
// Expected output: true
const hand2 = [5, 5, 3, 3, 4]
// Expected output: false
const hand3 = [5, 5, 5, 5, 4]
// Expected output: false
const hand4 = [7, 2, 7, 2, 7]
// Expected output: true

describe("fullHouse", (array) => {
    it("that takes in an array of 5 numbers and determines whether or not the array includes 1 pair and 1 3 of a kind", () => {
      expect(fullHouse(hand1)).toEqual(true)
      expect(fullHouse(hand2)).toEqual(false)
      expect(fullHouse(hand3)).toEqual(false)
      expect(fullHouse(hand4)).toEqual(true)
    })
  })
// b) Create the function that makes the test pass.

// Pseudo code:
// function name: fullHouse
// input: array of numbers
// output: true or false
// process: count number of occurences of value within an array but creating an object to hold each value and the number of times it occures, use for loop to iterate through array and determine how many times each value occurs in the array, use conditionals to return boolean values of true or false the array has three of one value and two of another

const fullHouse = (array) => {
    const count = {}
    for (var i = 0; i < array.length; i++) {
        var value = array[i]
        if (count[value]) {
         count[value] += 1
        } else {
         count[value] = 1
        }
       }
        if (count[value] === 2) {
            pair = true
        } else if (count[value] === 3) {
            triple = true
        return true
        } else {
            return false
        } 
    // // I'm stuck on how to connect the counting method with the last part and also what to return in order to get the boolean value I need to make the test pass
}  
  

 
// console.log(fullHouse(hand1))
// output: { '3': 2, '5': 3 } This was the output when I only had the counting logic