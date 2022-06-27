//DOM Elements
const addBookBtn = document.querySelector('.add-book-btn');
const modal = document.querySelector('.modal-container');
const modalCloseBtn = document.querySelector('.modal-close-btn');

//to pop-up modal
addBookBtn.addEventListener('click', () => {
    modal.classList.add('active');
})

//to hide modal 
modalCloseBtn.addEventListener('click', () => {
    modal.classList.remove('active');
})
