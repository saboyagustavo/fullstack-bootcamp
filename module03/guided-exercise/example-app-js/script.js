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
        const now = new Date;
        clickArray.push(Util.getNewTimestamp(now));

        handleButtonClick.render();
    },

    render() {
        list.innerHTML = '';
        let listItems = '';

        clickArray.map(item => {
            listItems += `<li>${item}</li>`;
        });

        list.innerHTML = listItems;
        document.title = clickArray.length;
    },
}
