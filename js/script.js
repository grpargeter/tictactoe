//console.log("I am here!");

//player1 always first and is red
let currentPlayer = "Red";
function playerSelection() {
  currentPlayer = currentPlayer === "Red" ? "Blue" : "Red";
  //statusDisplay.innerHTML = currentPlayerTurn()
}

//console.log(currentPlayer);
const cellElements = document.querySelectorAll(".cell");
cellElements.forEach((cell) => {
  cell.addEventListener("click", handleClick, { once: true });
});
let gameResults = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

function handleClick(clickedCellEvent) {
  const clickedCell = clickedCellEvent.target;
  const clickedCellIndex = clickedCell.getAttribute("data-cell-index");
  console.log(clickedCellIndex);
  if (currentPlayer === "Red") {
    clickedCell.classList.add("red");
  } else {
    clickedCell.classList.add("blue");
  }
  playerSelection();
}
console.table(gameResults);
console.log(cellElements);
// cellElements.addEventListener("click", setColor);
// function setColor() {
//   cellElements.setAttribute("style", "background-color:red");
// }
