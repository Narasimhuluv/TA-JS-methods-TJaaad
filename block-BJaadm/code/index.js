let persons = [
  { name: 'John', grade: 8, sex: 'M' },
  { name: 'Sarah', grade: 12, sex: 'F' },
  { name: 'Bob', grade: 16, sex: 'M' },
  { name: 'Johnny', grade: 2, sex: 'M' },
  { name: 'Ethan', grade: 4, sex: 'M' },
  { name: 'Paula', grade: 18, sex: 'F' },
  { name: 'Donald', grade: 5, sex: 'M' },
  { name: 'Jennifer', grade: 13, sex: 'F' },
  { name: 'Courtney', grade: 15, sex: 'F' },
  { name: 'Jane', grade: 9, sex: 'F' },
  { name: 'John', grade: 17, sex: 'M' },
  { name: 'Arya', grade: 14, sex: 'F' },
];

// Create an array peopleName and store value of sex key from persons array
let peopleName = persons.map((persons) => {
  return  persons.name
})

// Create an array peopleGrade and store the value of grade key from persons array
let peopleGrade = persons.map((persons) => {
  return persons.grade
})

// Create an array peopleSex and store the value of sex key from persons array
let peopleSex = persons.map((persons) => {
  return persons.sex
})

// Log the filtered named of people in peopleName that starts with 'J' or 'P'
peopleName.filter((person) => {
  return person.startsWith("J") || person.srartsWith("P")
})

// Log the length of filtered named of people in peopleName that starts with 'A' and 'C'
// peopleName.filter((person) => {
//   let start = (person.startsWith("A")) || (person.endsWith("C"))
//   return start.length
// })
console.log(
  peopleName.filter((person) => 
person.startsWith("A") || person.endsWith("C")
).length
)

// Log all the filtered male ('M') in persons array
// sex =  peopleSex.filter((male) => {
//   return (male === "M")
// })
console.log(peopleSex.filter((male) => male.sex === "M"))

// Log all the filtered female ('F') in persons array
// let sexF = peopleSex.filter((female) => {
//   return (female ==="F");
// })
console.log(peopleSex.filter((female) => female.sex === "F"))


// Log all the filtered female ('F') whose name starts with 'C' or 'J' in persons array
// sexF.filter((female) => {
//   return female.startsWith("F")
// })
console.log(persons.filter((person) => persons.sex == "F").filter((person) => 
 person.name.startsWith("C") ||
 person.name.startsWith("J")
  )
)
// Log all the even numbers from peopleGrade array
peopleGrade.filter((even) =>{
  return even % 2 === 0
})

// Find the first name that starts with 'J' in persons array and log the object
persons.find((person) => person.name.startsWith("J"))

// Find the first name that starts with 'P' in persons array and log the object
persons.find((person) => person.name.startsWith("P"))

// Find the first name that starts with 'J', grade is greater than 10 and is a female
console.log(persons.find((person)=> 
person.name.startsWith("J") && 
person.grade > 100 &&
person.sex === "F")
)
// Filter all the female from persons array and store in femalePersons array
let femalePersons = persons.filter((person) => person.sex === "F") 

// Filter all the male from persons array and store in malePersons array
let femalePersons = persons.filter((person) => person.sex === "M") 
// Find the sum of all grades and store in gradeTotal
 peopleGrade.reduce((acc,cv) => {
    return acc + cv
}) / peopleGrade

// Find the average grade
peopleGrade.reduce((acc,cv) => {
  return acc + cv
}) / peopleGrade.length
// Find the average grade of male
let gradeMale = persons.filter((male) => male.sex == "M")
  gradeMale.reduce((acc , cv) => {
    return acc + cv.grade;
  })/ gradeMale.length
// Find the average grade of female
let gradeFemal = persons.filter((female) => female.sex == "M")
  gradeMale.reduce((acc , cv) => {
    return acc + cv.grade;
  })/ gradeFemale.length;
// Find the highest grade
[...peopleGrade].sort((a,b) => a-b).pop();

// Find the highest grade in male
[...gradeMale].sort((a,b) => a-b).pop();

// Find the highest grade in female
[...gradeFemale].sort((a,b) => a-b).pop();

// Find the highest grade for people whose name starts with 'J' or 'P'
let nameWithJandP = persons.filter((person) =>
   person.name.startsWith("J") || person.name.startsWith("P")
 )
let gradeWithNameJandP = nameWithJandP.map((person) => 
   person.grade
) ;

[...gradeWithNameJandP].sort((a,b) => a-b).pop();

// Sort the peopleGrade in ascending order and log the value of peopleGrade. Notice did the elements of peopleGrade got changed?
peopleGrade.sort((a,b) => a-b);
// Sort the peopleGrade in descending order
peopleGrade.sort((a,b) => b-a);

// Sort the peopleGrade in descending order this time you have to make sure you don't mutate the original array
let sortgrade = [...peopleGrade].sort((a,b) => a-b);
// Sort the array peopelName in ascending `ABCD..Za....z`
peopleName.sort();

// Sort the array peopelName in ascending `ABCD..Za....z`. Make sure not to mutate the array
[...peopleName].sort()
