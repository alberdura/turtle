function updateStylesheet() {
    const width = window.innerWidth;
    const stylesheet = document.getElementById('responsive');

    if (width >= 550) {
        stylesheet.setAttribute('href', 'escritorio.css');
    } else {
        stylesheet.setAttribute('href', 'movil.css');
    }
}
window.addEventListener('resize', updateStylesheet);

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function startExperience() {
    document.querySelector('.start-screen').style.display = 'none';
    document.querySelector('.content').style.display = 'block';

    let randomNums = [];
    for (let i = 0; i < 6; i++) {
        let randomNum;

        do {
            randomNum = getRandomInt(1, 45);
        } while (randomNums.includes(randomNum));

        randomNums.push(randomNum);

        document.getElementById(`tortuga${i}`).src = `imgs/tortuga${randomNum}.gif`;
    }

    let randomSong = getRandomInt(1, 6);
    document.getElementById('song').src = `media/song${randomSong}.mp3`;
    document.getElementById('audioPlayer').load();
    document.getElementById('audioPlayer').play();
}