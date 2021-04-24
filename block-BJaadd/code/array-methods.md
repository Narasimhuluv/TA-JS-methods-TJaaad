Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

## Getting To Know Array Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (2-3 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your words what this method does.
6. Does it mutate the original value or not (check https://doesitmutate.xyz)

Example:

1. `concat`

   - Parameter: n (any) number of values (number, string, boolean, array, null, undefined, object and function etc)
   - Return: a single Array consisting of by all the values passed as parameters in the same order.
   - Example:
     ```js
     let numbers = [1, 2, 3];
     numbers.concat(4); //[1,2,3,4]
     let sentanceArray = 'A quick brown fox jumped over a lazy'.split(' ');
     sentanceArray.concat('dog').join(' '); //"A quick brown fox jumped over a lazy dog"
     let colors = ['red', 'green', 'blue'];
     colors.concat('black', 'red', 21, true); // ['red','green','blue','black', 'red', 21, true]
     ```
   - `concat` accepts n number of values and returns one array with all the values in same order. It does not change the original array.
   - No it does not mutate the original array

2. `join`



3. `flat` 
example :- 
```js
  let numbers = [1,2[3,4,5[6,7[8,9]]]];
  numbers.flat(infinity) ; //  [1, 2, 3, 4, 5, 6, 8, 9]

  ```

4. `push`
 
 ```js
 let colors = ["orange","red","white","green","blue"];
 colors.push("darkblue") // // output ["orange","red","white","green","blue","darkblue"];
 ///it will add last in the array of variable named called colors
```

5. `indexOf`

```js
colors.indexOf("white");  // it will search for the index of exact element which we have provided in parameter by use of indexOf  . then it will give output of exactly index number in array/
 //  output :- 2
 ```

6. `lastIndexOf`
```js
colors.lastIndexOf("darkblue"); // it will search for the index of exact element which we have provided in parameter by use of lastIndexOf. the index start with 0 at ending to start
//output :- -1
```
7. `includes`
 ```js
 colors.includes("green"); /// it will show the answer in console. it was true or not and it was existed or not
// output : - true
 ```
8. `reverse`
```js
colors.reverse() // it will print the varaible called colors. elements will print in reverse
// output : - ["darkblue","blue","green","white","red","orange"]
```
9. `every`


10. `shift`
```js
colors.shift(); /// it will remove the first element from the array.
// output :- ["red","white","green","blue"];
```
11. `splice
```js
colors.splice(1,3,"violet"); /// it will remove the second and third elements in the array and replace the color violet in array // output :-  ["orange","violet","green","blue"];
```
12. `find`
```js
  let findNumbers = [5,6,5,8,7,9];
  function double(num){
    return num > 3;
  }
  let finddouble = findNumbers.find(double)
  console.log(finddouble)

```

13. `unshift`
```js
colors.unshift("tomato"); // by using unshift it will add the first element in the array . index is 0;

```
14. `findIndex`
```js
  let findNumbers = [5,6,5,8,7,9];
  function double(num){
    return num ;
  }
  let finddouble = findNumbers.findIndex(double)
  console.log(finddouble)
```


15. `filter`
```js
 let filterNumbers = [ 8,5,6,9,7,1,2,3];
 function double(num,index,arr){
   console.log(num,index,arr)
   return num + 2;
 }
 let doublefilter = filterNumbers.map(double);
//  console.log(doublefilter)
```

16. `flat`

```js
  let numbers = [1,2[3,4,5[6,7[8,9]]]];
  numbers.flat(infinity) ; //  [1, 2, 3, 4, 5, 6, 8, 9]

```

17. `forEach`
```js
```
18. `map`
```js
let arrayNumbers = [9,8,7,4,5,6,1,2,3];
function double(num){
  return num * 2 
}
let doubleNumber = arrayNumbers.map(double)
console.log(doubleNumber)
```
19. `pop`
```js
colors.pop()// it will delete the last index of the array name called colors // output is :- let colors = ["orange","red","white","green","blue"];

```
20. `reduce`
```js
let reduceNumbers = [5,6,9,8,7,2];
reduceNumbers.reduce((acc,num) =>{
  return acc + num;
},2)

```
21. `slice`
```js
colors.slice(0,2) /// output : - ["orange","violet"];
/// By using slice method we can print the elements upto our requirement. we have to pass the parameters example : upto to where . if we use the only single parameter it will print the value upto end of the array. if we give 2 it will start from index 2 to end of the array.
```

22. `some`


