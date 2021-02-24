const openEl = document.getElementById('open');
const containerEl = document.querySelector('.popup-container');
const closeEl = document.getElementById('close');

openEl.addEventListener('click', function () {
    containerEl.classList.add('active');
});

closeEl.addEventListener('click', function () {
    containerEl.classList.remove('active');
});