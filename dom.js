
// GET THE ELEMENT BY ID
// console.dir(document)
// examine the document object 
// console.log(document.forms);
//  console.log(document.links);
//  console.log(document.images);
//  console.log(document.getElementById("header-title"));
//  var headerTitle = document.getElementById("header-title");
// console.log(headerTitle);
// headerTitle.textContent = "Hello";
//  headerTitle.innerText = "Goodbye";
var header = document.getElementById('main-header');
header.style.borderBottom = 'solid 3px #000';



// GET THE ELEMENT  BY CLASS NAME
var items = document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);
items[1].textContent = 'Hello 2';
items[1].style.fontWeight = 'bold';
items[1].style.backgroundColor = 'yellow';
items[1].style.color = "green";