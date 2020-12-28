const fs = require('fs').promises;

async function start() {
    console.log('\n Program started.');
    // createFiles();
    printMajorStates();
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

async function getCitiesAmount(uf) {
    const data = await fs.readFile(`./files/states/${uf}.json`);
    const cities = JSON.parse(data);
    return cities.length;
}

async function printMajorStates() {
    const states = JSON.parse(await fs.readFile('./files/Estados.json'));

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

start();
