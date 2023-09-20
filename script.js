const myLibrary = [];
const container = document.querySelector('.container');

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;

  this.info = function() {
    return (`The ${title} by ${author}, ${pages} pages, ${read}`)
  }
}

function addBookToLibrary(book) {
  myLibrary.push(book);
  console.log(myLibrary);
}

function displayBooks() {
  container.innerHTML = '';
  for (let book in myLibrary) {
    let div = document.createElement('div');
    div.textContent = myLibrary[book].info();
    container.appendChild(div);
  };
}

displayBooks();

const addBookButton = document.querySelector('.add-book');
//addBookButton.addEventListener('click', displayBooks);
addBookButton.addEventListener('click', addBook);

function addBook() {
  addBookToLibrary(new Book(title.value, author.value, pages.value, read.value))
  displayBooks();
}

