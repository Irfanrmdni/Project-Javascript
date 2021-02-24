const btnEl = document.getElementById('btn');
const containerEl = document.getElementById('container');

btnEl.addEventListener('click', function () {
    createNotification();
});

function createNotification() {
    const notification = document.createElement('div');
    notification.classList.add('toast');

    notification.innerText = 'This challange is crazy!';

    containerEl.appendChild(notification);

    setInterval(function () {
        notification.remove();
    }, 3000);
}