
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

// smoth scroll
$('.page-scroll').on('click', function (e) {
    let tujuan = $(this).attr('href');
    let elemenTujuan = $(tujuan);

    $('body,html').animate({
        scrollTop: elemenTujuan.offset().top - 100
    }, 1250, 'easeInOutExpo');

    e.preventDefault();
});

// backTop
const backTop = document.querySelector('.backTop');

window.addEventListener('scroll', function () {
    let wscroll = $(this).scrollTop();

    if (wscroll > 10) {
        $('.navbar').addClass('active-navbar');
        $('.navbar a , .navbar i').css('color', 'white');
    } else {
        $('.navbar').removeClass('active-navbar');
        $('.navbar a , .navbar i').css('color', 'black');
    }

    if (window.pageYOffset > 500) {
        backTop.classList.add('activeTop');
    } else {
        backTop.classList.remove('activeTop');
    }

    if (wscroll > $('.product').offset().top - 400) {
        $('.product').addClass('active-product');
    } else {
        $('.product').removeClass('active-product');
    }

    if (wscroll > $('.iphone').offset().top - 500) {
        $('.iphone').addClass('active-iphone');
    } else {
        $('.iphone').removeClass('active-iphone');
    }

    if (wscroll > $('.mac').offset().top - 400) {
        $('.mac').addClass('active-mac');
    } else {
        $('.mac').removeClass('active-mac');
    }

    if (wscroll > $('.macbook').offset().top - 500) {
        $('.macbook').addClass('active-macbook');
    } else {
        $('.macbook').removeClass('active-macbook');
    }

    if (wscroll > $('.watch').offset().top - 500) {
        $('.watch').addClass('active-watch');
    } else {
        $('.watch').removeClass('active-watch');
    }

    if (wscroll > $('.footer').offset().top - 500) {
        $('.footer').addClass('active-footer');
    } else {
        $('.footer').removeClass('active-footer');
    }
});

backTop.addEventListener('click', function () {
    window.scrollTo(0, 0);
});

$(window).on('load', function () {
    $('.headers').addClass('active-headers');
});

// carousel
let slidePosition = 0;
const slideCarousel = document.getElementsByClassName('carousel-item');
const totalSlide = slide.length;

const next = document.getElementById('next');
next.addEventListener('click', function () {
    // moveToNext();
    for (let slide of slideCarousel) {
        slide.classList.remove('carousel-visible');
        slide.classList.add('carousel-hidden');
    }

    slideCarousel[slidePosition].classList.add('carousel-visible');

    if (slidePosition === totalSlide - 1) {
        slidePosition = 0;
    } else {
        slidePosition++;
    }
});

const prev = document.getElementById('prev');
prev.addEventListener('click', function () {
    // moveToPrev();
    for (let slide of slideCarousel) {
        slide.classList.remove('carousel-visible');
        slide.classList.add('carousel-hidden');
    }
    slideCarousel[slidePosition].classList.add('carousel-visible');

    if (slidePosition === 0) {
        slidePosition = totalSlide - 1;
    } else {
        slidePosition--;
    }
});

// function updateSlidePosition() {
//     for (let slide of slideCarousel) {
//         slide.classList.remove('carousel-visible');
//         slide.classList.add('carousel-hidden');
//     }

//     slideCarousel[slidePosition].classList.add('carousel-visible');
// }

// function moveToNext() {
//     if (slidePosition === totalSlide - 1) {
//         slidePosition = 0;
//     } else {
//         slidePosition++;
//     }

//     updateSlidePosition();
// }

// function moveToPrev() {
//     if (slidePosition === 0) {
//         slidePosition = totalSlide - 1;
//     } else {
//         slidePosition--;
//     }

//     updateSlidePosition();
// }