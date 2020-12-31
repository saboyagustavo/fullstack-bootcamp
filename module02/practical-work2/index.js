const fs = require('fs').promises;
let states = getStates();

async function start() {
    console.log('\n Program started.');
    // createFiles();
    printMajorStates();
    printCitiesNamesLengthComparison(true);
    printCitiesNamesLengthComparison(false);
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
    const cities = await getCities(uf);
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

        const getTopFive = (list) => list.slice(0, 5);
        getTopFive(list).forEach((state) => result.push(state.UF + '-' + state.amount));

        function getCityCount() {
            let cityCount = 0;
            for (let i = 0; i < 5; i++) {
                cityCount += getTopFive(list)[i].amount;
            }
            return cityCount;
        }

        if (more) {
            console.log('\nChecking out top five states with more cities in: ', result);
            console.log('Total of cities: ', getCityCount());
        } else {
            console.log('\nChecking out top five states with less cities in: ', result);
            console.log('Total of cities: ', getCityCount());
        }
    };

    getResults(true);
    getResults(false);
}

async function printCitiesNamesLengthComparison(longest) {
    states = await states;

    let nameCity;
    const list = [];
    const result = [];

    async function getCitiesNames(uf) {
        cities = await getCities(uf);
        nameCity = null;

        if (longest) {
            cities.forEach((city) => {
                if (!nameCity) nameCity = city;
                else if (city.Nome.length > nameCity.Nome.length) nameCity = city;
                else if (
                    city.Nome.length === nameCity.Nome.length &&
                    city.Nome.toLowerCase() < nameCity.Nome.toLowerCase()
                )
                    nameCity = city;
            });
            return nameCity;
        } else {
            cities.forEach((city) => {
                if (!nameCity) nameCity = city;
                else if (city.Nome.length < nameCity.Nome.length) nameCity = city;
                else if (
                    city.Nome.length === nameCity.Nome.length &&
                    city.Nome.toLowerCase() < nameCity.Nome.toLowerCase()
                )
                    nameCity = city;
            });
            return nameCity;
        }
    }

    for (let state of states) {
        cityObj = await getCitiesNames(state.Sigla);
        list.push({ UF: state.Sigla, Name: cityObj.Nome });
    }

    for (let i = 0; i < list.length; i++) {
        result.push(`${list[i].UF} - ${list[i].Name}`);
    }

    nameCity = null;

    if (longest) {
        list.forEach((city) => {
            if (!nameCity) nameCity = city;
            else if (city.Name.length > nameCity.Name.length) nameCity = city;
            else if (city.Name.length === nameCity.Name.length && city.Name.toLowerCase() < nameCity.Name.toLowerCase())
                nameCity = city;
        });
        console.log(`\n Here is the longest name among all cities: ${nameCity.Name} - ${nameCity.UF}`);
    } else {
        list.forEach((city) => {
            if (!nameCity) nameCity = city;
            else if (city.Name.length < nameCity.Name.length) nameCity = city;
            else if (city.Name.length === nameCity.Name.length && city.Name.toLowerCase() < nameCity.Name.toLowerCase())
                nameCity = city;
        });
        console.log(`\n Here is the shortest city name among all: ${nameCity.Name} - ${nameCity.UF}`);
    }

    if (longest) {
        console.log('\nHere is the array of the cities of longest names:', result);
    } else {
        console.log('\nHere is the array of the cities of shortest names:', result);
    }
}

start();
