import throttle from 'lodash.throttle';

const LOCALSTORAGE_KEY = "feedback-form-state";

const form = document.querySelector('.feedback-form');

const emailInput = document.querySelector('input');
const messageInput = document.querySelector('textarea');


form.addEventListener("input", throttle(savedUserData), 500);
(throttle,updatePage(), 500);
form.addEventListener("submit", cleanedStorage );



function savedUserData(evt) {
    evt.preventDefault();

   const { email, message } = evt.currentTarget.elements;

    if (email.value === "" || message.value === "") {
        console.log("Please fill in all the fields!");
        return;
    }

        const info = {
            email: email.value,
            message: message.value
        }

    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(info)); 

}


function updatePage() {

    const storedData = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));

    if (storedData) {

        const { email, message } = storedData;
        emailInput.value = email;
        messageInput.value = message;

    } else { 

        emailInput.value = "";
        messageInput.value = "";
    }

}


function cleanedStorage(evt) {
    const storedData = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));

    if (storedData) {
        const { email, message } = storedData;

        if (emailInput.value === email && messageInput.value === message) {


            localStorage.removeItem(LOCALSTORAGE_KEY);
            evt.currentTarget.reset();

        }

    }       

}

