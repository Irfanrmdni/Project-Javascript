const menuEl = document.querySelector('.menu');
const profileEl = document.querySelector('.profile');

profileEl.addEventListener('click', function () {
    menuEl.classList.toggle('active');
});