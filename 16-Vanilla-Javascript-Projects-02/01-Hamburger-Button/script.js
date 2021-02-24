const hamburgerEl = document.querySelector('.hamburger');
const navbarEl = document.querySelector('.navbar');

hamburgerEl.addEventListener('click', function () {
    navbarEl.classList.toggle('active');
    hamburgerEl.classList.toggle('active');
});