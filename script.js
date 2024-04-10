let currMoleTile;

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

  setInterval(setMole, 2000) // 2000 miliseconds = 2 seconds
}

function getRandomTile() {
    let num = Math.floor(Math.random() * 9)
    return num.toString()
}

function setMole() {

  let mole = document.createElement("img")
  mole.src = "./monty-mole.png"

  let num = getRandomTile()
  currMoleTile = document.getElementById(num)
  currMoleTile.appendChild(mole)
}