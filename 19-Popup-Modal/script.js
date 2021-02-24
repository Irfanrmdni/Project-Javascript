const btnEl = document.getElementById('btn');
const blurEl = document.getElementById('blur');
const popupEl = document.querySelector('.popup');

btnEl.addEventListener('click', function () {
    blurEl.classList.toggle('active');
    popupEl.classList.toggle('active');
});