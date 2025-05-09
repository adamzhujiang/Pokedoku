/*-------------------------------- Constants --------------------------------*/

const allCategories = ['Fire', 'Water', 'Poison', 'Flying', 'Can Mega Evolve', 'Can Learn Tackle']

let board;

let win;

let attempts;



/*---------------------------- Variables (state) ----------------------------*/

const maxAttempts = 9;

/*------------------------ Cached Element References ------------------------*/
const squareEls = document.querySelectorAll('.cell')

const resetEl = document.querySelector('#reset')

const startEl = document.querySelector('#start')

const row1 = document.getElementById('row-1')
const row2 = document.getElementById('row-2')
const row3 = document.getElementById('row-3')

const col1 = document.getElementById('col-1')
const col2 = document.getElementById('col-2')
const col3 = document.getElementById('col-3')

function randomizer(category) {
    const randomNumber = Math.floor(Math.random()*allCategories.length)
    const catName = allCategories[randomNumber]
    console.log(randomNumber)
    category.innerText=catName
    allCategories.splice(randomNumber,1)
}

/*-------------------------------- Functions --------------------------------*/

function init() {
    console.log("check")

    board = ['', '', '', '', '', '', '', '', ''];
    win = false;
    attempts = 0;
    
    randomizer(row1)
    randomizer(row2)
    randomizer(row3)
    randomizer(col1)
    randomizer(col2)
    randomizer(col3)

    squareEls.forEach(cell => cell.textContent = '')
    ppCount()
    render()
}

function render() {
    console.log("This is the board:", board)
}

function handleClick(index, cell) {
    if (board[index] || attempts >= maxAttempts) return;

    const guess = prompt(`Enter a Pokemon for ${cell.dataset.row} + ${cell.dataset.col}`)
    if (guess) {

        const pokemon = pokedata.find(p => p.name.toLowerCase() === guess.toLowerCase())
        const col = cell.dataset.col
        const row = cell.dataset.row

        let isCorrect = false;
    
        if (
            row1.innerText === pokemon.types.includes(row1.innerText) && 
            col === col1.innerText && pokemon.types.includes(col1.innerText) 
        ) {
            isCorrect = true
        }

        if (isCorrect) {
            cell.textContent = guess;
            board[index] = guess;
            attempts++;
            
            ppCount();
            render();
        } else{
            alert("WRONG!");
            attempts++;
        }


        if (attempts === maxAttempts) {
            endGame()
        }
    }

}

function ppCount() {
    const ppCounter = document.querySelector('.pp');
    ppCounter.textContent = `PP: ${maxAttempts-attempts}/9`
}

function endGame() {
    alert("You ran out of PP! Game over.")
}

/*----------------------------- Event Listeners -----------------------------*/

squareEls.forEach((cell, index) => {
    cell.addEventListener('click', () => handleClick(index, cell));
});

resetEl.addEventListener('click', init);
startEl.addEventListener('click', init);
