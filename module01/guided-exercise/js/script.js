// Application state variables
let tabCountries = null;
let tabFav = null;

let allCountries = [];
let favCountries = [];

let countCountries = 0;
let countFav = 0;

let totalPopulationList = 0;
let totalPopulationFav = 0;

let numberFormat = null;

window.addEventListener('load', () => {
    tabCountries = document.querySelector('#tabCountries');
    tabFav = document.querySelector('#tabFavorites');
    countCountries = document.querySelector('#countCountries');
    countFav = document.querySelector('#countFavorites');

    totalPopulationList = document.querySelector('#totalPopulationList');
    totalPopulationFav = document.querySelector('#totalPopulationFavorites');

    numberFormat = Intl.NumberFormat('en-US');
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
            formattedPopulation: formatNumber(population),
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
        const { name, flag, id, population, formattedPopulation } = country;
        const countryHTML = `
        <div class='country'>
            <div>
                <a id="${id}" class="waves-effect waves-light btn cyan">+</a>
            </div>
            <div>
                <img src="${flag}" alt="${name}"/>
            </div>
            <div>
                <ul>
                    <li>${name}</li>
                    <li><em>Population: ${formattedPopulation}</em></li>
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
        const { name, flag, id, population, formattedPopulation } = country;

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
                    <li><em>Population: ${formattedPopulation}</em></li>
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
    countCountries.textContent = allCountries.length;
    countFav.textContent = favCountries.length;

    const totalPopulation = allCountries.reduce((acc, curr) => {
        return acc + curr.population;
    }, 0);

    const totalFavorites = favCountries.reduce((acc, curr) => {
        return acc + curr.population;
    }, 0);

    totalPopulationList.textContent = formatNumber(totalPopulation);
    totalPopulationFav.textContent = formatNumber(totalFavorites);
}

function handleCountryButtons() {
    const countryButtons = Array.from(tabCountries.querySelectorAll('.btn'));
    const favButtons = Array.from(tabFav.querySelectorAll('.btn'));

    countryButtons.forEach((button) => {
        button.addEventListener('click', () => addToFavorites(button.id));
    });
    favButtons.forEach((button) => {
        button.addEventListener('click', () => removeFromFavorites(button.id));
    });
}

function addToFavorites(id) {
    const countryToAdd = allCountries.find((country) => country.id === id);
    favCountries = [...favCountries, countryToAdd];

    favCountries.sort((a, b) => {
        return a.name.localeCompare(b.name);
    });

    allCountries = allCountries.filter((country) => country.id !== id);
    render();
}
function removeFromFavorites(id) {
    const countryToRemove = favCountries.find((country) => country.id === id);
    allCountries = [...allCountries, countryToRemove];

    allCountries.sort((a, b) => {
        return a.name.localeCompare(b.name);
    });

    favCountries = favCountries.filter((country) => country.id !== id);
    render();
}

function formatNumber(number) {
    return numberFormat.format(number);
}
