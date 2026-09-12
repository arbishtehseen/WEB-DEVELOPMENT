// DOM - Selectors (Multiple Elements)
// querySelectorsAll()

const listItems = document.querySelectorAll('li');
console.log(listItems); //it'll create a NodeList

// you can use indexing to get one elemnt
console.log(listItems[0]);

// you can use highOrder Array methods on nodelist, which you cant 
// do on html collection.

// listItems.style.color = 'red'; // wont work because we are accessing style on nodelist
// whereas its sepcifically for one element.

listItems[0].style.color = 'red';

// but if wanna turn all red so use forEach.

// listItems.forEach((item, index) => {
    // item.style.color = 'red';

//    if(index == 1){
        // item.style.color = 'blue';
        // item.remove();

//    }

//    if(index == 0){
        // item.innerText = 'oranges';
//    }
// });

