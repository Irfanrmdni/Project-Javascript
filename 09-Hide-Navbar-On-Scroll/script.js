let lastScrollTop = 0;
const navbar = document.getElementsByClassName('navbar')[0];

window.addEventListener('scroll', function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        navbar.style.top = '-80px';
    } else {
        navbar.style.top = '0';
    }

    lastScrollTop = scrollTop;
});