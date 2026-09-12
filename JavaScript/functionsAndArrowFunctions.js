//  function  //
/* function addNums(num1 = 1, num2 = 1) {
    return num1 + num2;
}
    */
//  console.log(addNums(5,5));

// addNums(); 
// if we dont pass the parameters, we get NaN (not a number)
// with functions we can set default values for parameters.
// but if we do pass the parameters, then they are gonna overwrite the default values

// Arrow Functions  --> shorter n cleaner syntax for writing functions in ES6
/*
- if function has only one line then you can drop {}
const add = (a,b) => a + b;
here (a+b) is kinda being returned

- if there is only one paramter you can drop ()
const double = num => num*2;

Why Do We Use Them?
Reason 1: Cleaner, Less Verbose Code
In modern JavaScript, you pass functions inside other functions constantly (callback functions). 
Arrow functions keep your codebase readable.
*/

const addNums = (num1 = 1 , num2 = 2) => num1 + num2 ;
console.log(addNums(5,5));

const multiply = num => num*2;
console.log(multiply(2));

// they've lexical this. this keyword.
