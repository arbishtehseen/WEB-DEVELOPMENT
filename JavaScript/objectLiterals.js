// object literals are key-value pairs.
const person = {
    firstName : 'john',
    lastName : 'Doe',
    age:  30 ,
    hobbies : ['music', 'movies', 'sports'],
    address : {
        street : '50 main st',
        city : 'boston',
        state : 'MA'
    }
}

console.log(person);

// if we wanna access the single value --> person.firstName.
console.log(person.lastName);

// you can log more than one thing by using comma.
console.log(person.hobbies[1]);

// This is Destructuring.
// we can pull things outta this.
const {firstName, lastName} = person;
console.log(firstName, lastName);

// but for embedded object like address.

const { address : {city}} = person;
console.log(city);

person.email ='john@email.com';
console.log(person);
