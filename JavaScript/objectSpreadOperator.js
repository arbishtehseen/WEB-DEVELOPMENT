const obj1 = {a : 1, b : 2};
const obj2 = {c : 3, d : 4};

// now if we wanna combine their properties into one obj.
const obj3 = {...obj1 , ...obj2};
// ... --> spread operator.

console.log(obj3);
