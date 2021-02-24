const imgs = document.getElementById('imgs');
const img = document.querySelectorAll('.img-carousel');

let index = 0;

function carousel() {
    index++;

    if (index > img.length - 1) {
        index = 0;
    }

    imgs.style.transform = `translateX(${-index * 500}px)`;
}

setInterval(carousel, 2000);