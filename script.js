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
