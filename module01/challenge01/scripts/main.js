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
    const users = (await fetchData(path)).results.map(({ login, email, name, dob, gender, picture, location }) => {
        const fullName = `${name.first} ${name.last}`;
        return {
            id: login.uuid,
            name: fullName,
            nameLowerCase: fullName.toLowerCase(),
            username: login.username,
            email: email,
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
    renderGenderStatistics(getGenderStatistics(filteredUsers));
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
    statistics.innerHTML = '';
}

function renderUsers(users) {
    clearResults();
    users.length > 0
        ? (searchResults.textContent = `Showing ${users.length} of ${users.length} results`)
        : (searchResults.textContent = 'Sorry, it did not match any results');

    users.sort((a, b) => {
        return a.nameLowerCase.localeCompare(b.nameLowerCase);
    });

    const setHighlitedUser = users => {
        const user = [users[0]];
        user.map(({ id, email, username, name, location, age, picture }) => {
            const figure = document.createElement('figure');
            const caption = document.createElement('figcaption');
            const description = document.createElement('li');
            const list = document.createElement('ul');

            const userImage = `
                            <img class="profile-pic" src="${picture}" alt="${name}"/>
                `;

            const userTitle = `
                <p><strong>${name}</strong></p>
                <p>${location}</p>
                `;

            const userDescription = `
                <p>${age} years</p>
                <p>${email}</p>
                <p>${username}</p>
                `;

            description.innerHTML = `${userDescription}`;
            list.appendChild(description);
            caption.innerHTML = `${userTitle}`;
            figure.innerHTML = `${userImage}`;
            figure.appendChild(caption);
            displayedUser.appendChild(figure);
            displayedUser.appendChild(list);
        });
    };

    setHighlitedUser(users);
    const modifiedUsers = [];
    Object.assign(modifiedUsers, users);
    modifiedUsers.shift();

    const setUserList = users => {
        users.forEach(({ id, name, location, age, picture }) => {
            const li = document.createElement('li');
            const div = document.createElement('div');
            const figure = document.createElement('figure');
            const img = document.createElement('img');

            const userData = `
                    <p>${name}</p>
                    <p>${location}</p>
                    <p>${age}</p>
                `;

            img.setAttribute('class', 'avatar');
            img.setAttribute('src', `${picture}`);
            img.setAttribute('alt', `${name}`);
            div.innerHTML = `${userData}`;
            figure.appendChild(img);
            li.appendChild(figure);
            li.appendChild(div);
            li.id = id;
            userList.appendChild(li);
            userList.classList.add('userList');
        });
    };

    setUserList(modifiedUsers);

    console.log('Here is the filtered users: ', users);
}

function getGenderStatistics(users) {
    const countMales = users.filter(({ gender }) => gender === 'male').length;
    const countFemales = users.filter(({ gender }) => gender === 'female').length;

    return [
        { name: 'Male', points: [{ x: 'Male', y: countMales }] },
        { name: 'Female', points: [{ x: 'Female', y: countFemales }] },
    ];
}

function renderGenderStatistics(series) {
    JSC.Chart('statistics', {
        type: 'horizontal column',
        series: series,
        //...
        //Color Name
        title_label_color: 'red',
        //Hex color values
        yAxis_label_color: '#FF0000',
        //rgb(red,green,blue) to specify RGB values individually.
        yAxis_defaultTick_label_color: 'rgb(20,20,20)',
        //rgba(red,green,blue,alpha) to specify RGB values individually and alpha from 0 (transparent) to 1 (opaque).
        legend_defaultEntry_style_color: 'rgba(20,20,20,.2)',
        //...
    });
}

init();
