// Your API Key: a6288093cc1b883a89164ad4
// Example Request: https://v6.exchangerate-api.com/v6/a6288093cc1b883a89164ad4/latest/USD

//DOM elements
const currencyElem_1 = document.getElementById('currency1');
const currencyElem_2 = document.getElementById('currency2');
const amount1 = document.getElementById('amount1');
const amount2 = document.getElementById('amount2');
const swap = document.getElementById('swap-currency');
const rateElem = document.getElementById('rate');

//Functions

//fetch x rates and update DOM
function calculate () {
  const currency1_value = currencyElem_1.value;
  const currency2_value = currencyElem_2.value;
  //names of currency

  fetch(`https://v6.exchangerate-api.com/v6/a6288093cc1b883a89164ad4/latest/${currency1_value}`)
  .then(res => res.json())
  .then(data => {
  //data.conversion_rates contains all country specific rates for USD.we can use the denomination of curr2 as the index
  const rate = data.conversion_rates[currency2_value]
  //console.log(rate)
  rateElem.innerText = `1 ${currency1_value} = ${rate} ${currency2_value}`
  

  // console.log(rate)
  console.log(amount1.value)
  console.log(amount2.value)
  amount2.value = (amount1.value * rate).toFixed(2)
})
  
}

//eventlisteners
currencyElem_1.addEventListener('change', calculate);
currencyElem_2.addEventListener('change', calculate);
amount1.addEventListener('input', calculate);
amount2.addEventListener('input', calculate);


calculate();



