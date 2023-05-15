// Your API Key: a6288093cc1b883a89164ad4
// Example Request: https://v6.exchangerate-api.com/v6/a6288093cc1b883a89164ad4/latest/USD

//DOM elements
const currencyElem_1 = document.getElementById('currency1');
const currencyElem_2 = document.getElementById('currency2');
const amount_1 = document.getElementById('amount1');
const amount_2 = document.getElementById('amount2');
const swap = document.getElementById('swap-currency');
const rate = document.getElementById('rate');

//Functions

//fetch x rates and update DOM
function calculate () {
console.log('test')
}

//eventlisteners
currencyElem_1.addEventListener('change', calculate);
currencyElem_2.addEventListener('change', calculate);
amount_1.addEventListener('input', calculate);
amount_2.addEventListener('input', calculate);


calculate();



