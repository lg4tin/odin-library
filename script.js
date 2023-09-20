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
}

function displayBooks() {
  container.innerHTML = '';
  for (let book in myLibrary) {
    //create div card
    let div = document.createElement('div');
    div.classList.add('card');
    div.textContent = myLibrary[book].info();
    //create title
    let h3 = document.createElement('h3');
    h3.textContent = myLibrary[book].title;
    div.appendChild(h3);
    //create author
    let author = document.createElement('p');
    author.textContent = myLibrary[book].author;
    div.appendChild(author);
    //create pages
    let pages = document.createElement('p');
    pages.textContent = myLibrary[book].pages;
    div.appendChild(pages);
    //create delete button
    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
      div.remove();
      myLibrary.splice(book, 1);
    })
    div.appendChild(deleteButton);

    container.appendChild(div);
  };
}

displayBooks();

const addBookButton = document.querySelector('.add-book');
//addBookButton.addEventListener('click', displayBooks);
addBookButton.addEventListener('click', addBook);

function addBook() {
  if (title.value === '') return;
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

