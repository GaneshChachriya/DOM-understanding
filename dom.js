
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
// var titles = document.querySelectorAll('.title');
//  console.log(titles);
//  titles[0].textContent = 'Hello';
//  var item = document.querySelectorAll('li');
//  item[1].style.color = 'green';
//  var odd = document.querySelectorAll('li:nth-Child(odd)'); 
//  var even = document.querySelectorAll('li:nth-child(even)');
//  for(var i=0; i<odd.length; i++) {
//      odd[i].style.background = 'green';
//      even[i].style.background = '#ccc';
//  }

// traversing the DOM
// var itemList = document.querySelector('#items');
// // parentNode
//  console.log(itemList.parentNode);
//  itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentNode.parentNode.parentNode);

// // prarentElement
//  console.log(itemList.parentElement);
//   itemList.parentElement.style.backgroundColor = '#f4f4f4';
//  console.log(itemList.parentElement.parentElement.parentElement);

// // childNode
//  console.log(itemList.childNodes);
//  console.log(itemList.children);
//   console.log(itemList.children[1]);
//    itemList.children[1].style.backgroundColor = 'green';

// // // firstchild
//  console.log(itemList.firstChild);
// // // firstchildElement
//  console.log(itemList.firstElementChild);
//  itemList.firstElementChild.textContent = 'Hello 1';

// // lastChild
// console.log(itemList.lastChild);
// // // lastElement
//  console.log(itemList.lastElementChild);
//  itemList.lastElementChild.textContent = 'Hello 4';

// // // nextsibling
//  console.log(itemList.nextSibling);
// // // nextElementSibling
//  console.log(itemList.nextElementSibling);
// // // previoussibling
//  console.log(itemList.previousSibling);
// // // previousElementSibling
//  console.log(itemList.previousElementSibling);
//  itemList.previousElementSibling.style.color = 'green';

// // create Element
// //    create div
//  var newDiv = document.createElement('div');
//  // add class
//  newDiv.className = 'hello';
//  // add id
//  newDiv.id = 'hello1';
//  // add attr
//  newDiv.setAttribute('title', 'hello Div');
//  // create textnode
//  var newDivText = document.createTextNode('Hello World');
//  // add text to div 
//  newDiv.appendChild(newDivText);
//  var container = document.querySelector('header .container');
//   var h1 = document.querySelector('header h1');
//  console.log(newDiv);
//  newDiv.style.fontSize = '30px';
//  container.insertBefore(newDiv, h1);

// var parentNode = document.getElementById('items');
// parentNode.innerHTML = '<li>Hello World</li>' + parentNode.innerHTML;


var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
// var filter = document.getElementById('filter');
// for submitevent
form.addEventListener('submit', addItem);
// delete event
itemList.addEventListener('click', removeItem);
// add item
function addItem(e) {
   e.preventDefault();
   // get input value
   var newItem = document.getElementById('Item').value ;
   // create new li element
   var li = document.createElement('li');
   // add class
   li.className = 'list-group-item';
   // add text node with input value
   li.appendChild(document.createTextNode(newItem));
   // create del button element
   var deleteBtn = document.createElement('button');
   // add classes to del button
   deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
   // append text node
   deleteBtn.appendChild(document.createTextNode('X'));
   // append button to li
   li.appendChild(deleteBtn);
   // append li to list
   itemList.appendChild(li);
}
// remove item
function removeItem(e){
   if(e.target.classList.contains('delete')){
   if(confirm ('Are you sure?')){
      var li = e.target.preventElement ;
      itemList.removeChild(li);
   }
   }
}
// add filter
function filterItems(e) {
   // convert text to li
   var text = e.target.value.toLowerCase();
   // get lis
   var items = itemList.getElementsByTagName('li');
   // convert to an array 
   Array.form(items).forEach(function(item){
   var itemName = item.firstChild.textContent;
   if(itemName.toLowerCase().indexOf(text) != -1){
      item.style.display ='block';
   } else {
      item.style.display = 'none';
   }
   });
}











