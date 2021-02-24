const submitEl = document.getElementById('submit');
const formEl = document.getElementById('form');
const formControlEl = document.querySelectorAll('.form-control');
const successEl = document.querySelector('.success');
const errorEl = document.querySelector('.error');
const usernameEl = document.getElementById('username');
const passwordEl = document.getElementById('password');
const password2El = document.getElementById('password2');
const emailEl = document.getElementById('email');

formEl.addEventListener('submit', function (e) {
    checkInput();

    e.preventDefault();
});

function checkInput() {
    const usernameValue = usernameEl.value.trim();
    const passwordValue = passwordEl.value.trim();
    const password2Value = password2El.value.trim();
    const emailValue = emailEl.value.trim();

    if (usernameValue === '') {
        setErrorFor(usernameEl, 'Username cannot be blank!');

    } else {
        setSuccessFor(usernameEl);
    }

    if (emailValue === '') {
        setErrorFor(emailEl, 'Email cannot be blank!');
    } else if (!isEmail(emailValue)) {
        setErrorFor(emailEl, 'Email is not valid!');
    } else {
        setSuccessFor(emailEl);
    }

    if (passwordValue === '') {
        setErrorFor(passwordEl, 'Password cannot be blanl!');
    } else {
        setSuccessFor(passwordEl);
    }

    if (password2Value === '') {
        setErrorFor(password2El, 'Password cannot be blanl!');
    } else if (password2Value != passwordValue) {
        setErrorFor(passwordEl, 'Password does not match!');
    } else {
        setSuccessFor(password2El);
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const smallText = formControl.querySelector('small');

    smallText.innerText = message;

    formControl.className = 'form-control error';
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function isEmail(email) {
    return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);
} 