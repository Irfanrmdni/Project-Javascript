
// hamburger menu
const hamburger = document.querySelector('.hamburger');
const link = document.querySelector('.link');

hamburger.addEventListener('click', function () {
    link.classList.toggle('slide');
});


// image slider
let index = 0;
const slide = document.getElementsByClassName('header');
const circle = document.getElementsByClassName('circle');

function slider() {
    for (let i = 0; i < slide.length; i++) {
        slide[i].style.display = 'none';
    }

    index = index + 1;

    if (index > slide.length) {
        index = 1;
    }

    slide[index - 1].style.display = 'grid';

    for (let i = 0; i < circle.length; i++) {
        circle[i].className = circle[i].className.replace(' activeCircle', '');
    }

    circle[index - 1].className += ' activeCircle';

    setTimeout(slider, 2500);
}

slider();


function validasi(form) {
    let max = 10;
    if (form.angka.value === '') {
        alert('form tidak boleh kosong');
        form.angka.focus();
        return false;
    } else if (form.angka.value >= max) {
        alert('angka harus 10 digit!');
        form.angka.focus();
        return false;
    }

    return true;
}











let val;
// menampilkan ukuran width halaman website
val = window.outerWidth;
console.log(val + ' Width');

// menampilkan ukuran height halaman website
val = window.outerHeight;
console.log(val + ' Height');