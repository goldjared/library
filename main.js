let myLibrary = [];

function Book([title, author, pages, read]) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function() {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
  };
};

function addBookToLibrary(info) {
  myLibrary.push(info)
};  

addBookToLibrary(book1);
addBookToLibrary(book2);


function displayBook(array) {
  const container = document.querySelector('.container');
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  array.forEach(obj => {
    const bookItem = document.createElement('div');
    bookItem.textContent = obj.info();
    container.appendChild(bookItem);
    console.log(obj.info());
  });

const formButton = document.querySelector('.add-form');
function formToggle(){
  if(form.style.display === 'none') {
    form.style.display = 'block';
  } else {
    form.style.display = 'none';
  };
}

formButton.addEventListener('click', formToggle);



