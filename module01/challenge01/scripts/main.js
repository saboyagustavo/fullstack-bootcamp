const path = 'https://randomuser.me/api/?seed=javascript&results=100&nat=BR&noinfo';
let displayedUser = null,
    userList = null,
    input = null,
    form = null,
    userPanel = null,
    statistics = null,
    searchResults = null;

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
    form = document.querySelector('form');
    userPanel = document.getElementById('userPanel');
    userList = document.getElementById('mainResults');
    displayedUser = document.getElementById('highlightedResult');
    statistics = document.getElementById('statistics');
    searchResults = document.getElementById('results');
}

function preventFormSubmit() {
    function handleFormSubmit(event) {
        event.preventDefault();
    }

    form.addEventListener('submit', handleFormSubmit);
}

function searchName(name) {
    console.log('buscando: ', name);
    const filteredText = name.toLowerCase();
    const filteredUsers = users.filter(user => {
        return user.nameLowerCase.includes(filteredText);
    });
    renderUsers(filteredUsers);
    renderStatistics(filteredUsers);
}

function activateInput() {
    input.focus();
    input.addEventListener('keyup', handleTyping);
}

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

function clearInput() {
    input.value = '';
    input.focus();
}

function clearResults() {
    displayedUser.innerHTML = '';
    userList.innerHTML = '';
}

function renderUsers(users) {
    clearResults();
    users.length > 0
        ? (searchResults.textContent = `Showing ${users.length} of ${users.length} results`)
        : (searchResults.textContent = 'Sorry, it did not match any results');

    users.sort((a, b) => {
        return a.nameLowerCase.localeCompare(b.nameLowerCase);
    });

    const setUserList = users => {
        users.forEach(({ id, name, location, age, picture }) => {
            const li = document.createElement('li');
            const userData = `
                <p>${name}</p>
                <p>${location}</p>
                <p>${age}</p>
                `;
            const userImage = `<img class="avatar" src="${picture}" alt="${name}"`;
            li.innerHTML = `${userImage} ${userData}`;
            li.id = id;
            userList.appendChild(li);
        });
    };

    const setHighlitedUser = () => {};

    setUserList(users);
    setHighlitedUser();
    console.log('Here is the filtered users: ', users);
}

function renderStatistics(users) {
    console.log('Here is the statistics: ', users);
}

init();
