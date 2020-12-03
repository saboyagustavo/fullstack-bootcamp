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

async function fetchCountries() {
    const res = await fetch('https://restcountries.eu/rest/v2/all');
    const json = await res.json();
    allCountries = json.map((country) => {
        const { numericCode, name, population, flag } = country;
        return {
            id: numericCode,
            name,
            population,
            flag,
        };
    });
    render();
}

function render() {
    renderCountryList();
    renderFavorites();
    renderSummary();
    handleCountryButtons();
}

function renderCountryList() {
    console.log('rendering... country list');
}
function renderFavorites() {
    console.log('rendering... favorites');
}
function renderSummary() {
    console.log('rendering... summary');
}
function handleCountryButtons() {
    console.log('rendering... country buttons');
}
