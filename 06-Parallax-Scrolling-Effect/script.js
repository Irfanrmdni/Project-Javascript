// parallax
const parallax = document.getElementsByClassName('parallax');

window.addEventListener('scroll', function () {
    let offset = window.pageYOffset;
    for (let i = 0; i < parallax.length; i++) {
        parallax[i].style.backgroundPositionY = offset * 0.7 + 'px';
    }
});

// el.style.backgroundPositionY = offset * 0.7 + 'px';