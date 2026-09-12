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

// LOOPS - for.
// until the condition is false, it'll keep looping.
/* for(let i = 0 ; i < 10 ; i++) {
      console.log(i);
}

let i = 0;
while(i < 10){
    console.log(i);
    i++;
}
    */
/*
for(let i = 0 ; i < 3 ; i++){
    console.log(todos[i].id);
    console.log(todos[i].text);
    console.log(todos[i].isCompleted);
}
    */

// for of loops.
for(let todo of todos ){
    console.log(todo);
}
