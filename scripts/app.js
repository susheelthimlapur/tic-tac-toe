let editedPlayer = 0;
let activePlayer = 0;
let currentRound = 1;

const gameData = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
];

const players = [
    {
        name: '',
        symbol: 'X'
    },
    {
        name: '',
        symbol: 'O'
    }
];

const playerConfigOverlayElement = document.getElementById('config-overlay');
const backdropElement = document.getElementById('backdrop');
const formElement = document.querySelector("form");
const errorsOutputElement = document.getElementById("config-errors");
const gameAreaElement = document.getElementById("active-game");
const gameFieldElement = document.getElementById('game-board');
const activePlayerElement = document.getElementById('active-player-name');
const gameOverElement = document.getElementById('game-over');
// const winnerNameElement = document.getElementById('winner-name');

const editPlayer1BtnElement = document.getElementById("edit-btn-1");
const editPlayer2BtnElement = document.getElementById("edit-btn-2");
const cancelPlayerBtnElement = document.getElementById('cancel-btn');
const startNewGameBtnElement = document.getElementById("start-game-btn");
// const gameFieldElements = document.querySelectorAll('#game-board li');


editPlayer1BtnElement.addEventListener("click", openPlayerConfig);
editPlayer2BtnElement.addEventListener("click", openPlayerConfig);


cancelPlayerBtnElement.addEventListener("click", closePlayerConfig);
backdropElement.addEventListener("click",closePlayerConfig);

formElement.addEventListener("submit", savePlayerDetails);

startNewGameBtnElement.addEventListener("click", startNewGame);

// for (const gameFieldElement of gameFieldElements) {
//     gameFieldElement.addEventListener('click', selectGameField);
// }

gameFieldElement.addEventListener('click', selectGameField);