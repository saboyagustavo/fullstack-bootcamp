window.addEventListener('load', start);
let list = null,
    timeStampButton = null;

const clickArray = [];

function start() {
    mapInputs();
    mapEvents();
}

function mapInputs() {
    list = document.getElementById('dataList');
    timeStampButton = document.querySelector('#clickButton');
}

function mapEvents() {
    timeStampButton.addEventListener('click', handleButtonClick.getTimeStamp);
}

const handleButtonClick = {
    getTimeStamp() {
        const now = new Date();
        clickArray.push(now.toISOString());

        handleButtonClick.render();
    },

    render() {
        list.innerHTML = '';

        clickArray.map(item => {
            listItems = document.createElement('li');
            listItems.innerText = `${item}`;
            list.appendChild(listItems);
        });
    },
}
