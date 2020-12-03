// Application state variables
let tabCountries = null;
let tabFav = null;

let allCountries = [];
let favCountries = [];

let countCountries = 0;
let countFav = 0;

let totalPopulationList = 0;
let totalPopulationFav = 0;

window.addEventListener('load', () => {
    tabCountries = document.querySelector('#tabCountries');
    tabFav = document.querySelector('#tabFavorites');
    countCountries = document.querySelector('#countCountries');
    countFav = document.querySelector('#countFavorites');

    totalPopulationList = document.querySelector('#totalPopulationList');
    totalPopulationFav = document.querySelector('#totalPopulationFavorites');

    fetchCountries();
});
async function fetchCountries() {}
