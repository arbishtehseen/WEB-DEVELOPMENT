let output ;

output = document.all;
// we can access by index
// output = document.all[10];

// gives us entire html
output = document.documentElement;
output = document.head;
output = document.body;

// get children of head or body.
// in collection
output = document.head.children;   
output = document.body.children;

output = document.doctype;
output = document.domain;
output = document.URL;
output = document.characterSet;
output = document.contentType;

output = document.forms;
output = document.forms[0];
output = document.forms[0].id;
output = document.forms[0].method;
output = document.forms[0].action;

// document.forms[0].id = 'new-id';

/* 
output = document.links;
output = document.links[0];
output = document.links[0].href;
output = document.links[0].id = 'google-link'
*/
output = document.images;
output = document.images[0];
output = document.images[0].src;


// This will throw error, because on html collection we dont use --> forEach()
// document.forms.forEach((form) => console.log(form)) ;

// but if you really wanna use forEach() on html collection, then first you'll ve to convert it into an array.
const forms = Array.from(document.forms);
forms.forEach((form) => console.log(form)) ;

console.log(output);
