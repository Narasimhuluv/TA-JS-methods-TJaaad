Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

#### Getting To Know String Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (4-5 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your own words and one sentence explain what this method does.

Example:

1. `charAt`

   - Parameter: (index) defaults to 0 - (number data type)
   - Return: character at specific index in the string (string data type)
   - Example:
     ```js
     let name = 'Arya Stark';
     name.charAt(2); //"y"
     let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance(4); // "i"
     let houseName = 'Starks';
     houseName.charAt(0); // "S"
     ```
   - `charAt` accepts a index (number data type) and return the character on that index in the string.

2. `toUpperCase`
    Parameter: (index) defaults to 0 - (number data type)
   - Return: character at specific index in the string (string data type)
   ```js
    name.toUpperCase(); // "ARYA STARK";
    sentence.toUpperCase(); // "A QUICK BROWN FOR JUMPED OVER LAZY DOG";
    houseName.toupperCase(); // "STARKS";
    ```
     ` toUpperCase`  accepts a index (number data type) and return the character on that index in the string.


3. `toLowerCase`

     Parameter: (index) defaults to 0 - (number data type)
   - Return: character at specific index in the string (string data type)
   ```js
    name.toLowerCase(); // "ARYA STARK";
    sentence.toLowerCase(); // "A QUICK BROWN FOR JUMPED OVER LAZY DOG";
    houseName.toLowerCase(); // "STARKS";
    ```
     ` toLowerCase`  accepts a index (number data type) and return the character on that index in the string.


4. `trim`
example :- 
```js 
let username = "    Narasimhulu    "
  username.trim() // "Narasimhulu"
  ```
  it will remove the spaces begining and ending of the string.

5. `trimEnd`
example :- 
```js 
let username = "Narasimhulu    "
  username.trimEnd() // "Narasimhulu"
  ```
  it will remove the spaces ending of the string


6. `trimStart`
example :- 
```js 
let username = "    Narasimhulu    "
  username.trimStart() // "Narasimhulu"
  ```
  it will remove the spaces starting of the string
7. `concat`

example :-
```js
let user = "chinna"
let name = "Narasimhulu"

user.concat(" is ",name)
```
it will add two varaible in a single sentences

8. `endsWith`
exmaple:-
```js

let person = "Narasimhulu";
person.endsWith("h") // false


9. `includes`

example :- 
```js

let persons = "chinna";
persons.includes("i") // true

```
10. `indexOf`

example :-
```js
let city = "bankok"
city.indexOf("n")  // 2


11. `lastIndexOf` //  it will take consider  index 0 from the ending of the word
12. `padEnd`
let village = "khajipet"
village.padEnd("20",".")

13. `padStart`
let village = "khajipet"
village.padStart("20",".")
14. `repeat`
let village = "khajipet";
village.repeat(4)
15. `replace`
let village = "khajipet";
village.replace("khajipet","chennur")
16. `slice`
sentance.slice(2,25) /// it will print the output index of 2 to 25 //  output :- "quick brown f"
17. `split`
sentance.split(" ") /// it will create a space between the words and letters . by using double quotes with space it will create spaces between the words. without space between the double quotes it will create a space between the letters in the word
18. `substring`
sentance.substring(0,10) // it will pring the data upto 10 index of the word
