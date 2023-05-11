//Grab elements from the DOM
const container = document.querySelector('.container');
//returns just one element (the only one or the first in the page is there are multiple)
const seats = document.querySelectorAll('row .sea:not(.occupied)')
//return a node list, similar to an array
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie')

const ticketPrice = +movieSelect.value;

//change the selected seatc appearance 2 possible ways:
//1 - for each to go through elements of the node list that 'seats' is and then add an event listener to each seat OR
//2 - add an event listener to the container and then make sure that we are clicking in an available seat. This is more efficient

container.addEventListener('click', (e) => {
  if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')){
   e.target.classList.toggle('selected')
  }
})