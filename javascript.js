//DOM Elements
const addBookBtn = document.querySelector('.add-book-btn');
const modal = document.querySelector('.modal-container');
const modalCloseBtn = document.querySelector('.modal-close-btn');
const bookForm = document.querySelector('.add-book-form');
const bookGrid = document.querySelector('.book-grid');

//to pop-up modal 
addBookBtn.addEventListener('click', () => {
    modal.classList.add('active');
})

//to hide modal
modalCloseBtn.addEventListener('click', () => {
    modal.classList.remove('active');
})

//to put in an array
let myLibrary = [];

//constructor
function Book(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
}

// to push new Book object in the array
document.addEventListener('submit', (e) => {
    e.preventDefault();
    const status = document.querySelector('#status').checked;
    let book = new Book(title.value, author.value, pages.value, status);

    //push object in the array
    myLibrary.push(book);
    addBookToLibrary(book);
    //reset all input fields
    bookForm.reset();
    //hide modal
    modal.classList.remove('active');
    console.log(myLibrary);
})

function addBookToLibrary(book) {
    const bookCard = document.createElement('div');
    bookCard.className = 'book-card';

    const bookTitle = document.createElement('p');
    bookTitle.className = 'book-title';
    bookTitle.textContent = book.title;

    const bookAuthor = document.createElement('p');
    bookAuthor.className = 'book-author';
    bookAuthor.textContent = `by ${book.author}`;

    const bookPages = document.createElement('p');
    bookPages.className = 'book-pages';
    bookPages.textContent = `${book.pages} pages`;


    if(book.status === true) {
        statusBtn.className = 'fa-solid fa-book-open';
        bookCard.classList.add('read');

    } else {
        statusBtn.className = 'fa-solid fa-book';
    }

    bookCard.appendChild(bookTitle);
    bookCard.appendChild(bookAuthor);
    bookCard.appendChild(bookPages);
    bookGrid.appendChild(bookCard);
}