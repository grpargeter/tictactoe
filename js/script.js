// console.log("script is working");

//player 1 always starts first and is red

let currentPlayer = "Red";
const currentPlayerMsg = document.querySelector(".currentPlayerMsg");

// document.querySelector(".currentPlayer").innerHTML = `${currentPlayer}'s turn!`;
currentPlayerMsg.innerHTML = `${currentPlayer}'s turn`;

// playerSelection();

console.log(currentPlayer);

const cellElements = document.querySelectorAll(".cell");
//reset button

const resetBtn = document.querySelector("#reset");
resetBtn.addEventListener("click", resetfunction);

//function reset
function resetfunction() {
  location.reload();
}
//console.log(resetBtn);
let gameStatusActive = true;
//add event listener
cellElements.forEach((cell) => {
  cell.addEventListener("click", handleClick, { once: true });
});

//remove event listener.
function removeEvents() {
  cellElements.forEach((cell) => {
    cell.removeEventListener("click", handleClick, { once: true });
  });
}
let gameResults = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];
//console.log(gameResults);

function handleClick(clickedCellEvent) {
  const clickedCell = clickedCellEvent.target;
  const clickedCellIndex = clickedCell.getAttribute("data-cell-index");
  //   console.log(clickedCellIndex);
  if (currentPlayer === "Red") {
    clickedCell.classList.add("red");
  } else {
    clickedCell.classList.add("blue");
  }
  arrayIndex = clickedCellIndex.split("");
  //   console.log(arrayIndex);

  gameResults[arrayIndex[0]][arrayIndex[1]] = currentPlayer;
  currentPlayerMsg.innerHTML = `${currentPlayer}'s turn`;

  winLogic();

  //   console.log(gameResults);
  console.table(gameResults);
  playerSelection();
  if (gameStatusActive === true) {
    console.log(gameStatusActive);
    currentPlayerMsg.innerHTML = `${currentPlayer}'s turn`;
  } else {
    currentPlayerMsg.innerHTML = winnerMsg;
  }

  //   console.log(document.getElementById.value);
}

//console.log(cellElements);

function playerSelection() {
  currentPlayer = currentPlayer === "Red" ? "Blue" : "Red";
  //statusDisplay.innerHTML = currentPlayerTurn();
}
function winLogic() {
  console.log(gameResults[0][0]);
  console.log(gameResults[0][1]);
  console.log(gameResults[0][2]);
  if (
    gameResults[0][0] === gameResults[0][1] &&
    gameResults[0][1] === gameResults[0][2] &&
    gameResults[0][0] !== ""
  ) {
    removeEvents();
    winnerMsg = `${currentPlayer} is the winner on row 1!`;
    gameStatusActive = false;
  } else if (
    gameResults[1][0] === gameResults[1][1] &&
    gameResults[1][1] === gameResults[1][2] &&
    gameResults[1][0] !== ""
  ) {
    removeEvents();
    winnerMsg = `${currentPlayer} is the winner on row 2!`;
    gameStatusActive = false;
  } else if (
    gameResults[2][0] === gameResults[2][1] &&
    gameResults[2][1] === gameResults[2][2] &&
    gameResults[2][0] !== ""
  ) {
    removeEvents();
    winnerMsg = `${currentPlayer} is the winner on row 3!`;
    gameStatusActive = false;
  } else if (
    gameResults[0][0] === gameResults[1][0] &&
    gameResults[1][0] === gameResults[2][0] &&
    gameResults[0][0] !== ""
  ) {
    removeEvents();
    winnerMsg = `${currentPlayer} is the winner on column 1!`;
    gameStatusActive = false;
  } else if (
    gameResults[0][1] === gameResults[1][1] &&
    gameResults[1][1] === gameResults[2][1] &&
    gameResults[0][1] !== ""
  ) {
    removeEvents();
    winnerMsg = `${currentPlayer} is the winner on column 2!`;
    gameStatusActive = false;
  } else if (
    gameResults[0][2] === gameResults[1][2] &&
    gameResults[1][2] === gameResults[2][2] &&
    gameResults[0][2] !== ""
  ) {
    removeEvents();
    winnerMsg = `${currentPlayer} is the winner on column 3!`;
    gameStatusActive = false;
  } else if (
    gameResults[0][0] === gameResults[1][1] &&
    gameResults[1][1] === gameResults[2][2] &&
    gameResults[0][0] !== ""
  ) {
    removeEvents();
    winnerMsg = `${currentPlayer} is the winner on diagonal left!`;
    gameStatusActive = false;
  } else if (
    gameResults[0][2] === gameResults[1][1] &&
    gameResults[1][1] === gameResults[2][0] &&
    gameResults[0][2] !== ""
  ) {
    removeEvents();
    winnerMsg = `${currentPlayer} is the winner on diagonal right!`;
    gameStatusActive = false;
  } else {
    console.log("no winner yet");
  }
}
