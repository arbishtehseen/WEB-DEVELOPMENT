// Windows is the top object.
// in it lies document obj.
// & wen accessed document obj, we get html's attributes and all stuff

// Properties.
// wanna access the links.
console.log(document.links);

// by accessing document , we can also write not j read.
// document.body.innerHTML = '<h1> Hello World </h1>';

// There exists methods on Document.

// It writes any text in it at the end of the page.
document.write('Hello from js');

// Select elements in DOM.
console.log(document.getElementById('main')); 
const main = document.getElementById('main') ;
// main.innerHTML = '<h1> Hello from main </h1>';
document.querySelector('#main h1').innerText = 'Hello';

