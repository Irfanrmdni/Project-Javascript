// // slideshow
// let index = 0;

// slide();

// function slide() {
//     let i;
//     const slideshow = document.getElementsByClassName('slideshow');
//     const circle = document.getElementsByClassName('circle1');

//     for (i = 0; i < slideshow.length; i++) {
//         slideshow[i].style.display = 'none';
//     }

//     index++;

//     if (index > slideshow.length) { index = 1; }

//     for (i = 0; i < circle.length; i++) {
//         circle[i].className = circle[i].className.replace(' active', '');
//     }

//     slideshow[index - 1].style.display = 'block';
//     circle[index - 1].className += ' active';
//     setTimeout(slide, 2000);
// }

const slideshow = document.getElementsByClassName('slideshow');
const circle = document.getElementsByClassName('circle1');

let index = 0;

let slide = function () {
    for (let i = 0; i < slideshow.length; i++) {
        slideshow[i].style.display = 'none';
    }

    index = index + 1;

    if (index > slideshow.length) {
        index = 1;
    }

    slideshow[index - 1].style.display = 'block';

    for (let j = 0; j < circle.length; j++) {
        circle[j].className = circle[j].className.replace(" active", "");
    }

    circle[index - 1].className += ' active';

    setTimeout(slide, 2000);
}

slide();