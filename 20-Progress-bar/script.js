const progress = document.querySelector('.progress');
const progress_done = document.querySelector('.progress-done');
const angka = document.getElementById('angka');

function getProgress() {
    progress_done.style.width = progress_done.getAttribute('data-done') + '%';
    progress_done.style.opacity = 1;

    angka.innerText = progress_done.getAttribute('data-done') + '%';
}

setTimeout(getProgress, 500);

