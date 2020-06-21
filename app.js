var books = document.querySelectorAll('#book-list li .name');
console.log(books);


books.forEach(function(book){
  book.textContent += ' (title)'; 
});

const bookList = document.querySelector('#book-list');

console.log('the parent element is', bookList.parentElement); 

console.log(bookList.childNodes); //takes child text line breaks as well 

console.log(bookList.children); //takes child elements without line breaks 

console.log('book-list next sibling is:', bookList.nextSibling);

console.log('book-list next sibling is:', bookList.nextElementSibling);

console.log('book-list prev sibling is:', bookList.previousSibling);

console.log('book-list prev sibling is:', bookList.previousElementSibling);

bookList.previousElementSibling.querySelector('p').innerHTML +='<BR/>:>';

var h2 = document.querySelector('#book-list h2');
console.log(h2);

h2.addEventListener('click', function(e){
  console.log(e.target); 
  console.log(e);
});

//to get all the delete tags - 

// var btns = document.querySelectorAll('#book-list .delete');

// console.log(btns); 
// Array.from(btns).forEach(function(btn){
//   btn.addEventListener('click', function(e){
//     const li = e.target.parentElement;
//     li.parentNode.removeChild(li)

//   }); 
// });

//delete books 
const list = document.querySelector('#book-list ul');

list.addEventListener('click', function(e){
  if(e.target.className == 'delete'){
    const li = e.target.parentElement;
    list.removeChild(li);
  }
});

//add books 
//forms themselves emit a submit event

const addForm = document.forms['add-book'];
addForm.addEventListener('submit', function(e){
    e.preventDefault();
    const value = addForm.querySelector('input[type="text"]').value;
  
  //create elements 
  const li = document.createElement('li');
  const bookName = document.createElement('span');
  const deleteBtn = document.createElement('span');


  //grab the text content from the form and delete btn

  deleteBtn.textContent = 'delete';
  bookName.textContent = value;

  //add classes 

  bookName.classList.add("name");
  deleteBtn.classList.add("delete");

  //combine to structure we want and insert in to DOM by appending
  // to DOM
  li.appendChild(bookName);
  li.appendChild(deleteBtn);
  list.appendChild(li);

 
});

//hide books 
const hideBox = document.querySelector('#hide');
hideBox.addEventListener('change', function(e){
  if(hideBox.checked){
    list.style.display = "none";
  } else {
    list.style.display = "initial" 
  }
  
});

//filter books 
const searchBar = document.forms['search-books'].querySelector('input');
searchBar.addEventListener('keyup', function(e){
  const term = e.target.value.toLowerCase();
  const books = list.getElementsByTagName('li');
  Array.from(books).forEach(function(book){
      const title = book.firstElementChild.textContent; 
      if(title.toLowerCase().indexOf(term) != -1){
        book.style.display = 'block';
      } else {
        book.style.display = 'none';
      }
  });
}
);
