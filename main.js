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

const form = document.querySelector('form');
let testArray = [];
form.addEventListener('submit', (e) => {
  e.preventDefault();
  for(let i = 0; i < 4; i++) {
    testArray.push(form.elements[i].value);
  }
  if(testArray.length > 3) {
    let newBook = new Book(testArray);
    addBookToLibrary(newBook);
    displayBook(myLibrary);
    newBook = undefined;
    testArray = [];
    formToggle();
    form.reset();
    form.elements.value = undefined;
  }
});

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
}

const formButton = document.querySelector('.add-form');
function formToggle(){
  if(form.style.display === 'block') {
    form.style.display = 'none';
  } else {
  form.style.display = 'block';
  }
}

formButton.addEventListener('click', formToggle);



