const apiKey = '3265874a2c77ae4a04bb96236a642d2f';
const url = (city) => `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

const formEl = document.getElementById('form');
const searchEl = document.getElementById('search');
const mainEl = document.getElementById('main');

// mengambil cuaca berdasarkan lokasi
async function getWeatherByLocation(city) {
    const respon = await fetch(url(city), { origin: 'cors' });
    const responData = await respon.json();

    addWeatherToPage(responData);
}

// menambahkan cuaca ke halaman
function addWeatherToPage(data) {
    const temp = KelviToCelcius(data.main.temp);
    const weather = document.createElement('div');
    weather.classList.add('weather');

    weather.innerHTML = `
        <small>There are</small>
        <h2><img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">${temp}°C<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"></h2>
        <small>${data.weather[0].main}</small>
        
    `;
    //clean up
    mainEl.innerHTML = '';

    mainEl.appendChild(weather);
}

// mengubah kelvin to celcius
function KelviToCelcius(kelvin) {
    return Math.floor(kelvin - 273.15);
}

// membuat event form submit
formEl.addEventListener('submit', function (e) {
    e.preventDefault();
    const city = searchEl.value;

    if (city) {
        getWeatherByLocation(city);
    }
});