const playerConfigOverlayElement = document.getElementById('config-overlay');
const backdropElement = document.getElementById('backdrop');
const formElement = document.querySelector("form");

const editPlayer1BtnElement = document.getElementById("edit-btn-1");
const editPlayer2BtnElement = document.getElementById("edit-btn-2");
const cancelPlayerBtnElement = document.getElementById('cancel-btn');

editPlayer1BtnElement.addEventListener("click", openPlayerConfig);
editPlayer2BtnElement.addEventListener("click", openPlayerConfig);
cancelPlayerBtnElement.addEventListener("click", closePlayerConfig);
backdropElement.addEventListener("click",closePlayerConfig);
formElement.addEventListener("submit", savePlayerDetails);