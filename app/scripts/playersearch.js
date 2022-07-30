document.querySelector('#search-button').addEventListener('click', () => {
    let inputValue = document.querySelector('#player-input').value
    if (inputValue.length != 0) {
        fetch(`https://account.fyremc.hu/api/player/${inputValue}`).then(response => response.text())
            .then(data => displayPlayerStats(data));
    }
});
// guild kereső
function displayPlayerStats(data) {
    data = JSON.parse(data)

    if (!data.error) {
        data = data.data
        console.log(data)
        let playerCard = document.createElement('div')
        playerCard.className = 'playerCard'
        playerCard.innerHTML =
            `
        <img src="${data.head}" style="float: left;" width="50" height="50">
        <span>${data.username}</span> <br>
        <span>${rankColor(data.ranks)}</span>
        `
        document.querySelector('.playerinfo-display').append(playerCard)
    }
}

function rankColor(ranks) {
    let returningRanks = []
    ranks.forEach(rank => {
        rank.replace('Team', '<span style="color: #18A804">Team</span>')
    });
    return returningRanks
}

fetch(`https://account.fyremc.hu/api/player/ikoliHU`).then(response => response.text())
    .then(data => displayPlayerStats(data));