const fs = require('fs').promises;

async function start() {
    let data = await fs.readFile('./files/Estados.json');
    const states = JSON.parse(data);
    data = await fs.readFile('./files/Cidades.json');
    const cities = JSON.parse(data);
    console.log(states);
    console.log(cities);
}
start();
