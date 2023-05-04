//pull in all the DOM elements
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordConfirmation = document.getElementById('password2');

//show error message
function showError (input, message) {
  const formSection = input.parentElement; // picks the parent element of input element
  formSection.className = 'form-section error' // changes the classes on the element
  const small = formSection.querySelector('small')
  small.innerText = message;
}

//show success
function showSuccess (input) {
const formSection = input.parentElement;
formSection.className = 'form-section success'
}

//check email validity (use input for consistency, but will only be email)
function checkEmail(input) {
  const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (regexEmail.test(input.value.trim())) {
      showSuccess(input)
    } else {
      showError(input, 'Email provided is not valid' )
  }
}

//check required fields
function checkRequired(inputArray) {
  inputArray.forEach(function(input){ 
    if(input.value.trim() === '') {
    showError(input, `${capitalise(input)} is required`)
    } else {
      showSuccess(input)
    }
})
}

//check input length
function checkLength(input, min, max) {
  if(input.value.length < min || input.value.length > max) {
    showError(input, `${capitalise(input)} is out of character range. Min char: ${min} Max char: ${max}`)
  } else {
    showSuccess(input)
  }
}

//capitalise first letter
function capitalise(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

//check passwords match
function checkPasswordsMatch (input1, input2) {
  if(input1.value != input2.value) {
    showError(input2, 'Passwords do not match')
  } else {
    showSuccess(password, passwordConfirmation)
  }
}

//add event listener to the form for submission
form.addEventListener('submit', function(e) {
  e.preventDefault();

  checkRequired([username, email, password, passwordConfirmation]);
  checkLength(username, 3, 15) //input, min, max
  checkLength(password, 6, 25)
  checkEmail(email)
  checkPasswordsMatch(password, passwordConfirmation)

});

