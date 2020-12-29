const fs = require('fs').promises;
let states = getStates();

async function start() {
    console.log('\n Program started.');
    // createFiles();
    // printMajorStates();
    printLongerCitiesNames();
}

async function createFiles() {
    console.log('\nReading states file');
    let data = await fs.readFile('./files/Estados.json');
    const states = JSON.parse(data);

    console.log('\nReading cities file');
    data = await fs.readFile('./files/Cidades.json');
    const cities = JSON.parse(data);

    console.log('\nCreating state files');
    for (let state of states) {
        const stateCities = cities.filter((city) => city.Estado === state.ID);
        await fs.writeFile(`./files/states/${state.Sigla}.json`, JSON.stringify(stateCities));
    }
}

async function getCities(uf) {
    const data = await fs.readFile(`./files/states/${uf}.json`);
    const cities = JSON.parse(data);
    return cities;
}

async function getCitiesAmount(uf) {
    const data = await fs.readFile(`./files/states/${uf}.json`);
    const cities = JSON.parse(data);
    return cities.length;
}

async function getStates() {
    const states = JSON.parse(await fs.readFile('./files/Estados.json'));
    return await states;
}

async function printMajorStates() {
    states = await states;
    const list = [];
    for (state of states) {
        const amount = await getCitiesAmount(state.Sigla);
        list.push({ UF: state.Sigla, amount });
    }

    function doSort(more) {
        let x = 1;
        if (more) x = -1;
        list.sort((a, b) => {
            if (a.amount < b.amount) return x * -1;
            else if (a.amount > b.amount) return x;
            else return 0;
        });
    }

    const getResults = (more) => {
        const result = [];

        doSort(more);
        //console.log('\nHere is the sorted list: ', list);

        list.slice(0, 5).forEach((state) => result.push(state.UF + '-' + state.amount));
        if (more) {
            console.log('\nChecking out states with more cities in: ', result);
            // [“UF-93”, “UF-82”, “UF-74”, “UF-72”, “UF-65”]
        } else {
            console.log('\nChecking out states with less cities in: ', result);
            // [“UF-65”, “UF-72”, “UF-74”, “UF-82”, “UF-93”]
        }
    };

    getResults(true);
    getResults(false);
}

async function printLongerCitiesNames() {
    states = await states;

    let longestNameCity;
    const list = [];
    const result = [];

    async function getLongestNameCity(uf) {
        cities = await getCities(uf);
        longestNameCity = null;

        cities.forEach((city) => {
            if (!longestNameCity) longestNameCity = city;
            else if (city.Nome.length > longestNameCity.Nome.length) longestNameCity = city;
            else if (
                city.Nome.length === longestNameCity.Nome.length &&
                city.Nome.toLowerCase() < longestNameCity.Nome.toLowerCase()
            )
                longestNameCity = city;
        });
        return longestNameCity;
    }

    for (let state of states) {
        longestNameCity = await getLongestNameCity(state.Sigla);
        list.push({ UF: state.Sigla, Name: longestNameCity.Nome });
    }

    for (let i = 0; i < list.length; i++) {
        result.push(`${list[i].UF} - ${list[i].Name}`);
    }

    //console.log('\nHere is the list:', list);
    console.log('\nHere is the array of the cities of longest names:', result);
}

start();
