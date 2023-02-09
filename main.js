let myLibrary = [];

function book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    return `${this.title}, ${this.author}, ${this.pages}, ${this.read}`;
  };
}

const book1 = new book("The Hobbit", "J.R.R. Tolkien", 300, "Read");
const book2 = new book("Harry Potter", "J.K. Rowling", 550, "Read");

function addBookToLibrary() {
  myLibrary.push(book);
}
