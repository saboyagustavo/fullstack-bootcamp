var rangeInput = null;
var textInput = null;
var figureInput = null;

function start() {
    const title = document.querySelector('h1');
    title.innerHTML = 'Pick up a number!';
    mapInputs();
    addEvents();
}

function mapInputs() {
    rangeInput = document.getElementById('numbers');
    textInput = document.getElementById('in-full');
    figureInput = document.getElementById('figures');
}

function addEvents() {
    rangeInput.addEventListener('input', handleInputChange);
}

function handleInputChange(event) {
    rangeInput.value = event.target.value;
    changeNumber();
}

function changeNumber(num) {
    num = rangeInput.value;
    console.log(num);
}
start();
