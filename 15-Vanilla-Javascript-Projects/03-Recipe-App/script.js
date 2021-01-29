const makanan = document.getElementById('makanan');
const favContainer = document.getElementById('fav-makan');
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search');

const mealPopup = document.getElementById('meal-popup');
const btnClosePopup = document.getElementById('close-popup');

getRandomMakanan();
fetchFavMeals();

// mengambil makanan random
async function getRandomMakanan() {
    const respMakanan = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');

    const respData = await respMakanan.json();
    const randomMakanan = respData.meals[0];

    tambahMakanan(randomMakanan, true);
}

// mengambil makanan by id
async function getMakananById(id) {
    const resp = await fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + id);

    const respData = await resp.json();
    const makans = respData.meals[0];

    return makans;
}

// mengambil makanan search
async function getMakananBySearch(keyword) {
    const respSearch = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=' + keyword);

    const respData = await respSearch.json();
    const meals = respData.meals;

    return meals;
}

// menambah makanan random
function tambahMakanan(dataMakanan, random = false) {
    const makan = document.createElement('div');
    makan.classList.add('makan');
    console.log(dataMakanan);
    makan.innerHTML = `<div class="makan-header">
    ${random ? `<span class="random">Makanan random</span>` : ''}
        <img src="${dataMakanan.strMealThumb}" alt="${dataMakanan.strMeal}">
    </div>
    <div class="makan-body">
        <h4>${dataMakanan.strMeal}</h4>
        <button class="fav-btn"><i class="fa-2x fas fa-heart"></i></button>
    </div>`;

    const btnFav = makan.querySelector('.fav-btn');
    btnFav.addEventListener('click', function () {
        if (btnFav.classList.contains('active')) {
            hapusMakananLS(dataMakanan.idMeal);
            btnFav.classList.remove('active');
        } else {
            addMakananToLS(dataMakanan.idMeal);
            btnFav.classList.add('active');
        }
    });

    makanan.appendChild(makan);
}

// menambah makanan ke localstorage
function addMakananToLS(makananIds) {
    const makanids = getMakananToLS();

    localStorage.setItem('makanids', JSON.stringify([...makanids, makananIds]));
}

// menghapus makanan dari localstorage
function hapusMakananLS(makanId) {
    const makanIds = getMakananToLS();

    localStorage.setItem('makanIds', JSON.stringify(makanIds.filter((id) => id !== makanId)));
}

// mendapatkan makanan dari localstorage
function getMakananToLS() {
    const makanid = JSON.parse(localStorage.getItem('makanid'));

    return makanid === null ? [] : makanid;
}

async function fetchFavMeals() {
    favContainer.innerHTML = '';

    const mealsId = getMakananToLS();

    for (let i = 0; i < mealsId.length; i++) {
        const mealsID = mealsId[i];
        makans = await getMakananById(mealsID);
        tambahMakananFav(makans);
    }
}

// menambah makanan random
function tambahMakananFav(dataMakanan) {
    const makanFav = document.createElement('li');

    makanFav.innerHTML = `<img src="${dataMakanan.strMealThumb}" alt="${dataMakanan.strMeal}"><span>${dataMakanan.strMeal}</span>
    <button class="clear"><i class="fa-2x fas fa-window-close"></i></button>`;

    const btnClear = makanFav.querySelector('.clear');

    btnClear.addEventListener('click', () => {
        hapusMakananLS(dataMakanan.idMeal);
        // clean the container
        fetchFavMeals();
    });

    favContainer.appendChild(makanFav);
}

searchBtn.addEventListener('click', async () => {
    makanan.innerHTML = '';

    const search = searchInput.value;

    const meals = await getMakananBySearch(search);

    if (meals) {
        meals.forEach((m) => {
            tambahMakanan(m);
        });
    }
});

btnClosePopup.addEventListener('click', function () {
    mealPopup.classList.add('hidden');
});