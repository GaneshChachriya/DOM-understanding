
// GET THE ELEMENT BY ID
console.dir(document)
// examine the document object 
console.log(document.forms);
 console.log(document.links);
 console.log(document.images);
 console.log(document.getElementById("header-title"));
 var headerTitle = document.getElementById("header-title");
console.log(headerTitle);
headerTitle.textContent = "Hello";
 headerTitle.innerText = "Goodbye";
var header = document.getElementById('main-header');
header.style.borderBottom = 'solid 3px #000';



// GET THE ELEMENT  BY CLASS NAME
// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'Hello 2';
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'yellow';
// items[1].style.color = "green";
// items[2].style.backgroundColor = 'green'
// for(var i=0; i<items.length; i++) {
//     items[i].style.fontWeight = 'bold';
// }

//  GET ELEMENT BY TAG NAME
var li = document.getElementsByClassName('li');
console.log(li);
console.log(items[1]);
li[1].textContent = 'Hello 2';
li[1].style.fontWeight = 'bold';
li[1].style.backgroundColor = 'yellow';
li[1].style.color = "green";
li[2].style.backgroundColor = 'green'
for(var i=0; i<items.length; i++) {
    items[i].style.fontWeight = 'bold';
}