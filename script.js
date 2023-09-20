const myLibrary = [];

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

const theHobbit = new Book('The Hobbit', 'Tolken', 500, 'I have not read');
const harryPotter = new Book('Harry Potter', 'J.K. Rowling', 300, 'I have read');

addBookToLibrary(theHobbit);
addBookToLibrary(harryPotter);

function displayBooks() {
  for (let book in myLibrary) {
    console.log(myLibrary[book].info());
    let div = document.createElement('div');
    div.textContent = myLibrary[book].info();
    document.body.appendChild(div);
  };
}

const addBookButton = document.querySelector('.add-book');
addBookButton.addEventListener('click', displayBooks);