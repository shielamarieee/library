//DOM Elements
const addBookBtn = document.querySelector('.add-book-btn');
const modal = document.querySelector('.modal-container');
const modalCloseBtn = document.querySelector('.modal-close-btn');

const submitBtn = document.querySelector('.button');

//to pop-up modal 
addBookBtn.addEventListener('click', () => {
    modal.classList.add('active');
})

//to hide modal
modalCloseBtn.addEventListener('click', () => {
    modal.classList.remove('active');
})

submitBtn.addEventListener('click', () => {
    alert('nice');
})
