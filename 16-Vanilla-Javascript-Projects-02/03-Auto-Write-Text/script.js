const text = 'selamat datang di website IRFANRMDNI!';
const h1El = document.querySelector('h1');

let index = 0;

function writeText() {
    h1El.innerText = text.slice(0, index);
    index++;

    if (index > text.length) {
        index = 0;
    }

}

setInterval(writeText, 150);
