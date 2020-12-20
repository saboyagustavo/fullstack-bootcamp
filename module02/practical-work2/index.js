const fs = require('fs').promises;

async function start() {
    console.log('\n Program started.');
    // createFiles();

    console.log(`\n Checking how many cities there is in Bahia: ${await getCitiesAmount('BA')}`);

    console.log('\n End of the process.');
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
start();
