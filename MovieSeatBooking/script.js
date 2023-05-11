//Grab elements from the DOM
const container = document.querySelector('.container');
//returns just one element (the only one or the first in the page is there are multiple)
const seats = document.querySelectorAll('.row .seat:not(.occupied)')

//return a node list, similar to an array
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie')

populateUI();

let ticketPrice = +movieSelect.value;

//change the selected seatc appearance 2 possible ways:
//1 - for each to go through elements of the node list that 'seats' is and then add an event listener to each seat OR
//2 - add an event listener to the container and then make sure that we are clicking in an available seat. This is more efficient

//MOVIE SELECT EVENT
function setMovieData(movieIndex, moviePrice) {
  localStorage.setItem('selectedMovieIndex', movieIndex)
  localStorage.setItem('selectedMoviePrice', moviePrice)
}


function updateSelecetedCount() {
  const selectedSeats = document.querySelectorAll('.row .seat.selected')
 
  //[...selecetedSeats] / [...seats]- brings the node list / elements form DOM into a normal array so that we can apply array methods
  const seatsIndex = [...selectedSeats].map(seat => 
    [...seats].indexOf(seat))
  localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));
  

  const selectedSeatsCount = selectedSeats.length;
  count.innerText = selectedSeatsCount;
  total.innerText = selectedSeatsCount * ticketPrice;
}

function populateUI() {
  const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'))
  //to change back into an array, this reverses stringify

  if(selectedSeats !== null && selectedSeats.length > 0) {
    seats.forEach((seat, index) => {
      if(selectedSeats.indexOf(index) > -1) {
        seat.classList.add('selected')
      }
    } )
  }
  
  const selectedMovieIndex =  localStorage.getItem('selectedMovieIndex')
  //!== null means that it IS in localStorage
  if(selectedMovieIndex !== null) {
    movieSelect.selectedIndex = selectedMovieIndex;
  }
}



//selection of movie - change event
movieSelect.addEventListener('change', e => {
  ticketPrice = +e.target.value
  updateSelecetedCount()
  setMovieData(e.target.selectedIndex, e.target.value) 
})

//selection of seats
container.addEventListener('click', (e) => {
  if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')){
   e.target.classList.toggle('selected')
  }
  updateSelecetedCount();
})

updateSelecetedCount();