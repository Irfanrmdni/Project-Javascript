const input = document.querySelector('input');
const ul = document.querySelector('ul');

window.addEventListener('click', function (e) {
    if (e.target === input) {
        ul.classList.toggle('slide');
    }
});