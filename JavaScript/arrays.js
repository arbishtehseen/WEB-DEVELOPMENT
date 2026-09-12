// Arrays = variables thar hold multiple values.

/* Constructing an array.
const numbers = new Array(1,2,3,4,5);
console.log(numbers);
                       */

const fruits = ['apples', 'oranges', 'pears'];

// In JS an array can hold multiple datatypes.
// const fruits = ['apples', 'oranges', 'pears', 10 , true];
// JS isn't statically typed.
// const name:string ; (no need to do ts).
// arrays are 0-based.

// if we only wanna access one of these.
console.log(fruits[1]);

// to add onto these.
fruits[3] = 'grapes';
console.log(fruits[3]);

fruits.push('mangoes'); // adds at the end.
fruits.unshift('kiwi'); // adds to the start.
fruits.pop(); // it deletes the last array element.
console.log(fruits);

// to check if smth is in array.
const found = Array.isArray(fruits); // true
const foun = Array.isArray('hello'); // false

// if we wanna get the index of certain element.
console.log(fruits.indexOf('oranges'));

// while using const we can add or remove things from array,
// but we cant just reassign the array.


