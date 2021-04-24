// Use the below two arrays and practice array methods
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6, 9];
var strings = ['This', 'is', 'a', 'collection', 'of', 'words'];

/*
NOTE:
While using methods like push, pop, sort etc it mutates the original array.

Clone the array before using sort method: [...arr]

*/

// - Find the index of `101` in numbers
console.log(numbers.indexOf(101))

// - Find the last index of `9` in numbers

console.log(numbers.lastIndexOf(9))

// - Convert value of strings array into a sentance like "This is a collection of words"
// let emptyStrings = "";
// for(let i =0; i<strings.length; i++){
//   let string = strings[i];
//   emptyStrings += string + " "
// }
// console.log(emptyStrings)
strings.join(" ")


// - Add two new words in the strings array "called" and "sentance"
// strings.push("called")
// strings.push("sentance")

strings.splice(0,0,"called", "sentance")

// - Again convert the updated array (strings) into sentance like "This is a collection of words called sentance"
strings.join(" ")

// - Remove the first word in the array (strings)
console.log(strings.shift());
// - Find all the words that contain 'is' use string method 'includes'
console.log(strings.includes("is"))
// - Find all the words that contain 'is' use string method 'indexOf'
console.log(strings.indexOf("is"))
// - Check if all the numbers in numbers array are divisible by three use array method (every)
numbers.every(function(num){
  return num % 3 === 0
})
// -  Sort Array from smallest to largest
numbers.sort((a,b)=> a-b)
// - Remove the last word in strings
console.log(strings.pop())

// - Find largest number in numbers
numbers.every((a,b) => {
  return (a-b).pop();
})
// - Find longest string in strings
strings.sort((a,b) => {
  return (a.length - b.length).pop();
})
// - Find all the even numbers
  numbers.filter((num) => {
    return  num % 2 ===0;
  })

// - Find all the odd numbers
numbers.filter((num) => {
  return num % 2 != 0;
})

// - Place a new word at the start of the array use (unshift)
console.log(strings.unshift("new word"))

// - Make a subset of numbers array [18,9,7,11] 
console.log(numbers.slice(3,7))

// - Make a subset of strings array ['a','collection']
strings.slice(3,5)

// - Replace 12 & 18 with 1221 and 1881
// numbers.replace(12,1221)
numbers.splice(numbers.indexOf(12),1,1221)
numbers.replace(18,1881)

// - Replace words in strings array with the length of the word

// - Find the sum of the length of words using above question

// - Customers Array
var customers = [
  { firstname: 'Joe', lastname: 'Blogs' },
  { firstname: 'John', lastname: 'Smith' },
  { firstname: 'Dave', lastname: 'Jones' },
  { firstname: 'Jack', lastname: 'White' },
];
// - Find all customers whose firstname starts with 'J'
// console.log(customers.startsWith("J"))
customers.filter(customer => {
  return customer.firstname.startsWith("J")
})
// - Create new array with only first name
customers.map(customers => {
  return customers.firstname
})

// - Create new array with all the full names (ex: "Joe Blogs")
customer.map(customer => {
  return customer.firstname
})

// - Sort the array created above alphabetically
[...customers].sort();

// - Create a new array that contains only user who has at least one vowel in the firstname.
let vowelCustomer = customers.filter((customer) => {
  if(customer.firstname.toLowerCase().includes("a") ||
  customer.firstname.toLowerCase().includes("a") ||
  customer.firstname.toLowerCase().includes("a") ||
  customer.firstname.toLowerCase().includes("a") ||
  customer.firstname.toLowerCase().includes("a")
  ){
    return true
  }else{
    return false
  }
})