const cellElements = document.querySelectorAll('[data-cell]')
const board = document.getElementById('board')
const x_class = 'x'
const o_class = "o"
let o_turn = false;
const winningCombination = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

const handleClick = (e) => {
    const cell = e.target;
    let currentClass = o_turn ? o_class : x_class;
    placeMark(cell, currentClass);
    o_turn = !o_turn;
    setBoardHoverClass();    
    if (checkWin(currentClass)) {
        
    }
  console.log("clicked");
};

const placeMark = (cell,currentClass) => {
    cell.classList.add(currentClass)
}
const setBoardHoverClass=()=>{
    board.classList.remove(x_class)
    board.classList.remove(o_class)
    if (o_turn) {
    board.classList.add(o_class);
    } else {
    board.classList.add(x_class);
        
    }
}
const startGame = () => {
  cellElements.forEach((cell) => {
    cell.addEventListener("click", handleClick, { once: true });
  });
  setBoardHoverClass();
};
startGame();
const checkWin = (currentClass) => {
    return winningCombination.some(combination => {
        return combination.every(index => {
            return  cellElements[index]
        })
    })
}
