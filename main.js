let myLibrary = [];


function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function() {
    return `${this.title} by ${this.author}, ${this.pages}, ${this.read}`;
  };
}

const book1 = new Book('The Hobbit', 'J.R.R Tolkien', 300, 'Read');
const book2 = new Book('The Hobbitses', 'J.R.R Tolkiensss', 300, 'Read');

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

}

displayBook(myLibrary);

