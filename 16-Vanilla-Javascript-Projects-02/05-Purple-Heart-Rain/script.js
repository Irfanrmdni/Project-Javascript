function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');

    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 2 + 3 + 's';
    heart.innerText = '❤';
    setTimeout(() => { }, 5000);

    document.body.appendChild(heart);
}
setInterval(createHeart, 300);