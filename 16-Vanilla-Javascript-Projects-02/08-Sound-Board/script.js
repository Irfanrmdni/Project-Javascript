const sounds = [
    'sound1',
    'sound2',
    'sound3',
    'sound4'
];

sounds.forEach((sound) => {
    const btn = document.createElement('button');
    btn.classList.add('button');

    btn.innerText = sound;

    btn.addEventListener('click', function () {
        stopSound();
        document.getElementById(sound).play();
    });

    document.body.appendChild(btn);
});

function stopSound() {
    sounds.forEach((sound) => {
        const song = document.getElementById(sound);
        song.pause();
        song.currenTime = 0;
    });
}
