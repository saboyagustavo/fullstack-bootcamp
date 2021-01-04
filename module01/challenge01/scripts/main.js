const path = 'https://randomuser.me/api/?seed=javascript&results=100&nat=BR&noinfo';

async function fetchData(path) {
    const data = await fetch(path);
    const json = await data.json();
    return json;
}

async function init() {
    const data = (await fetchData(path)).results;
    console.log(data);
}

init();
