function openPlayerConfig(event) {
    editedPlayer = +event.target.dataset.playerid;
    playerConfigOverlayElement.style.display = 'block';
    backdropElement.style.display = 'block';
}


function closePlayerConfig() {
    playerConfigOverlayElement.style.display = 'none';
    backdropElement.style.display = 'none';
    formElement.firstElementChild.classList.remove('error');
    errorsOutputElement.textContent = '';
    formElement.firstElementChild.lastElementChild.value = '';
}

function savePlayerDetails(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const playerName = formData.get('playername').trim();

    if (!playerName) {
        event.target.firstElementChild.classList.add('error');
        errorsOutputElement.textContent = 'Please enter valid player name';
        return;
    }

    const updatedPlayedDataElement = document.getElementById('player-' + editedPlayer + '-data');
    updatedPlayedDataElement.children[1].textContent = playerName;
    
    players[editedPlayer - 1].name = playerName;

    closePlayerConfig();
}