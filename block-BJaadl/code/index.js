let words = [
  'mystery',
  'brother',
  'aviator',
  'crocodile',
  'pearl',
  'orchard',
  'crackpot',
  'rhythm',
];

// - Write a function findLongestWord that takes an array of words and returns the longest word from the array. (Use above array "words" to test it). If there are 2 with the same length, it should return the first occurrence.
// words.sort((a,b) => a.length - b.length).pop();
let sorting = words.sort((a,b) => {
   return (a.length - b.length)
})
sorting.pop();
// - Convert the above array "words" into an array of length of word instead of word.
let wordsLength = words.map((w) => {
  return w.length
})

// - Create a new array that only contains word with atleast one vowel.
function checkvowel(words){
  return ( words.toLowerCase().includes("a") || 
          words.toLowerCase().includes("e") ||
          words.toLowerCase().includes("i") ||
          words.toLowerCase().includes("o") ||
          words.toLowerCase().includes("u")
  )
}
let vowelFilter = words.fiter((w) => checkvowel(w))

// - Find the index of the word "rhythm"
// console.log(word.indexOf("rhythm"))
words.findIndex((w) => w === "rhythm")

// - Create a new array that contians words not starting with vowel.
words.findIndex((w) => {
  return !checkvowel(w[w.length - 1])
})

// - Create a new array that contianse words not ending with vowel

let numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

// - Create a sumArray function that takes an array of number as a parameter, and calculate the sum of all its numbers
let sumArray = numbers.reduce((acc,init) => {
  return acc + init 
})

// - Make a new array that contains number multiplied by 3 like [6, 18, 27 ...]

let multipleNumbers = [3,6,9,12,15,18,21,27];
let multiplied = numbers.filter((num) => {
  return num % 3 === 0
})

// - Create a new array that contains only even numbers
let Numbers = [2,4,6,7,10,12,35,16,18,25,57,24,26,45,30];
let even = numbers.filter((num) => {
  return num % 2 === 0
})

// - Create  a new array that contains only odd numbers.
let odd = numbers.filter((num) => {
  return num % 2 != 0;
})

// - Create a new array that should have true for even number and false for odd numbers.
numbers.filter((num) => {
  if(num % 2 === 0) return true
  if(num % 2 != 0) return false
})

// - Sort the above number in assending order.
let sortedNumber = [...numbers].sort((a,b) => a-b);
// - Does sort mutate the original array?
`Yes its does`
// - Find the sum of the numbers in the array.
Numbers.reduce((acc , init) => {
  return acc + init
})

//- Write a function averageNumbers that receives an array of numbers and calculate the average of the numbers
function averageNumbers(array){
  let avg = array.reduce((acc,init) => {
    return (acc + init ) / array.length
  })
}
let strings = [
  'seat',
  'correspond',
  'linen',
  'motif',
  'hole',
  'smell',
  'smart',
  'chaos',
  'fuel',
  'palace',
];

// - Write a function averageWordLength that receives an array of words2 and calculate the average length of the words.
function averageWordLength(array){
return (words.map((w) => w.length).reduce((acc,cv) => {
return acc + cv;
}) / words.length
);
};
