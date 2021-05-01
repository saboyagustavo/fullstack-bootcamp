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
        const item = Util.getNewTimestamp(now);
        clickArray.push(item);

        handleButtonClick.render(item);
    },

    render(item) {
        let listItems = document.createElement('li');
        listItems.textContent = item;
        list.appendChild(listItems);

        console.log(list);
        document.title = clickArray.length;
    },
}
