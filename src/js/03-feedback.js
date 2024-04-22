
import throttle from "/node_modules/lodash.throttle";


const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');

const saveToLocalStorage = () => {
    const formData = {
        email: emailInput.value, 
        message: messageInput.value
    };
    localStorage.setItem('feedback-form-state' , JSON.stringify(formData));
};
const loadFormLocalStorage = () => {
    const formData = JSON.parse(localStorage.getItem('feedback-form-state'));
    if (formData) {
        emailInput.value = formData.email || '';
        messageInput.value = formData.message || '';
    }
};

emailInput.addEventListener('input' , throttle(saveToLocalStorage, 500));
messageInput.addEventListener('input' , throttle(saveToLocalStorage, 500));

window.addEventListener('DOMContentLoaded' , loadFormLocalStorage);

form.addEventListener('submit' , (event) => {
    event.preventDefault();
    const formData = JSON.parse(localStorage.getItem('feedback-form-state'));
    console.log('Form data submitted:' , formData);
    localStorage.removeItem('feedback-form-state');
})
