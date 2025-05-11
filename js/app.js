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

        const pokemon = pokemonList.find(p => p.name.toLowerCase() === guess.toLowerCase())
        const col = cell.dataset.col
        const row = cell.dataset.row

        let isCorrect = true;
    
        if (
            row === "Normal" && !pokemon.typing.includes("Normal") ||
            row === "Flying" && !pokemon.typing.includes("Flying") ||
            row === "Fire" && !pokemon.typing.includes("Fire") ||
            row === "Water" && !pokemon.typing.includes("Water") ||
            row === "Electric" && !pokemon.typing.includes("Electric") ||
            row === "Grass" && !pokemon.typing.includes("Grass") ||
            row === "Ice" && !pokemon.typing.includes("Ice") ||
            row === "Fighting" && !pokemon.typing.includes("Fighting") ||
            row === "Poison" && !pokemon.typing.includes("Poison") ||
            row === "Ground" && !pokemon.typing.includes("Ground") ||
            row === "Psychic" && !pokemon.typing.includes("Psychic") ||
            row === "Bug" && !pokemon.typing.includes("Bug") ||
            row === "Rock" && !pokemon.typing.includes("Rock") ||
            row === "Ghost" && !pokemon.typing.includes("Ghost") ||
            row === "Dragon" && !pokemon.typing.includes("Dragon") ||
            row === "Dark" && !pokemon.typing.includes("Dark") ||
            row === "Steel" && !pokemon.typing.includes("Steel") ||
            row === "Fairy" && !pokemon.typing.includes("Fairy") ||
            row === "Monotype" && !pokemon.isMonotype ||
            row === "First Stage Evolution" && !pokemon.isFirstStage ||
            row === "Second Stage Evolution" && !pokemon.isSecondStage ||
            row === "Third Stage Evolution" && !pokemon.isThirdStage ||
            row === "Legendary or Mythical" && !pokemon.isLegendaryOrMythical ||
            row === "Evolves with Item" && !pokemon.evolvesWithItem ||
            row === "Evolves by Level Up" && !pokemon.evolvesByLevelUp ||
            row === "Can Mega Evolve" && !pokemon.canMegaEvolve ||
            row === "Can Learn Tackle" && !pokemon.canLearnTackle
        ) {
            isCorrect = false
        }

        if (
            col === "Normal" && !pokemon.typing.includes("Normal") ||
            col === "Flying" && !pokemon.typing.includes("Flying") ||
            col === "Fire" && !pokemon.typing.includes("Fire") ||
            col === "Water" && !pokemon.typing.includes("Water") ||
            col === "Electric" && !pokemon.typing.includes("Electric") ||
            col === "Ice" && !pokemon.typing.includes("Ice") ||
            col === "Grass" && !pokemon.typing.includes("Grass") ||
            col === "Fighting" && !pokemon.typing.includes("Fighting") ||
            col === "Poison" && !pokemon.typing.includes("Poison") ||
            col === "Ground" && !pokemon.typing.includes("Ground") ||
            col === "Psychic" && !pokemon.typing.includes("Psychic") ||
            col === "Bug" && !pokemon.typing.includes("Bug") ||
            col === "Rock" && !pokemon.typing.includes("Rock") ||
            col === "Ghost" && !pokemon.typing.includes("Ghost") ||
            col === "Dragon" && !pokemon.typing.includes("Dragon") ||
            col === "Dark" && !pokemon.typing.includes("Dark") ||
            col === "Steel" && !pokemon.typing.includes("Steel") ||
            col === "Fairy" && !pokemon.typing.includes("Fairy") ||
            col === "Monotype" && !pokemon.isMonotype ||
            col === "First Stage Evolution" && !pokemon.isFirstStage ||
            col === "Second Stage Evolution" && !pokemon.isSecondStage ||
            col === "Third Stage Evolution" && !pokemon.isThirdStage ||
            col === "Legendary or Mythical" && !pokemon.isLegendaryOrMythical ||
            col === "Evolves with Item" && !pokemon.evolvesWithItem ||
            col === "Evolves by Level Up" && !pokemon.evolvesByLevelUp ||
            col === "Can Mega Evolve" && !pokemon.canMegaEvolve ||
            col === "Can Learn Tackle" && !pokemon.canLearnTackle
        ) {
            isCorrect = false
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
