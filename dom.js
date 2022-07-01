
// GET THE ELEMENT BY ID
// console.dir(document)
// // examine the document object 
// console.log(document.forms);
//  console.log(document.links);
//  console.log(document.images);
//  console.log(document.getElementById("header-title"));
//  var headerTitle = document.getElementById("header-title");
// console.log(headerTitle);
// headerTitle.textContent = "Hello";
//  headerTitle.innerText = "Goodbye";
// var header = document.getElementById('main-header');
// header.style.borderBottom = 'solid 3px #000';



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
// var li = document.getElementsByClassName('li');
// console.log(li);
// console.log(items[1]);
// li[1].textContent = 'Hello 2';
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = 'yellow';
// li[1].style.color = "green";
// li[2].style.backgroundColor = 'green'
// for(var i=0; i<items.length; i++) {
//     items[i].style.fontWeight = 'bold';
// }

// GET ELEMENT BY QUERYSELECTER

// var header = document.querySelector('#main-header');
//  header.style.borderBottom = 'solid 4px #ccc';
//  var input = document.querySelector('input');
//  input.value = 'Hello World';
//  var Submit = document.querySelector('input[type="Submit"]');
//  Submit.value = 'Send';
//  var item = document.querySelector('.list-group-item');
//  item.style.color = 'red';
//  var lastItem = document.querySelector('.list-group-item:last-child');
//  lastItem.style.color = 'blue';
//  var secondItem = document.querySelector('.list-group-item:nth-child(2)');
//  secondItem.style.color = 'coral';

//  QUERY SELECTORALL
var titles = document.querySelectorAll('.title');
 console.log(titles);
 titles[0].textContent = 'Hello';
 var item = document.querySelectorAll('li');
 item[1].style.color = 'green';
 var odd = document.querySelectorAll('li:nth-Child(odd)'); 
 var even = document.querySelectorAll('li:nth-child(even)');
 for(var i=0; i<odd.length; i++) {
     odd[i].style.background = 'green';
     even[i].style.background = '#ccc';
 }



