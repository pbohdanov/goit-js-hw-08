import throttle from 'lodash.throttle';

const LOCALSTORAGE_KEY = "feedback-form-state";

const form = document.querySelector('.feedback-form');
const emailInput = document.querySelector('input');
const messageInput = document.querySelector('textarea');


// Load stored data from localStorage

const storedData = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));

// Fill form fields with stored data if available
    if (storedData) {

        const { email, message } = storedData;
        emailInput.value = email;
        messageInput.value = message;

    } else { 

        emailInput.value = "";
        messageInput.value = "";
    }
    
// Throtlle the saveUserData function using lodash.throttle

const throttledSaveUserData = throttle(savedUserData, 500);

// Attach event listeners
form.addEventListener("input", savedUserData);
form.addEventListener("submit", cleanedStorage);

// Save user data to localStorage
function savedUserData(evt) {
    evt.preventDefault();

   const { email, message } = evt.currentTarget.elements;
    
        const info = {
            email: email.value,
            message: message.value
        }
        
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(info)); 
}

//Clean storage and resert form on submission
function cleanedStorage(evt) {
    evt.preventDefault();

    const { email, message } = evt.currentTarget.elements;
    
      if (email.value === "" || message.value === "") {
          alert("Please fill in all the fields!");
          return;
        
      }
    
    const cleanedData = {
        email: email.value,
        message: message.value,
    }

        localStorage.removeItem(LOCALSTORAGE_KEY);
        console.log(cleanedData);
        evt.currentTarget.reset();            

}