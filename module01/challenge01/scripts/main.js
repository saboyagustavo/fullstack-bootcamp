const path = 'https://randomuser.me/api/?seed=javascript&results=100&nat=BR&noinfo';
const displayedUsers = [];
let input = null;
let inputName = null;

async function fetchData(path) {
    const data = await fetch(path);
    const json = await data.json();
    return json;
}

async function fetchUsers() {
    const users = (await fetchData(path)).results.map(({ login, name, dob, gender, picture, location }) => {
        const fullName = `${name.first} ${name.last}`;
        return {
            id: login.uuid,
            name: fullName,
            nameLowerCase: fullName.toLowerCase(),
            age: dob.age,
            gender: gender,
            location: location.state,
            picture: picture.large,
        };
    });
    return users;
}

async function init() {
    console.log('Page loaded successfully.');
    users = await fetchUsers();
    mapElements();
    preventFormSubmit();
    activateInput();
}

function mapElements() {
    input = document.querySelector('#searchBar');
}

function preventFormSubmit() {
    function handleFormSubmit(event) {
        event.preventDefault();
    }

    let form = document.querySelector('form');
    form.addEventListener('submit', handleFormSubmit);
}

async function searchName(name) {
    console.log('buscando: ', name);
    const filteredText = name.toLowerCase();
    const filteredUsers = users.filter((user) => {
        return user.nameLowerCase.includes(filteredText);
    });
    renderUsers(filteredUsers);
    renderStatistics(filteredUsers);
}

function activateInput() {
    function handleTyping(event) {
        const currentKey = event.key;
        const searchedName = event.target.value;
        const hasText = !!event.target.value && event.target.value.trim() !== '';

        if (!hasText) {
            clearInput();
            return;
        }

        if (currentKey === 'Enter' && searchedName.trim() !== '') {
            searchName(searchedName);
            clearInput();
        }
    }

    input.focus();
    input.addEventListener('keyup', handleTyping);
}

function clearInput() {
    input.value = '';
    input.focus();
}

function renderUsers(users) {
    console.log('Here is the filtered users: ', users);
}

function renderStatistics(users) {
    console.log('Here is the statistics: ', users);
}

init();
