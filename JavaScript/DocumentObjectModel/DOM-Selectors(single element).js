DOM - Selectors (Single Element)

// document.getElementById()

console.log(document.getElementById('item-form'));
console.log(document.getElementById('item-form').id);
console.log(document.getElementById('item-form').getAttribute('id'));

// Set Attributes
document.getElementById('app-title').id = 'new-id';
document.getElementById('item-form').title = 'shopping list';

//document.getElementById('app-title').setAttribute('class', 'title');

const title = document.getElementById('item-form');
console.log(title);

// Get/Change content
console.log(title.textContent); // it'll get the content in it.
title.textContent = 'hello';
title.innerText = 'hello again'; 
title.innerHTML = '<strong> Shopping List </strong>'

// Change Styles (CSS)
title.style.color = 'red';
title.style.backgroundColor = 'black';
title.style.padding = '10px';
title.style.borderRadius = '10px';

// in CSS --> background-color, but in js we cant use hyphen rather, camel case.

// document.querySelector();
// we can select anything without any class or id or attribute

console.log(document.querySelector('h1'));
console.log(document.querySelector('#item-form'));
console.log(document.querySelector('.container'));
console.log(document.querySelector('input[type = "text"]'));

// pseudoselector.
console.log(document.querySelector('li:nth-child(2)').innerText);

const secondItem = document.querySelector('li:nth-child(2)');
secondItem.innerText = 'Apple Juice';
secondItem.style.color = 'red';

console.log(secondItem);

// Use these methods on other elements too.
const list = document.querySelector('ul');
console.log(list);

const frstItem = list.querySelector('li');
console.log(frstItem);


