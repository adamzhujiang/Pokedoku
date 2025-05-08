/*-------------------------------- Constants --------------------------------*/

let board;

let win;

let attempts;



/*---------------------------- Variables (state) ----------------------------*/



/*------------------------ Cached Element References ------------------------*/
const squareEls = document.querySelectorAll('.cell')

const resetEl = document.querySelector('#reset')

const startEl = document.querySelector('#start')

/*-------------------------------- Functions --------------------------------*/

function init() {
    console.log("check")

    board = ['', '', '', '', '', '', '', '', ''];
    win = false;
    attempts = 0;
    
    render()
}

function render() {
    console.log("This is the:", board)
}

function handleClick(index, cell) {
    if (board[index]) return;

    const guess = prompt(`Enter a Pokemon for ${cell.dataset.row} + ${cell.dataset.col}`)
    if (guess) {
        cell.textContent = guess;
        board[index] = guess;
        render();
    }
}

    //     squareEls.forEach((cell, index) => {
//         cell.addEventListener('click', () => {
//             const guess = prompt(`Enter a Pokemon for ${cell.dataset.row} + ${cell.dataset.col}`)
//             if (guess) {
//                 cell.textContent = guess;
//                 board[index] = guess;
//                 console.log(board)
//             }   
//         })
//     })
// }

/*----------------------------- Event Listeners -----------------------------*/

squareEls.forEach((cell, index) => {
    cell.addEventListener('click', () => handleClick(index, cell));
});

resetEl.addEventListener('click', init);
startEl.addEventListener('click', init);
