const copyEl = document.getElementById('copy');
const lengthEl = document.getElementById('length');
const upperEl = document.getElementById('upper');
const lowerEl = document.getElementById('lower');
const numberEl = document.getElementById('number');
const symbolEl = document.getElementById('symbol');
const generateEl = document.getElementById('generate');
const pwEl = document.getElementById('pw');

const upperLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerLetters = 'abcdefghijklmnopqrstuvwxyz';
const number = '0123456789';
const symbol = '!@#$%^&*()_+=';

function getUpperCase() {
    return upperLetters[Math.floor(Math.random() * upperLetters.length)];
}

function getLowerCase() {
    return lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
}

function getNumber() {
    return number[Math.floor(Math.random() * number.length)];
}

function getSymbol() {
    return symbol[Math.floor(Math.random() * symbol.length)];
}

function generatePassword() {
    const len = lengthEl.value;
    let password = '';

    if (lowerEl.checked) {
        password += getLowerCase();
    }
    if (upperEl.checked) {
        password += getUpperCase();
    }
    if (numberEl.checked) {
        password += getNumber();
    }
    if (symbolEl.checked) {
        password += getSymbol();
    }

    for (let i = password.length; i < len; i++) {
        const x = generateX();
        password += x;
    }

    pwEl.innerText = password;
}

function generateX() {
    const xs = [];

    if (lowerEl.checked) {
        xs.push(getLowerCase());
    }
    if (upperEl.checked) {
        xs.push(getUpperCase());
    }
    if (numberEl.checked) {
        xs.push(getNumber());
    }
    if (symbolEl.checked) {
        xs.push(getSymbol());
    }

    if (xs.length === 0) {
        return '';
    }

    return xs[Math.floor(Math.random() * xs.length)];
}

generateEl.addEventListener('click', generatePassword);

copyEl.addEventListener('click', function () {
    const textArea = document.createElement('textarea');
    const passwrd = pwEl.innerText;

    if (!passwrd) {
        return;
    }

    textArea.value = passwrd;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    textArea.remove();
    alert('Password copy to clipboard');
});