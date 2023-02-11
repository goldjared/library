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
let tempArray = [];
form.addEventListener('submit', (e) => {
  e.preventDefault();
  for(let i = 0; i < 4; i++) {
    tempArray.push(form.elements[i].value);
  }
  if(tempArray.length > 3) {
    let newBook = new Book(tempArray);
    addBookToLibrary(newBook);
    displayBook(myLibrary);
    newBook = undefined;
    tempArray = [];
    formToggle();
    form.reset();
    form.elements.value = undefined;
  }
});

function displayBook(libraryArray) {
  const container = document.querySelector('.container');
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  libraryArray.forEach(obj => {
    const bookItem = document.createElement('div');
    bookItem.classList.add('page');
    bookItem.textContent = obj.info();
    container.appendChild(bookItem);

    bookItem.dataset.index = libraryArray.indexOf(obj);
    
    const bookItemButton = document.createElement('button');
    bookItemButton.addEventListener('click', () => {
      bookItem.dataset.index = myLibrary.indexOf(obj);
      myLibrary.splice(bookItemButton.parentNode.dataset.index, 1);
      bookItemButton.parentNode.remove();
    });
    bookItem.appendChild(bookItemButton);
    bookItemButton.classList.add('delete-button');
    bookItemButton.textContent = 'X';
    bookItem.appendChild(bookItemButton);
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



