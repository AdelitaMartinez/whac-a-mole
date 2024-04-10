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
    tile.addEventListener("click", selectTile)
    document.getElementById("board").appendChild(tile)
  }

  setInterval(setMole, 800)
  setInterval(setPlant, 2000)
}

function getRandomTile() {
    let num = Math.floor(Math.random() * 9)
    return num.toString()
}

function setMole() {

  if(gameOver){
    return;
  }

  if (currMoleTile) {
    currMoleTile.innerHTML = ""
  }

  let mole = document.createElement("img")
  mole.src = "./monty-mole.png"

  if (currPlantTile && currPlantTile.id == num) {
    return setMole();
  }

  let num = getRandomTile()
  currMoleTile = document.getElementById(num)
  currMoleTile.appendChild(mole)
}

function setPlant() {

  if (gameOver) {
    return;
  }

  if (currPlantTile) {
    currPlantTile.innerHTML = ""
  }

  let plant = document.createElement("img")
  plant.src = "./piranha-plant.png"

  let num = getRandomTile()

  if (currMoleTile && currMoleTile.id == num) {
    return setPlant();
  }

  currPlantTile = document.getElementById(num)
  currPlantTile.appendChild(plant)
}

function selectTile() {
  if (gameOver) {
    return;
  }

  // If tile clicked is the same tile that mole is on
  if (this == currMoleTile) {
    // Then increase score by 10
      score += 10
      // Change score (starts at 0) to current score
      document.getElementById("score").innerText = score.toString()
  }
  // else if the tile clicked is the same tile that the plant is on 
  else if (this == currPlantTile){
    // Then notify that the game is over and current score
    document.getElementById("score").innerText = "Game Over: " + score.toString();
    gameOver = true;
  }
}