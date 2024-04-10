let currMoleTile;
let currPlantTile;
let score = 0;
let gameOver = false;

window.onload = function () {
  setGame()
}

function setGame() {
  // set up tye grid for the game board in html
  for(let i = 0; i < 9; i++) {

    
    let tile = document.createElement("div")
    tile.id = i.toString()
    document.getElementById("board").appendChild(tile)
  }

  setInterval(setMole, 1000) // 1000 miliseconds = 1 seconds
  setInterval(setPlant, 2000)
}

function getRandomTile() {
    let num = Math.floor(Math.random() * 9)
    return num.toString()
}

function setMole() {

  if (currMoleTile) {
    currMoleTile.innerHTML = ""
  }

  let mole = document.createElement("img")
  mole.src = "./monty-mole.png"

  if (currPlantTile && currPlantTile.id == num) {
    return;
  }

  let num = getRandomTile()
  currMoleTile = document.getElementById(num)
  currMoleTile.appendChild(mole)
}

function setPlant() {

  if (currPlantTile) {
    currPlantTile.innerHTML = ""
  }

  let plant = document.createElement("img")
  plant.src = "./piranha-plant.png"

  let num = getRandomTile()

  if (currMoleTile && currMoleTile.id == num) {
    return;
  }

  currPlantTile = document.getElementById(num)
  currPlantTile.appendChild(plant)
}