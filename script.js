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

Book.prototype.toggle = function() {
  if (this.read == 'read') {
    this.read = 'not-read';
  } else if (this.read == 'not-read') {
    this.read = 'read'
  }
}

const hp = new Book('hp', 'jkr', 400, 'Read')

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function displayBooks() {
  container.innerHTML = '';
  for (let book in myLibrary) {
    //create div card
    let div = document.createElement('div');
    div.classList.add('card');
    //div.textContent = myLibrary[book].info();
    //create title
    let h3 = document.createElement('h3');
    h3.textContent = `Title: ${myLibrary[book].title}`;
    div.appendChild(h3);
    //create author
    let author = document.createElement('p');
    author.textContent = `Author: ${myLibrary[book].author}`;
    div.appendChild(author);
    //create pages
    let pages = document.createElement('p');
    pages.textContent = `Pages: ${myLibrary[book].pages}`;
    div.appendChild(pages);
    // create read
    let read = document.createElement('p');
    read.textContent = `Status: ${myLibrary[book].read}`;
    let toggleButton = document.createElement('button');
    toggleButton.textContent = 'Change Status';
    toggleButton.classList.add('toggle');
    toggleButton.addEventListener('click', () => {
      myLibrary[book].toggle();
      read.textContent = `Status: ${myLibrary[book].read}`;
      read.appendChild(toggleButton);
    });
    read.appendChild(toggleButton);
    div.appendChild(read);
    //create delete button
    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete');
    deleteButton.addEventListener('click', () => {
      div.remove();
      myLibrary.splice(book, 1);
      displayBooks();
    })
    div.appendChild(deleteButton);

    container.appendChild(div);
  };
}

//displayBooks();

const addBookButton = document.querySelector('.add-book');
//addBookButton.addEventListener('click', displayBooks);
addBookButton.addEventListener('click', addBook);
addBookButton.addEventListener("click", (event) => {
  event.preventDefault(); // We don't want to submit this fake form
});

function addBook() {
  if (title.value === '' || author.value === '' || pages.value == '') {
    alert('You must enter all info');
    return;
  };
  addBookToLibrary(new Book(title.value, author.value, pages.value, read.value))
  displayBooks();
  clearInputs();
}

function clearInputs() {
  title.value = '';
  author.value = '';
  pages.value = '';
  read.value = '';
}

const showButton = document.getElementById("showDialog");
showButton.addEventListener("click", () => {
  favDialog.showModal();
});