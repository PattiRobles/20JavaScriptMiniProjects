//DOM elements
const main = document.getElementById('main')
const addUserBtn = document.getElementById('add_user')
const doubleBtn = document.getElementById('double')
const millionairesBtn = document.getElementById('millionaires')
const sortBtn = document.getElementById('sort')
const calculateBtn = document.getElementById('calculate_wealth')


//Generate random user - first name and last name


//fetch random user and add money
const url = 'https://randomuser.me/api/'

async function getRandomUser() {
  const res = await fetch(url)
  const data = await res.json()

  const user = data.results[0]

  const newUser = {
    name: `${user.name.first} ${user.name.last}`,
    money: Math.floor(Math.random() * 1000000)
  }

  addData(newUser)
}

//
function addData(obj) {
  data.push(obj)
}

// let data =[];
getRandomUser()
getRandomUser()
getRandomUser()
getRandomUser()

