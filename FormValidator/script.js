//pull in all the DOM elements
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordConfirmation = document.getElementById('password2');

//functions - input error message
function showError (input, message) {
  const formSection = input.parentElement; // picks the parent element of input element
  formSection.className = 'form-section error' // changes the classes on the element
  const small = formSection.querySelector('small')
  small.innerText = message;
}

//function - show success
function showSuccess (input) {
const formSection = input.parentElement;
formSection.className = 'form-section success'
}

//function - check email validity
function isValidEmail(email) {
  const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  return regexEmail.test(String(email))
}


//add event listener to the form for submission
form.addEventListener('submit', function(e) {
  e.preventDefault();

  if (username.value === '') {
    showError(username, 'Username is required')
  } else {
    showSuccess(username)
  }
  
  if (email.value === '') {
    showError(email, 'Email is required')
    
  } 
  else if (!isValidEmail(email.value)) {
    showError(email, 'Email is not valid')
  }else {
    showSuccess(email)
  }

  if (password.value === '') {
    showError(password, 'Password is required')
  } else {
    showSuccess(password)
  }

  if (passwordConfirmation.value === '') {
    showError(passwordConfirmation, 'Password confirmation is required')
  } else {
    showSuccess(passwordConfirmation)
  }

});

