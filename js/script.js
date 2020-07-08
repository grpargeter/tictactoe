//console.log("I am here!");

//player1 always first and is red
let currentPlayer = "Red";
function playerSelection() {
  currentPlayer = currentPlayer === "Red" ? "Blue" : "Red";
  //statusDisplay.innerHTML = currentPlayerTurn()
}

playerSelection();
//console.log(currentPlayer);
const cellElements = document.querySelectorAll(".cell");
cellElements.forEach((cell) => {
  cell.addEventListener("click", handleClick, { once: true });
});
function handleClick(e) {
  console.log("click");
}
