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
    let countriesHTML = '<div>';
    allCountries.forEach((country) => {
        const { name, flag, id, population } = country;
        const countryHTML = `
        <div class='country'>
            <div>
                <a id="${id}" class="waves-effect waves-light btn">+</a>
            </div>
            <div>
                <img src="${flag}" alt="${name}"/>
            </div>
            <div>
                <ul>
                    <li>${name}</li>
                    <li><em>Population: ${population}</em></li>
                </ul>
            </div>
        </div>
        `;
        countriesHTML += countryHTML;
    });
    countriesHTML += '</div>';
    tabCountries.innerHTML = countriesHTML;
}

function renderFavorites() {
    let favoritesHTML = '<div>';

    favCountries.forEach((country) => {
        const { name, flag, id, population } = country;

        const favCountryHTML = `
        <div class='country'>
            <div>
                <a id="${id}" class="waves-effect waves-light btn orange darken-4">+</a>
            </div>
            <div>
                <img src="${flag}" alt="${name}"/>
            </div>
            <div>
                <ul>
                    <li>${name}</li>
                    <li><em>Population: ${population}</em></li>
                </ul>
            </div>
        </div>
        `;
        favoritesHTML += favCountryHTML;
    });
    favoritesHTML += '</div>';
    tabFav.innerHTML = favoritesHTML;
}
function renderSummary() {
    console.log('rendering... summary');
}
function handleCountryButtons() {
    console.log('rendering... country buttons');
}
