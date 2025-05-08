/*-------------------------------- Constants --------------------------------*/

let board;

let win;

let attempts;



/*---------------------------- Variables (state) ----------------------------*/



/*------------------------ Cached Element References ------------------------*/
const squareEl = document.querySelectorAll('.cell')

const resetEl = document.querySelector('#reset')

const startEl = document.querySelector('#start')

/*-------------------------------- Functions --------------------------------*/

function init() {
    console.log("check")

    board = ['', '', '', '', '', '', '', '', ''];
    win = false;
    
    render()
}

function updateBoard() {
    
}

/*----------------------------- Event Listeners -----------------------------*/



