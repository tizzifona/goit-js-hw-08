import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const input = document.querySelector('.feedback-form input')
const textarea = document.querySelector('.feedback-form textarea');
const storage = 'feedback-form-state';
const formData = {};

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onTextareaInput, 500));

function onFormSubmit(e) {
    e.preventDefault();
    console.log(formData);
    e.currentTarget.reset();
    localStorage.removeItem(storage);
    
}

function onTextareaInput(e) { 
    formData.email = input.value;
    formData.message = textarea.value;
    localStorage.setItem(storage, JSON.stringify(formData));
}

populateTextarea();

function populateTextarea() {
    const savedData = JSON.parse(localStorage.getItem(storage));
    if(savedData?.email) {
        input.value = savedData.email;
        formData.email = savedData.email;     
    }
    if(savedData?.message) {
        textarea.value = savedData.message;
        formData.message = savedData.message;
    }
}
