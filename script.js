

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
}