const path = 'https://randomuser.me/api/?seed=javascript&results=100&nat=BR&noinfo';
const displayedUsers = [];
let input = null;
let inputName = null;

async function fetchData(path) {
    const data = await fetch(path);
    const json = await data.json();
    return json;
}

function init() {
    console.log('Page loaded successfully.');
    input = document.querySelector('#searchBar');
    preventFormSubmit();
    activateInput();
}

function preventFormSubmit() {
    function handleFormSubmit(event) {
        event.preventDefault();
    }
    let form = document.querySelector('form');
    form.addEventListener('submit', handleFormSubmit);
}

function activateInput() {
    async function searchName(name) {
        inputName = name;
        const data = (await fetchData(path)).results;
        let result = data.filter((user) => {
            return user.name.first === inputName;
        });

        console.log('Here is your result: ', result);
        //console.log(data);
    }

    function handleTyping(event) {
        if (event.key === 'Enter') {
            console.log('searching...');
            searchName(event.target.value);
        }
    }

    input.focus();
    input.addEventListener('keyup', handleTyping);
}

init();
