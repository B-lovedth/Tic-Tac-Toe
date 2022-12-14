const cellElements = document.querySelectorAll("[data-cell]");
const board = document.getElementById("board");
const x_class = "x";
const o_class = "o";
const messageContainer = document.querySelector("#message-container");
const message = document.querySelector("[message-text]");
const  restart =  document.querySelector('#restart')
let o_turn;
const winningCombination = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
const handleClick = (e) => {
  const cell = e.target;
  let currentClass = o_turn ? o_class : x_class;
  placeMark(cell, currentClass);
  if (checkWin(currentClass)) {
    endGame(false);
  } else if (isDraw()) {
    endGame(true)
  } else {
      o_turn = !o_turn;
      setBoardHoverClass();
    }
    
    console.log(Boolean(o_turn))
};


const endGame = (draw) => {
      messageContainer.classList.add("show");
    if (draw===true) {
    message.textContent = `Draw!`;
  } else {
    message.textContent = `${o_turn ? "O's" : "X's"} Win!`;
    }
};


const isDraw = () => {
  return [...cellElements].every(cell => {
        return (
          cell.classList.contains(o_class) || cell.classList.contains(x_class)
        );
    })
}


const placeMark = (cell, currentClass) => {
  cell.classList.add(currentClass);
};


const setBoardHoverClass = () => {
  board.classList.remove(x_class);
  board.classList.remove(o_class);
  if (o_turn) {
    board.classList.add(o_class);
  } else {
    board.classList.add(x_class);
  }
};


const startGame = () => {
  cellElements.forEach((cell) => {
    cell.addEventListener("click", handleClick, { once: true });
    cell.classList.remove(o_class);
    cell.classList.remove(x_class);
  });
    setBoardHoverClass();
    messageContainer.classList.remove("show");   
};
startGame();
restart.addEventListener("click", startGame);


const checkWin = (currentClass) => {
  return winningCombination.some((combination) => {
    return combination.every((index) => {
      return cellElements[index].classList.contains(currentClass);
    });
  });
};
