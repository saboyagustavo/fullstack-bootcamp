let rangeInput = null;
let textInput = null;
let figureInput = null;

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
    let rangeValue = event.target.value;
    rangeInput.value = rangeValue;
    figureInput.textContent = changeNumber(rangeValue);
    textInput.textContent = inFull(rangeValue);
}

function changeNumber(num) {
    console.log(num);
    return num;
}
start();
