const todos = [
    {
        id : 1,
        text : 'take out trash',
        isCompleted : true
    },
    {
        id : 2,
        text : 'meeting with boss',
        isCompleted : true
    },
    {
        id : 3,
        text : 'dentist appointment',
        isCompleted : false
    }
];

// High Order Array Methods
// forEach(just loops through array),
// map(allows us to create new array from an array),
// filter(allows us to create a new array based on the condition)

//forEach
// these high order array methods takes in as parameter of function
// and in this call back function, it can take multiple parameteres,
// 1. Variable(that you wanna use as item)
 /* todos.forEach(function(todo) {
  console.log(todo.text);
});
*/

// map --> returns an array
/* const todoText = todos.map(function(todo){
    return todo.text;
});
console.log(todoText);
*/

// filter 
/* const todoCompleted = todos.filter(function(todo){
    return todo.isCompleted == true;
});
console.log(todoCompleted); */

const todoCompleted = todos.filter(function(todo){
    return todo.isCompleted == true;
}).map(function(todo){
    return todo.text;
});
